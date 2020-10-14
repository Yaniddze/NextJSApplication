// Core
import {
  ChangeEvent,
  FC, MouseEvent, useState,
} from 'react';
import styled from 'styled-components';

import InputMask from 'react-input-mask';

// Material components
import { TextField } from '@material-ui/core';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import PhoneIcon from '@material-ui/icons/Phone';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';

import { DialogWindow } from './modal';
import { RoundButton } from './buttons';

import { MinWidths } from '../app/screens';
import { useScreens } from '../hooks/useScreens';

type MobileProp = {
  mobile: boolean;
}

const Wrapper = styled.div<MobileProp>`
  height: ${(props): string => (props.mobile ? 'auto' : '245px')};
  
  background: white;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.15);
  border-radius: 10px;
  
  & > form {
    height: 100%;

    > div:first-child {
      padding-top: 20px;

      display: ${(props): string => (props.mobile ? 'block' : 'flex')};
      
      height: ${(props): string => (props.mobile ? 'auto' : '100px')};
      
      align-items: center;
      
      > span {
        height: 100px;
        width: 1px;
        background: #CAE7FE;
        display:${(props): string => (props.mobile ? 'none' : 'block')};
      }
      
      > div {
        position: relative;
        width: 100%;
        display: flex;
        align-items: center;
        margin: ${(props): string => (props.mobile ? '25px 0' : '0')};
        
        justify-content: space-around;
        
        > *:first-child {
          position: absolute;
          left: 0;
          color: #00BFA5;
          margin-left: 20px;
          display:${(props): string => (props.mobile ? 'none' : 'block')};
        }
      }
    }
  }
`;

const TextFieldWrapper = styled.div<MobileProp>`
  width: 100%;
  height: 60px;
  
  display: flex;
  
  ${(props): string => (props.mobile ? 'padding: 0 10px;' : '')}
  
  > *:first-child {
  
    width: ${(props): string => (props.mobile ? '100' : '70')}%;
    
    margin: 0 auto;
    
    input {
      font-size: 14px;
    }
  }
  
`;

const ButtonWrapper = styled.div<MobileProp>`
  width: 100%;
  height: ${(props): string => (props.mobile ? 'auto' : '125px')};
  display: flex;
  
  ${(props): string => (props.mobile ? 'padding: 15px 0; margin-top:-15px;' : '')}
  
  > div {
    margin: auto;
  }
`;

export type FormValues = {
  username: string,
  email: string,
  phone: string,
}

type PropTypes = {
  children?: never;
  onSubmit:(values: FormValues) => void;
}

export const InfoEditor: FC<PropTypes> = (
  { onSubmit }: PropTypes,
) => {
  const [userInfo, setUserInfo] = useState<FormValues>({
    username: '',
    email: '',
    phone: '',
  });
  const [dialogShow, setDialogShow] = useState(false);

  const [submitted, setSubmitted] = useState(false);

  const screen = useScreens();

  const { username, email, phone } = userInfo;
  const splitEmail = email.split('@');
  const splitName = username.split(' ');

  const errors = {
    username: {
      valid: splitName.length > 1 && splitName[0].length >= 2 && splitName[1].length >= 2,
      message: 'Неверный формат',
    },
    email: {
      valid: splitEmail.length === 2 && (splitEmail[1] === 'gmail.com' || splitEmail[1] === 'mail.ru'),
      message: 'Неверный формат',
    },
    phone: {
      valid: phone === '' || /\+7 \d{3} \d{3} \d{2} \d{2}$/.test(phone),
      message: 'Неверный формат',
    },
  };

  const handleSubmit = (event: MouseEvent) => {
    event.preventDefault();

    if (errors.username.valid && errors.email.valid && errors.phone.valid) {
      setDialogShow(true);
    }

    setSubmitted(true);
  };

  const handleDialogSuccess = (): void => {
    setDialogShow(false);
    onSubmit(userInfo);
  };

  const handleDialogFailed = (): void => {
    setDialogShow(false);
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    if (name !== null && value !== null) {
      setUserInfo((old) => ({
        ...old,
        [name]: value,
      }));
    }
  };

  let mobile = false;

  switch (screen) {
    case MinWidths.PC:
      mobile = false;
      break;
    case MinWidths.Mobile:
      mobile = true;
      break;

    default:
      // eslint-disable-next-line no-case-declarations,@typescript-eslint/no-unused-vars
      const x: never = screen;
  }
  
  return (
    <Wrapper mobile={mobile}>
      <DialogWindow
        open={dialogShow}
        onSuccess={handleDialogSuccess}
        onFailed={handleDialogFailed}
        successTitle="Сохранить"
        failedTitle="Не сохранять"
        text="Сохранить изменения?"
      />
      <form>

        <div>
          <div>
            <AssignmentIndIcon width={30} height={30} />
            <TextFieldWrapper mobile={mobile}>
              <TextField
                onChange={handleChange}
                placeholder="Укажите вашу фамилию и имя"
                label="Фамилия и имя"
                name="username"
                variant="outlined"
                InputLabelProps={{
                  shrink: true,
                }}
                helperText={submitted && !errors.username.valid && errors.username.message}
                error={submitted && !errors.username.valid}
              />
            </TextFieldWrapper>
          </div>

          <span />

          <div>
            <AlternateEmailIcon width={30} height={30} />
            <TextFieldWrapper mobile={mobile}>
              <TextField
                onChange={handleChange}
                placeholder="Ivanova@mail.ru"
                label="E-mail"
                name="email"
                variant="outlined"
                InputLabelProps={{
                  shrink: true,
                }}
                helperText={submitted && !errors.email.valid && errors.email.message}
                error={submitted && !errors.email.valid}
              />
            </TextFieldWrapper>
          </div>

          <span />

          <div>
            <PhoneIcon width={30} height={30} />
            <InputMask
              mask="+7 999 999 99 99"
              onChange={handleChange}
              value={userInfo.phone}
              disabled={false}
              maskChar=" "
            >
              {() => (
                <TextFieldWrapper mobile={mobile}>
                  <TextField
                    placeholder="Укажите номер телефона"
                    label="Номер телефона"
                    name="phone"
                    variant="outlined"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    helperText={submitted && !errors.phone.valid && errors.phone.message}
                    error={submitted && !errors.phone.valid}
                  />
                </TextFieldWrapper>
              )}
            </InputMask>
          </div>
        </div>

        <ButtonWrapper mobile={mobile}>
          <RoundButton
            title="Сохранить изменения"
            onClick={handleSubmit}
          />
        </ButtonWrapper>

      </form>

    </Wrapper>
  );
};

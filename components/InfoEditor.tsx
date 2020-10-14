// Core
import {
  ChangeEvent,
  FC, MouseEvent, useState,
} from 'react';
import styled from 'styled-components';

import InputMask from 'react-input-mask';

// Material components
import { TextField, withStyles } from '@material-ui/core';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import PhoneIcon from '@material-ui/icons/Phone';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import Button from '@material-ui/core/Button';

const Wrapper = styled.div`
  height: 245px;
  
  background: white;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.15);
  border-radius: 10px;
  
  & > form {
    height: 100%;

    > div:first-child {
      padding-top: 20px;

      display: flex;
      
      height: 100px;
      
      align-items: center;
      
      > span {
        height: 100px;
        width: 1px;
        background: #CAE7FE;
      }
      
      > div {
        position: relative;
        width: 100%;
        display: flex;
        align-items: center;
        
        justify-content: space-around;
        
        > *:first-child {
          position: absolute;
          left: 0;
          color: #00BFA5;
          margin-left: 20px;
        }
      }
    }
  }
`;

const WrappedTexField = styled(TextField)`
  width: 70%;
  height: 60px;
  
  input {
    font-size: 14px;
  }
`;

const ButtonWrapper = styled.div`
  width: 100%;
  height: 125px;
  display: flex;
  
  > button {
    margin: auto;
  }
`;

const StyledButton = withStyles({
  root: {
    borderRadius: 50,
    color: 'white',
    fontSize: '14px',
    textTransform: 'none',
    fontWeight: 'normal',
    padding: '10px 15px',
  },
})(Button);

type FormValues = {
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

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    if (name !== null && value !== null) {
      setUserInfo((old) => ({
        ...old,
        [name]: value,
      }));
    }
  };

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
      onSubmit(userInfo);
    }

    setSubmitted(true);
  };
  
  return (
    <Wrapper>

      <form>

        <div>
          <div>
            <AssignmentIndIcon width={30} height={30} />
            <WrappedTexField
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
          </div>

          <span />

          <div>
            <AlternateEmailIcon width={30} height={30} />
            <WrappedTexField
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
                <WrappedTexField
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
              )}
            </InputMask>
          </div>
        </div>

        <ButtonWrapper>
          <StyledButton
            onClick={handleSubmit}
            variant="contained"
            color="primary"
          >
            Сохранить изменения
          </StyledButton>
        </ButtonWrapper>

      </form>

    </Wrapper>
  );
};

import { FC } from 'react';
import styled from 'styled-components';

import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import PhoneIcon from '@material-ui/icons/Phone';

import { MinWidths } from '../app/screens';
import { useScreens } from '../hooks/useScreens';

type PropTypes = {
  children?: never;
  email: string;
  phone: string;
}

const initialState = {
  email: 'Введите email',
  phone: 'Укажите номер телефона',
};

type MobileProps = {
  mobile: boolean;
}

const Wrapper = styled.div<MobileProps>`
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.15);
  border-radius: 10px;
  background: white;
  height: ${(props): string => (props.mobile ? '128' : '192')}px;
  
  & > div {
    height: ${(props): string => (props.mobile ? '64' : '96')}px;
    display: flex;
    align-items: center;
    
    font-size: ${(props): string => (props.mobile ? '14' : '18')}px;
    
    border-bottom: 1px solid #CAE7FE;
    
    & > *:first-child {
      margin-left: ${(props): string => (props.mobile ? '10' : '77')}px;
      
      color: #00BFA5;
    }
    
    & > *:last-child {
      margin-left: ${(props): string => (props.mobile ? '10' : '45')}px;
    }
  }
  
  & > div:last-child {
    border-bottom: none;
  }
`;

export const InfoHolder: FC<PropTypes> = (
  { email, phone }: PropTypes,
) => {
  const screen = useScreens();

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

      <div>
        <AlternateEmailIcon width={30} height={30} />
        <div>
          {email !== '' ? email : initialState.email}
        </div>
      </div>

      <div>
        <PhoneIcon width={30} height={30} />
        <div>
          {phone !== '' ? phone : initialState.phone}
        </div>
      </div>

    </Wrapper>
  );
};

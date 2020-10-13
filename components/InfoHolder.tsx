import { FC } from 'react';
import styled from 'styled-components';

import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import PhoneIcon from '@material-ui/icons/Phone';

type PropTypes = {
  children?: never;
  email: string;
  phone: string;
}

const initialState = {
  email: 'Введите email',
  phone: 'Укажите номер телефона',
};

const Wrapper = styled.div`
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.15);
  border-radius: 10px;
  background: white;
  height: 192px;
  
  & > div {
    height: 96px;
    display: flex;
    align-items: center;
    
    font-size: 18px;
    
    border-bottom: 1px solid #CAE7FE;
    
    & > *:first-child {
      margin-left: 77px;
      
      color: #00BFA5;
    }
    
    & > *:last-child {
      margin-left: 45px;
    }
  }
  
  & > div:last-child {
    border-bottom: none;
  }
`;

export const InfoHolder: FC<PropTypes> = (
  { email, phone }: PropTypes,
) => (
  <Wrapper>

    <div>
      <AlternateEmailIcon width={30} height={30} />
      <div>
        { email !== '' ? email : initialState.email }
      </div>
    </div>

    <div>
      <PhoneIcon width={30} height={30} />
      <div>
        { phone !== '' ? phone : initialState.phone }
      </div>
    </div>

  </Wrapper>
);

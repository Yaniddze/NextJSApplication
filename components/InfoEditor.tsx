import { FC } from 'react';
import styled from 'styled-components';

import { TextField } from '@material-ui/core';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import PhoneIcon from '@material-ui/icons/Phone';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';

const Wrapper = styled.div`
  height: 245px;
  
  background: white;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.15);
  border-radius: 10px;
  
  & > form {
    padding-top: 20px;

    > div:first-child {
    
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

export const InfoEditor: FC = () => (
  <Wrapper>

    <form>

      <div>
        <div>
          <AssignmentIndIcon width={30} height={30} />
          <WrappedTexField
            placeholder="Укажите вашу фамилию и имя"
            label="Фамилия и имя"
            variant="outlined"
            InputLabelProps={{
              shrink: true,
            }}
          />
        </div>

        <span />

        <div>
          <AlternateEmailIcon width={30} height={30} />
          <WrappedTexField
            placeholder="Ivanova@mail.ru"
            label="E-mail"
            variant="outlined"
            InputLabelProps={{
              shrink: true,
            }}
          />
        </div>

        <span />

        <div>
          <PhoneIcon width={30} height={30} />
          <WrappedTexField
            placeholder="Укажите номер телефона"
            label="Номер телефона"
            variant="outlined"
            InputLabelProps={{
              shrink: true,
            }}
          />
        </div>
      </div>

    </form>

  </Wrapper>
);

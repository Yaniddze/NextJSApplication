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
  
  & > form> div:first-child {
    display: flex;
    
    height: 100px;
    
    justify-content: space-around;
    align-items: center;
    
    > div {
      display: flex;
      align-items: center;
    }
  }
`;

export const InfoEditor: FC = () => (
  <Wrapper>

    <form>

      <div>
        <div>
          <AssignmentIndIcon width={30} height={30} />
          <TextField
            placeholder="Укажите вашу фамилию и имя"
            label="Фамилия и имя"
            variant="outlined"
            InputLabelProps={{
              shrink: true,
            }}
          />
        </div>

        <div>
          <AlternateEmailIcon width={30} height={30} />
          <TextField
            placeholder="Ivanova@mail.ru"
            label="E-mail"
            variant="outlined"
            InputLabelProps={{
              shrink: true,
            }}
          />
        </div>

        <div>
          <PhoneIcon width={30} height={30} />
          <TextField
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

import { FC, MouseEvent } from 'react';
import styled from 'styled-components';
import { withStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';

const MaterialStyled = withStyles({
  root: {
    color: 'white',
  },
})(Button);

const StyledButton = styled.div`
  > button {
  
    width: 100%;

    text-transform: none;
    
    border-radius: 50px;
    
    padding: 10px 15px;
    
    font-weight: normal;
  }  
`;

type PropTypes = {
  children?: never;
  title: string;
  onClick: (event: MouseEvent) => void;
}

export const RoundButton: FC<PropTypes> = (
  { title, onClick }: PropTypes,
) => (
  <StyledButton>
    <MaterialStyled onClick={onClick} autoFocus color="primary" variant="contained">
      {title}
    </MaterialStyled>
  </StyledButton>
);

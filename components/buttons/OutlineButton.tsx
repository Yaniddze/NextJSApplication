import { FC, MouseEvent } from 'react';
import styled from 'styled-components';

import Button from '@material-ui/core/Button';

const Wrapper = styled.div`
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

export const OutlineButton: FC<PropTypes> = (
  { title, onClick }: PropTypes,
) => (
  <Wrapper>
    <Button color="primary" variant="outlined" onClick={onClick}>
      {title}
    </Button>
  </Wrapper>
);

// Core
import { FC } from 'react';
import styled from 'styled-components';

import { Dialog, withStyles } from '@material-ui/core';

import Button from '@material-ui/core/Button';
import CloseIcon from '@material-ui/icons/Close';

type PropTypes = {
  children?: never;
  open: boolean;
  onSuccess: () => void;
  onFailed: () => void;
  successTitle: string;
  failedTitle: string;
  text: string;
}

const ContentWrapper = styled.div`
  width: 600px;
`;

const ButtonsHolder = styled.div`
  margin: 20px 0;
`;

const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  
  > * {
    margin: 15px auto;
    width: 200px;
    
    > button {
      width: 100%;
      
      text-transform: none;
      
      border-radius: 50px;
      
      padding: 10px 15px;
      
      font-weight: normal;
    }
  }
`;

const TextHolder = styled.div`
  display: flex;
  
  > div {
    margin: 10px auto;
    font-size: 25px;
  }
`;

const CloseHolder = styled.div`
  display: flex;
  
  > div {
    margin-left: auto;
    margin-right: 10px;
    margin-top: 10px;
    color: #828282;
    
    :hover {
      cursor: pointer;
    }
  }
`;

const StyledButton = withStyles({
  root: {
    color: 'white',
  },
})(Button);

export const DialogWindow: FC<PropTypes> = (
  { 
    onFailed,
    onSuccess,
    open,
    text,
    successTitle,
    failedTitle,
  }: PropTypes,
) => (
  <Dialog
    open={open}
    onClose={onFailed}
    maxWidth="md"
  >
    <ContentWrapper>
      <CloseHolder>
        <div>
          <CloseIcon onClick={onFailed} />
        </div>
      </CloseHolder>

      <TextHolder>
        <div>
          {text}
        </div>
      </TextHolder>
      <ButtonsHolder>

        <ButtonWrapper>
          <div>
            <StyledButton color="primary" variant="contained" autoFocus onClick={onSuccess}>
              {successTitle}
            </StyledButton>
          </div>
        </ButtonWrapper>

        <ButtonWrapper>
          <div>
            <Button color="primary" variant="outlined" onClick={onFailed}>
              {failedTitle}
            </Button>
          </div>
        </ButtonWrapper>

      </ButtonsHolder>
    </ContentWrapper>
  </Dialog>
);

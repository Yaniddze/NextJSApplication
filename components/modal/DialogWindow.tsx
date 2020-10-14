// Core
import { FC } from 'react';
import styled from 'styled-components';

import { Dialog } from '@material-ui/core';

import CloseIcon from '@material-ui/icons/Close';

import { MinWidths } from '../../app/screens';
import { useScreens } from '../../hooks/useScreens';

import { RoundButton, OutlineButton } from '../buttons';

type PropTypes = {
  children?: never;
  open: boolean;
  onSuccess: () => void;
  onFailed: () => void;
  successTitle: string;
  failedTitle: string;
  text: string;
}

type MobileProp = {
  mobile: boolean;
}

const ContentWrapper = styled.div<MobileProp>`
  ${(prop): string => {
    if (prop.mobile) {
      return `
        width: 100vw;
        position: fixed;
        bottom: -10px;
        left: 0;
        background: white;
        border-radius: 10px;
      `;
    }  
    
    return `
      width: 600px;
    `;
  }}
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
  }
`;

const TextHolder = styled.div<MobileProp>`
  display: flex;
  
  > div {
    margin: 10px auto;
    font-size: ${(props): string => (props.mobile ? '18' : '24')}px;
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

const StyledDialog = styled(Dialog)`
  .MuiPaper-root {
    margin: 0;
    border-radius: 10px;
  }
`;

export const DialogWindow: FC<PropTypes> = (
  { 
    onFailed,
    onSuccess,
    open,
    text,
    successTitle,
    failedTitle,
  }: PropTypes,
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
    <StyledDialog
      open={open}
      onClose={onFailed}
    >
      <ContentWrapper mobile={mobile}>
        <CloseHolder>
          <div>
            <CloseIcon onClick={onFailed} />
          </div>
        </CloseHolder>

        <TextHolder mobile={mobile}>
          <div>
            {text}
          </div>
        </TextHolder>
        <ButtonsHolder>

          <ButtonWrapper>
            <div>
              <RoundButton title={successTitle} onClick={onSuccess} />
            </div>
          </ButtonWrapper>

          <ButtonWrapper>
            <div>
              <OutlineButton title={failedTitle} onClick={onFailed} />
            </div>
          </ButtonWrapper>

        </ButtonsHolder>
      </ContentWrapper>
    </StyledDialog>
  );
};

import { FC } from 'react';
import styled from 'styled-components';

import { Dialog } from '@material-ui/core';

import { RoundButton } from '../buttons';

import { useScreens } from '../../hooks/useScreens';
import { MinWidths } from '../../app/screens';

type PropTypes = {
  children?: never;
  opened: boolean;
  text: string;
  onClose: () => void;
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
        padding: 20px 0;
      `;
    }

    return `
      width: 600px;
      margin: 100px 0;
    `;
  }}
  
`;

const TextWrapper = styled.div<MobileProp>`
  display: flex;
  
  font-size: ${(props): string => (props.mobile ? '18' : '24')}px;
  
  > div {
    margin: 10px auto;
  }
`;

const ButtonWrapper = styled.div<MobileProp>`
  display: ${(props): string => (props.mobile ? 'none' : 'flex')};
  margin-top: 20px;
  
  > div {
    margin: 10px auto;
    width: 200px;
  }
`;

const StyledDialog = styled(Dialog)`
  .MuiPaper-root {
    margin: 0;
    border-radius: 10px;
  }
`;

export const ModalWindow: FC<PropTypes> = (
  { opened, text, onClose }: PropTypes,
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
      open={opened}
      onClose={onClose}
    >
      <ContentWrapper mobile={mobile}>

        <TextWrapper mobile={mobile}>
          <div>
            {text}
          </div>
        </TextWrapper>

        <ButtonWrapper mobile={mobile}>
          <RoundButton title="Хорошо" onClick={onClose} />
        </ButtonWrapper>

      </ContentWrapper>
    </StyledDialog>
  );
};

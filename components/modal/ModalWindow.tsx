import { FC } from 'react';
import styled from 'styled-components';

import { Dialog } from '@material-ui/core';

import { RoundButton } from '../buttons';

type PropTypes = {
  children?: never;
  opened: boolean;
  text: string;
  onClose: () => void;
}

const ContentWrapper = styled.div`
  width: 600px;
  margin: 100px 0;
`;

const TextWrapper = styled.div`
  display: flex;
  
  font-size: 24px;
  
  > div {
    margin: 10px auto;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  margin-top: 20px;
  
  > div {
    margin: 10px auto;
    width: 200px;
  }
`;

export const ModalWindow: FC<PropTypes> = (
  { opened, text, onClose }: PropTypes,
) => (
  <Dialog
    open={opened}
    onClose={onClose}
  >
    <ContentWrapper>

      <TextWrapper>
        <div>
          {text}
        </div>
      </TextWrapper>

      <ButtonWrapper>
        <RoundButton title="Хорошо" onClick={onClose} />
      </ButtonWrapper>

    </ContentWrapper>
  </Dialog>
);

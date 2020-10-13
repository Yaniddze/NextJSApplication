import { FC } from 'react';
import styled from 'styled-components';

type PropTypes = {
  children?: never;
  text: string;
  subText: string;
}

const Wrapper = styled.div`
  color: white;
  
  & > div:first-child {
    text-transform: uppercase;
    font-weight: bold;
    font-size: 18px;
    margin-bottom: 10px;
  }
  
  & > div:last-child {
    font-size: 14px;
  }
`;

export const Title: FC<PropTypes> = (
  { text, subText }: PropTypes,
) => (
  <Wrapper>
    <div>
      { text }
    </div>
    <div>
      { subText }
    </div>
  </Wrapper>
);

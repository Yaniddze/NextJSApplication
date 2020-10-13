import { FC } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;
  
`;

type PropTypes = {
  children?: never;
}

export const HeaderBackground: FC<PropTypes> = () => (
  <Wrapper>
    <svg
      preserveAspectRatio="none"
      width="100vw"
      height="calc(100vh * 0.45)"
      viewBox="0 0 1481 470"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M0 0H1481V470C1114.99 -38.4972 367.553 634.454 0 401.971V0Z" fill="url(#paint0_linear)" />
      <defs>
        <linearGradient id="paint0_linear" x1="1481" y1="235.001" x2="-15.6763" y2="235.001" gradientUnits="userSpaceOnUse">
          <stop stopColor="#2196F3" />
          <stop offset="1" stopColor="#1EC3AF" />
        </linearGradient>
      </defs>
    </svg>
  </Wrapper>
);

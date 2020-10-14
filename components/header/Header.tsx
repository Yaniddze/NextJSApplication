// Core
import { FC } from 'react';
import styled from 'styled-components';

// Material Components
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';

// My Components
import { HeaderBackground } from './HeaderBackground';
import { AccountIcon } from '../AccountIcon';

import { MinWidths } from '../../app/screens';
import { useScreens } from '../../hooks/useScreens';

type MobileProps = {
  mobile: boolean;
}

const Wrapper = styled.div<MobileProps>`
  height: 60px;
  display: flex;
  
  color: white;
  
  align-items: center;
  
  > div:first-child {
    margin-left: auto;
    margin-right: ${(props): string => (props.mobile ? '10' : '50')}px;
  }
`;

const IconsHolder = styled.div<MobileProps>`
  display: flex;
  align-items: center;
  
  & > span {
    background-color: white;
    width: 1px;
    height: 26px;
    margin: 0 ${(props): string => (props.mobile ? '10' : '20')}px;
  }
`;

const NameWrapper = styled.div<MobileProps>`
  margin-left: 20px;
  font-size: 14px;
  display: ${(props): string => (props.mobile ? 'none' : 'block')};
`;

type PropTypes = {
  children?: never;
  username: string;
}

export const Header: FC<PropTypes> = (
  { username }: PropTypes,
) => {
  const screen = useScreens();

  let iconSize = 0;

  let mobile = false;

  switch (screen) {
    case MinWidths.Mobile:
      mobile = true;
      iconSize = 24;
      break;

    case MinWidths.PC:
      mobile = false;
      iconSize = 40;
      break;

    default:
      // eslint-disable-next-line @typescript-eslint/no-unused-vars,no-case-declarations
      const x: never = screen;
  }

  const splitName = username.split(' ');

  const nameToShow = `${splitName[0]} ${splitName[1][0]}.`;

  return (
    <Wrapper mobile={mobile}>
      <IconsHolder mobile={mobile}>
        <NotificationsNoneIcon height={30} width={25} />
        <span />
        <AccountIcon height={iconSize} width={iconSize} />
        <NameWrapper mobile={mobile}>
          { nameToShow }
        </NameWrapper>
      </IconsHolder>
      <HeaderBackground />
    </Wrapper>
  );
};

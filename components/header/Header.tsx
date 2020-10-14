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

const Wrapper = styled.div`
  height: 60px;
  display: flex;
  
  color: white;
  
  align-items: center;
  
  > div:first-child {
    margin-left: auto;
    margin-right: 50px;
  }
`;

const IconsHolder = styled.div`
  display: flex;
  align-items: center;
  
  & > span {
    background-color: white;
    width: 1px;
    height: 26px;
    margin: 0 10px;
  }
  
  @media(min-width:${MinWidths.PC}px) {
      & > span {
      margin: 0 20px;
    }
  }
`;

const NotificationWrapper = styled(NotificationsNoneIcon)`
  @media(min-width:${MinWidths.PC}px){
    margin-right: 6px;
  }
`;

const NameWrapper = styled.div`
  margin-left: 20px;
  font-size: 14px;
  display: none;
  
  @media(min-width:${MinWidths.PC}px) {
    & {
      display: block;
    }
  }
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

  switch (screen) {
    case MinWidths.Mobile:
      iconSize = 24;
      break;

    case MinWidths.PC:
      iconSize = 40;
      break;

    default:
      // eslint-disable-next-line @typescript-eslint/no-unused-vars,no-case-declarations
      const x: never = screen;
  }

  const splitName = username.split(' ');

  const nameToShow = `${splitName[0]} ${splitName[1][0]}.`;

  return (
    <Wrapper>
      <IconsHolder>
        <NotificationWrapper height={30} width={25} />
        <span />
        <AccountIcon height={iconSize} width={iconSize} />
        <NameWrapper>
          { nameToShow }
        </NameWrapper>
      </IconsHolder>
      <HeaderBackground />
    </Wrapper>
  );
};

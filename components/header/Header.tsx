// Core
import { FC } from 'react';
import styled from 'styled-components';

// Material Components
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';

// My Components
import { HeaderBackground } from './HeaderBackground';
import { AccountIcon } from '../AccountIcon';

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
    margin: 0 20px;
  }
`;

const NotificationWrapper = styled(NotificationsNoneIcon)`
  margin-right: 6px;
`;

const NameWrapper = styled.div`
  margin-left: 20px;
  font-size: 14px;
`;

type PropTypes = {
  children?: never;
  username: string;
}

export const Header: FC<PropTypes> = (
  { username }: PropTypes,
) => {
  const splitName = username.split(' ');

  const nameToShow = `${splitName[0]} ${splitName[1][0]}.`;

  return (
    <Wrapper>
      <IconsHolder>
        <NotificationWrapper height={30} width={25} />
        <span />
        <AccountIcon height={30} width={30} />
        <NameWrapper>
          { nameToShow }
        </NameWrapper>
      </IconsHolder>
      <HeaderBackground />
    </Wrapper>
  );
};

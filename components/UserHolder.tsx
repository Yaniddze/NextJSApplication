import { FC, MouseEvent } from 'react';
import styled from 'styled-components';

import CreateIcon from '@material-ui/icons/Create';
import CloseIcon from '@material-ui/icons/Close';

import { AccountIcon } from './AccountIcon';

import { MinWidths } from '../app/screens';
import { useScreens } from '../hooks/useScreens';

type WidthProps = {
  mobile: boolean;
}

const Wrapper = styled.div<WidthProps>`
  height: ${(props): string => (props.mobile ? '70' : '130')}px;

  border-radius: 10px;
  background: #1A78C2;
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.15);
  
  color: white;
  
  & > div:first-child, & > div:last-child {
    display: flex;
    align-items: center;  
  }
`;

const LeftWrapper = styled.div<WidthProps>`
  ${(props): string => {
    if (props.mobile) {
      return `
        margin-left: 10px;
        font-size: 14px;
        
        & > div:last-child {
          margin-left: 10px;
        }
      `;
    }  
    
    return `
      font-size: 30px;
      font-weight: 600;
      margin-left: 30px;
      
      & > div:last-child {
        margin-left: 40px;
      }
    `;
  }}
`;

const RightWrapper = styled.div<WidthProps>`
  ${(props): string => {
    if (props.mobile) {
      return `
        margin-right: 10px;
      `;
    }  
    
    return `
      margin-right: 60px;
    
      & > div:first-child {
        margin-right: 10px;
      }
    `;
  }}

  &:hover {
    cursor: pointer;
  }
  
`;

const IconTitleWrapper = styled.div<WidthProps>`
  display: ${(props): string => (props.mobile ? 'none' : 'block')};
`;

type PropTypes = {
  children?: never;
  username: string;
  onEditChange: () => void;
  editing: boolean;
}

export const UserHolder: FC<PropTypes> = (
  { username, onEditChange, editing }: PropTypes,
) => {
  const handleClick = (event: MouseEvent) => {
    event.preventDefault();

    onEditChange();
  };

  const screen = useScreens();

  let accountSize = 0;

  let mobile = false;

  switch (screen) {
    case MinWidths.Mobile:
      accountSize = 40;
      mobile = true;
      break;

    case MinWidths.PC:
      accountSize = 80;
      mobile = false;
      break;

    default:
      // eslint-disable-next-line no-case-declarations,@typescript-eslint/no-unused-vars
      const x: never = screen;
  }

  const editButton = !editing && (
    <>
      <IconTitleWrapper mobile={mobile}>
        Редактировать
      </IconTitleWrapper>
      <CreateIcon />
    </>
  );

  const closeButton = editing && (
    <>
      <IconTitleWrapper mobile={mobile}>
        Закрыть
      </IconTitleWrapper>
      <CloseIcon />
    </>
  );

  return (
    <Wrapper mobile={mobile}>

      <LeftWrapper mobile={mobile}>
        <AccountIcon width={accountSize} height={accountSize} />
        <div>
          { username }
        </div>
      </LeftWrapper>

      <RightWrapper mobile={mobile} onClick={handleClick}>
        {editButton}
        {closeButton}
      </RightWrapper>

    </Wrapper>
  );
};

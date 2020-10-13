import { FC, useState, MouseEvent } from 'react';
import styled from 'styled-components';

import CreateIcon from '@material-ui/icons/Create';
import CloseIcon from '@material-ui/icons/Close';

import { AccountIcon } from './AccountIcon';

const Wrapper = styled.div`
  border-radius: 10px;
  height: 130px;
  background: #1A78C2;
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  color: white;
  
  & > div:first-child, & > div:last-child {
    display: flex;
    align-items: center;  
  }
`;

const LeftWrapper = styled.div`
  margin-left: 30px;
  
  font-size: 30px;
  font-weight: 600;
  
  & > div:last-child {
    margin-left: 40px;
  }
`;

const RightWrapper = styled.div`
  margin-right: 60px;
  
  &:hover {
    cursor: pointer;
  }
  
  & > div:first-child {
    margin-right: 10px;
  }
`;

type PropTypes = {
  children?: never;
  username: string;
  onEditChange: (editing: boolean) => void;
}

export const UserHolder: FC<PropTypes> = (
  { username, onEditChange }: PropTypes,
) => {
  const [editing, setEditing] = useState(false);

  const handleClick = (event: MouseEvent) => {
    event.preventDefault();

    setEditing((old) => {
      onEditChange(!old);

      return !old;
    });
  };

  const editButton = !editing && (
    <>
      <div>
        Редактировать
      </div>
      <CreateIcon />
    </>
  );

  const closeButton = editing && (
    <>
      <div>
        Закрыть
      </div>
      <CloseIcon />
    </>
  );

  return (
    <Wrapper>

      <LeftWrapper>
        <AccountIcon width={80} height={80} />
        <div>
          { username }
        </div>
      </LeftWrapper>

      <RightWrapper onClick={handleClick}>
        {editButton}
        {closeButton}
      </RightWrapper>

    </Wrapper>
  );
};

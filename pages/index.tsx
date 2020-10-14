// Core
import { ReactElement, useState } from 'react';
import styled from 'styled-components';

// Material Components
import Container from '@material-ui/core/Container';

// My Components
import { Header } from '../components/header';
import { Title } from '../components/Title';
import { UserHolder } from '../components/UserHolder';
import { InfoHolder } from '../components/InfoHolder';
import { InfoEditor, FormValues } from '../components/InfoEditor';
import { ModalWindow } from '../components/modal';

// Types
import { User } from '../domain/types';

const ContainerWrapper = styled(Container)`
  & > div {
    margin-bottom: 30px;
  }
`;

export default function Home(): ReactElement {
  const [userInfo, setUserInfo] = useState<User>({
    fullName: 'Иванов Иван Иванович',
    phone: '',
    email: 'yanyanyan@mail.ru',
  });
  const [editing, setEditing] = useState(false);
  const [alertOpen, setAlertOpen] = useState(false);

  const infoHolder = !editing && (
    <InfoHolder email={userInfo.email} phone={userInfo.phone} />
  );
  
  const handleSubmit = (values: FormValues) => {
    setEditing(false);

    setUserInfo({
      fullName: values.username,
      email: values.email,
      phone: values.phone,
    });

    setAlertOpen(true);
  };

  const handleEditingClick = (): void => {
    setEditing((old) => !old);
  };

  const infoEditor = editing && (
    <InfoEditor onSubmit={handleSubmit} />
  );

  const handleAlertClose = (): void => {
    setAlertOpen(false);
  };
  
  return (
    <div>
      <ModalWindow
        opened={alertOpen}
        text="Данные успешно сохранены"
        onClose={handleAlertClose}
      />
      <Header username={userInfo.fullName} />
      <ContainerWrapper maxWidth="lg">
        <Title text="Личный профиль" subText="Главная/Личный профиль" />
        <UserHolder
          username={userInfo.fullName}
          onEditChange={handleEditingClick}
          editing={editing}
        />
        {infoHolder}
        {infoEditor}
      </ContainerWrapper>
    </div>
  );
}

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

const ContainerWrapper = styled(Container)`
  & > div {
    margin-bottom: 30px;
  }
`;

export default function Home(): ReactElement {
  const username = 'Иванов Иван Иванович';
  const email = 'yanyanyan@mail.ru';
  const phone = '';
  const [editing, setEditing] = useState(false);

  const infoHolder = !editing && (
    <InfoHolder email={email} phone={phone} />
  );
  
  return (
    <div>
      <Header username={username} />
      <ContainerWrapper maxWidth="lg">
        <Title text="Личный профиль" subText="Главная/Личный профиль" />
        <UserHolder username={username} onEditChange={setEditing} />
        {infoHolder}
      </ContainerWrapper>
    </div>
  );
}

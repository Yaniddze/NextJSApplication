// Core
import { ReactElement, useState } from 'react';
import styled from 'styled-components';

// Material Components
import Container from '@material-ui/core/Container';

// My Components
import { Header } from '../components/header';
import { Title } from '../components/Title';
import { UserHolder } from '../components/UserHolder';

const ContainerWrapper = styled(Container)`
  & > div {
    margin-bottom: 30px;
  }
`;

export default function Home(): ReactElement {
  const username = 'Иванов Иван Иванович';
  const [editing, setEditing] = useState(false);
  
  return (
    <div>
      <Header username={username} />
      <ContainerWrapper maxWidth="lg">
        <Title text="Личный профиль" subText="Главная/Личный профиль" />
        <UserHolder username={username} onEditChange={setEditing} />
      </ContainerWrapper>
    </div>
  );
}

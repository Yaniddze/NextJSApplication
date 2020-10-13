// Core
import { ReactElement } from 'react';

// Material Components
import Container from '@material-ui/core/Container';

// My Components
import { Header } from '../components/header';
import { Title } from '../components/Title';

export default function Home(): ReactElement {
  return (
    <div>
      <Header username="Иванов Иван Иванович" />
      <Container maxWidth="lg">
        <Title text="Личный профиль" subText="Главная/Личный профиль" />
      </Container>
    </div>
  );
}

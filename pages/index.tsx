// Core
import { ReactElement } from 'react';

// Material Components
import Button from '@material-ui/core/Button';

// My Components
import { Header } from '../components/header';

export default function Home(): ReactElement {
  return (
    <div>
      <Header username="Иванов Иван Иванович" />
      123
      <Button variant="contained" color="primary">
        Hello!
      </Button>
    </div>
  );
}

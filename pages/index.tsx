// Core
import { ReactElement } from 'react';

// Material Components
import Button from '@material-ui/core/Button';

// My Components
import { HeaderBackground } from '../components/HeaderBackground';

export default function Home(): ReactElement {
  return (
    <div>
      <HeaderBackground />
      123
      <Button variant="contained" color="primary">
        Hello!
      </Button>
    </div>
  );
}

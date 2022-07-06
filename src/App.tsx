import './App.scss';
import Timer from './components/Timer';
import Header from './components/Header';
import LightTheme from './themes/LightTheme';
import { NextUIProvider, Container } from '@nextui-org/react';

const App = () => {
  return (
    <NextUIProvider theme={LightTheme}>
      <Header />
      <Container id='container' display='flex' justify='center' alignItems='center'>
        <Timer />
      </Container>
    </NextUIProvider>
  );
}

export default App;

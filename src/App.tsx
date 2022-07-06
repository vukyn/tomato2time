import './App.scss';
import HomePage from './pages/HomePage';
import Header from './components/Header';
import LightTheme from './themes/LightTheme';
import { NextUIProvider } from '@nextui-org/react';

const App = () => {
  return (
    <NextUIProvider theme={LightTheme}>
      <Header />
      <HomePage />
    </NextUIProvider>
  );
}

export default App;

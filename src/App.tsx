import './App.scss';
import HomePage from './pages/HomePage';
import Header from './pages/shared/Header';
import LightTheme from './themes/LightTheme';
import { NextUIProvider } from '@nextui-org/react';
import Footer from './pages/shared/Footer';

const App = () => {
  return (
    <NextUIProvider theme={LightTheme}>
      <Header />
      <HomePage />
      <Footer />
    </NextUIProvider>
  );
}

export default App;

import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import GlobalStyle from './styles/global';

import AppProvider from './hooks/index';

import Routes from './routes';

const App: React.FC = () => (
  <>
    <AppProvider>
      <Router>
        <Routes />
      </Router>
    </AppProvider>

    <GlobalStyle />
  </>
);

export default App;

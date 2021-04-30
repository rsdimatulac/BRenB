import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import { ModalProvider } from "./context/Modal";
import configureStore from './store/index';
import { restoreCSRF, csrfFetch } from './store/csrf';
import * as sessionActions from './store/session';
import './index.css';
import ScrollToTop from './context/ScrollToTop';

const store = configureStore();

if (process.env.NODE_ENV !== 'production') { // is development
  restoreCSRF();

  window.csrfFetch = csrfFetch;
  window.store = store;
  window.sessionActions = sessionActions;
};

function Root() {
  return (
    <Provider store={store}>
      <ModalProvider>
        <BrowserRouter>
          <ScrollToTop />
          <App />
        </BrowserRouter>
      </ModalProvider>
    </Provider>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  document.getElementById('root')
);

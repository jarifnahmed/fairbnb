import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider as ReduxProvider } from 'react-redux';
import { ModalProvider } from './context/Modal';
import './index.css';
import App from './App';
import configureStore from './store';
import { restoreCSRF, csrfFetch } from './store/csrf';
import * as sessionActions from './store/session';
import Footer from "./components /Footer";

import { ChakraProvider } from '@chakra-ui/react'


const store = configureStore();

if (process.env.NODE_ENV !== "production") {
  restoreCSRF();

  window.csrfFetch = csrfFetch;
  window.store = store;
  window.sessionActions = sessionActions;
}

function Root() {
  return (
    <ReduxProvider store={store}>
      <ChakraProvider>
        <ModalProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </ModalProvider>
      </ChakraProvider>
    </ReduxProvider>
  );
}

// ReactDOM.createRoot(
//   <React.StrictMode>
//     <body><Root /></body>
//     {/* <Root /> */}
//     <footer>
//       <Footer />
//     </footer>
//   </React.StrictMode>,
//   document.getElementById('root')
// );


ReactDOM.createRoot(
  document.getElementById("root"),
)
.render(
  <React.StrictMode>
    <body><Root /></body>
    {/* <Root /> */}
    <footer>
      <Footer />
    </footer>
  </React.StrictMode>,
);

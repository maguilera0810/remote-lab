// src/index.tsx
import React from 'react';
import ReactDOM from 'react-dom';
// import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/store';
import App from './App';


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
        <App />
      {/* <BrowserRouter>
      </BrowserRouter> */}
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

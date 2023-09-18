import React from 'react';
import ReactDOM from 'react-dom/client';
import "./styles/style.scss";
import App from './App';
import { Provider as StoreProvider } from 'react-redux';
import { store } from './redux/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <StoreProvider store={store}>
    <App />
    </StoreProvider>
  </React.StrictMode>
);


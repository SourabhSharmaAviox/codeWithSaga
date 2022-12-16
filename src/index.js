import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.js'
import { BrowserRouter} from 'react-router-dom'
import { Provider } from 'react-redux';
import Store from './Redux/store';
import ColorContextProvider from './Components/Contexts/colorContext';
import { PersistGate } from "redux-persist/integration/react";
import { perstore } from './Redux/store';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={ Store}>
      <PersistGate loading={<p>loading.....</p>}  persistor={perstore}>
      <ColorContextProvider>
    <BrowserRouter>
         <App />
    </BrowserRouter>
    </ColorContextProvider>
    </PersistGate>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

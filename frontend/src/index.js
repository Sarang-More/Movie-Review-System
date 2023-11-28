import { Auth0Provider } from '@auth0/auth0-react'; // Import Auth0Provider
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Auth0Provider
        domain="dev-mwpj7vbaqfrablk2.us.auth0.com"
        clientId="Dx4GSdJ6LSeRljPe6yNEv22IZqBNM6Hj"
        redirectUri={window.location.origin}
      >
        <Routes>
          <Route path="/*" element={<App />} />
        </Routes>
      </Auth0Provider>
    </BrowserRouter>
  </React.StrictMode>
);

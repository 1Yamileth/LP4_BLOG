import React from 'react';
import ReactDOM from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Auth0Provider 
    domain='grupolp4.us.auth0.com'
    clientId='fLfNhsuU3kARm0rgaDGwpDpWm3N1WZR9'
    redirectUri={window.location.origin}
    >
    <App />
    </Auth0Provider>
  </React.StrictMode>
);
//ESTO NO VA, LO DE AUTENTIIFICACION LO MANEJA EL ARCHIVO DE AUTH=-PROVIDER-WHITH-HISTORY Y EL 
//ARCHIVO .ENV MANEJA EL DOMINIMO Y TODO LO DEMAS

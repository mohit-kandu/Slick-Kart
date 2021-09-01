import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import AppProvider from "./Context/Context"
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.render(
    <AppProvider>
        <Auth0Provider
            domain="dev-y-t3lbx5.us.auth0.com"
            clientId="IZ8ByHmOgTh0mL5nnq7RuFTOaAil1nxg"
            redirectUri={window.location.origin}
        >
            <App />
        </Auth0Provider>
    </AppProvider>,
    document.getElementById('root'));
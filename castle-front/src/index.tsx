import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { MantineProvider } from '@mantine/core';
import { HashRouter } from "react-router-dom";
import { AuthenticationProvider } from './contexts/Authentication';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Notifications } from "@mantine/notifications";
import { CASTLE_MANTINE_THEME } from 'theme';

const queryClient = new QueryClient();
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <HashRouter>
      <MantineProvider theme={CASTLE_MANTINE_THEME}>
        <Notifications />
        <QueryClientProvider client={queryClient}>
          <AuthenticationProvider>
            <App />
          </AuthenticationProvider>
        </QueryClientProvider>
      </MantineProvider>
    </HashRouter>
  </React.StrictMode>
);
reportWebVitals();

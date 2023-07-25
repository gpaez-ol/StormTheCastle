import React from 'react';
import logo from './logo.svg';
import { useAuthentication } from './contexts';
import { Box } from '@mantine/core';
import { RoutesAuthenticated, RoutesUnauthenticated } from './routes';
import { MainLayout } from './layout';

function App() {
  const { authorized } = useAuthentication();
  return (
    <Box sx={{ height: "100vh", overflow: "hidden" }}>
      {authorized ? (
        <RoutesAuthenticated />
      ) : (
        <MainLayout>
          <RoutesUnauthenticated />
        </MainLayout>
      )}
    </Box>
  );
}

export default App;

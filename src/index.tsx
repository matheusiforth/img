import React from 'react';
import ReactDOM from 'react-dom/client';
import AppRoutes from './AppRoutes';
import { ChakraProvider } from '@chakra-ui/react';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <ChakraProvider>
    <React.StrictMode>
      <AppRoutes />
    </React.StrictMode>
  </ChakraProvider>
);

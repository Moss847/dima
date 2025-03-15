import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import '@mantine/core/styles.css';
import '@mantine/dropzone/styles.css';
import '@mantine/nprogress/styles.css';
import { MantineProvider } from '@mantine/core';
import { Provider } from 'react-redux';
import store from './shared/model/store.ts';
import './i18n';
import { router } from './shared/config/router/router.tsx';
import { RouterProvider } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
  <QueryClientProvider client={queryClient}>
    <MantineProvider>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </MantineProvider>
  </QueryClientProvider>
);

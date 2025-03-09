import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';
import { Provider } from 'react-redux';
import store from './store/store';
import './i18n';
import '@mantine/dropzone/styles.css';
import '@mantine/modals/styles.css';
import '@mantine/nprogress/styles.css';
import '@mantine/chart/styles.css';
import '@mantine/form/styles.css';

createRoot(document.getElementById('root')!).render(
  <MantineProvider>
    <Provider store={store}>
      <App />
    </Provider>
  </MantineProvider>
);

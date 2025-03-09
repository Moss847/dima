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

createRoot(document.getElementById('root')!).render(
  <MantineProvider>
    <Provider store={store}>
      <App />
    </Provider>
  </MantineProvider>
);

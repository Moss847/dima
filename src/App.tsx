import React from 'react';
import { Outlet } from 'react-router-dom';
import { MainLayout } from './shared/components/mainLayout';

function App() {
  return (
    <MainLayout>
      <Outlet />
    </MainLayout>
  );
}

export default App;

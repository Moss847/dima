import React from 'react';
import { Button } from '@mantine/core';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from './shared/model/exampleSlice';
import { RootState } from './shared/model/rootReducer';
import { useTranslation } from 'react-i18next';

function App() {
  const dispatch = useDispatch();
  const value = useSelector((state: RootState) => state.example.value);
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };
  return (
    <div style={{ padding: '20px' }}>
      <h1>Hello Mantine!</h1>
    </div>
  );
}

export default App;

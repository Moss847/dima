import React from 'react';
import { Button } from '@mantine/core';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from './store/exampleSlice';
import { RootState } from './store/rootReducer'
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
      <Button>Hello Mantine Button</Button>
      <h1>Value: {value}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <h1>{t('welcome')}</h1>
      <p>{t('description')}</p>
      <button onClick={() => changeLanguage('en')}>English</button>
      <button onClick={() => changeLanguage('ru')}>Русский</button>
    </div>
  );
}

export default App;
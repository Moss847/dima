import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './rootReducer' // Импортируйте ваш корневой редюсер

const store = configureStore({
  reducer: rootReducer,
});

export default store;
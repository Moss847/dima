import { combineReducers } from 'redux';
import exampleReducer from './exampleSlice';

const rootReducer = combineReducers({
example: exampleReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
import { configureStore } from '@reduxjs/toolkit';
import { itemReducer } from './reducer';

const store = configureStore({ reducer: itemReducer });

export { store };

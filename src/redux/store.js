
import { configureStore } from "@reduxjs/toolkit";
import nameReducer from './nameReducer';
import tokenReducer from './token'

export const store = configureStore({
      reducer: {
            firstName: nameReducer,
            token: tokenReducer
      },
});
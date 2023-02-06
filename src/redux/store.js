
import { configureStore } from "@reduxjs/toolkit";
import nameReducer from './firstNameReducer';
import tokenReducer from './token'

export const store = configureStore({
      reducer: {
            firstName: nameReducer,
            token: tokenReducer
      },
});
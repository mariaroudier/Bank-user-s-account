
import { configureStore } from "@reduxjs/toolkit";
import firstNameReducer from './firstNameReducer';
import lastNameReducer from './lastNameReducer';
import tokenReducer from './token'

export const store = configureStore({
      reducer: {
            firstName: firstNameReducer,
            lastName: lastNameReducer,
            token: tokenReducer
      },
});
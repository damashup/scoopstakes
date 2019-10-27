import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';


import directoryReducer from './directory/directory.reducer';
import userReducer from './user/reducers/user.reducer';
import signInMethodsReducer from './sign-in-methods/sign-in-methods.reducer';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: []
};

const rootReducer = combineReducers({
  signInMethods: signInMethodsReducer,
  directory: directoryReducer,
  user: userReducer
});

export default persistReducer(persistConfig, rootReducer);

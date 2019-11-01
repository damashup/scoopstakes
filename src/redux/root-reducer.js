import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';


import directoryReducer from './directory/directory.reducer';
import userReducer from './user/reducers/user.reducer';
import signInMethodsReducer from './sign-in-methods/sign-in-methods.reducer';
import leaderboardReducer from './leaderboard/reducer/leaderboard.reducer';
import seasonReducer from './season/reducer/seasonReducer';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: []
};

const rootReducer = combineReducers({
  signInMethods: signInMethodsReducer,
  directory: directoryReducer,
  user: userReducer,
  leaderboard: leaderboardReducer,
  season: seasonReducer
});

export default persistReducer(persistConfig, rootReducer);

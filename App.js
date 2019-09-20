import React from 'react';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';

import themeReducer from './redux/themeReducer';
import HomeScreen from './screens/HomeScreen';

const store = createStore(
  combineReducers({themeReducer}),
  applyMiddleware(thunk),
);

const App = () => {
  return (
    <Provider store={store}>
      <HomeScreen />
    </Provider>
  );
};

export default App;

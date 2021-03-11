import React from 'react';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import {Provider as PaperProvider} from 'react-native-paper';
import createSagaMiddleware from 'redux-saga';
import Main from './src/App';

import rootReducer from './src/store/rootReducer';
import rootSaga from './src/store/root_saga';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);

const App = () => (
  <PaperProvider>
    <Provider store={store}>
      <Main />
    </Provider>
  </PaperProvider>
);

export default App;

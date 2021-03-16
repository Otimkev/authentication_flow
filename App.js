import React, {useEffect} from 'react';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import {Provider as PaperProvider} from 'react-native-paper';
import createSagaMiddleware from 'redux-saga';
import Main from './src/App';
import rootReducer from './src/store/rootReducer';
import rootSaga from './src/store/root_saga';
import SplashScreen from 'react-native-splash-screen';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  });
  return (
    <PaperProvider>
      <Provider store={store}>
        <Main />
      </Provider>
    </PaperProvider>
  );
};

export default App;

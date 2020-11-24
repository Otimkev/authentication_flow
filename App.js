import React, {useEffect} from 'react';
import {Provider} from 'react-redux';
import {Store} from './src/store/Store';
import AppRoot from './AppRoot';
//import {startSocketIO} from './src/utils/Service';

export default function App({navigation}) {
  // useEffect(() => {
  //   startSocketIO(Store);
  // });
  return (
    <Provider store={Store}>
      <AppRoot />
    </Provider>
  );
}

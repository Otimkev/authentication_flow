import * as React from 'react';

import {Provider} from 'react-redux';
import {Store} from './src/store/Store';
import AppRoot from './AppRoot';

export default function App({navigation}) {
  return (
    <Provider store={Store}>
      <AppRoot />
    </Provider>
  );
}

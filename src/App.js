import React from 'react';
import { Provider } from 'react-redux';

import configureStore from './store/configureStore';
import Navigator from './navigator';

const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <Navigator />
    </Provider>
  );
}

export default App;

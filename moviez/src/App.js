import React from 'react';
<<<<<<< HEAD

=======
>>>>>>> 08d83a94deacca872eff282868669001054f141b
import Routes from './config/routes';
import { Provider } from 'react-redux';
import { store } from './config/store';
function App() {
  return (
    <Provider store={store}>
      <Routes></Routes>
    </Provider>
  );
}

export default App;

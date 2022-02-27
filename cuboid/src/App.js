import React from 'react';
import { Provider } from 'react-redux';

import './App.css';
import Homepage from './views/Homepage';
import Store from './Redux/Store';

function App() {
  return (
    <Provider store={Store}>
      <div className="App">
        <Homepage />
      </div>
    </Provider>
  );
}

export default App;

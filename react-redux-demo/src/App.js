import React from 'react';
import { Provider } from 'react-redux'
import CakeContainer from './components/Redux/Cake/CakeContainer';
import TestComp from './components/testCom';
import store from './components/Redux/store';
import './App.css'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CakeContainer />
        <TestComp />
      </div>
    </Provider>
  );
}

export default App;

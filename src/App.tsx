import React from 'react';
import { Provider } from 'react-redux';
import { store } from './state';
import RepositoriesList from './RepositoriesList';


import logo from './logo.svg';
import './App.css';

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <h1> Search For A Package</h1>
        <RepositoriesList/>
      </div>
    </Provider>
  );
};

export default App;

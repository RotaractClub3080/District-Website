import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import Header from './components/header/header';
import AppBody from './components/appbody/appbody';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <React.Fragment>
        <Header />
        <AppBody />
      </React.Fragment>
    </BrowserRouter>
  );
}

export default App;

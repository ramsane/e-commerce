import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component'

import {Route, Switch} from 'react-router-dom'

const HatsPage = () => (
  <h1>Hats Page</h1>
);

function App() {
  return (
      <Switch>
        <Route path='/' component={HomePage} exact />
        <Route path='/shop/hats' render={HatsPage}/>
      </Switch>    
  );
}

export default App;

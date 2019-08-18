import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component'
import ShopPage from './pages/shop/shop.component'
import Header from './components/header/header.component'

import {Route, Switch} from 'react-router-dom'

function App() {
  return (
      <React.Fragment>
        <Header />
        <Switch>
          <Route path='/' component={HomePage} exact />
          <Route path='/shop' component={ShopPage} exact/>
        </Switch>    
      </React.Fragment>
  );
}

export default App;

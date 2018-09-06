import React from 'react';

import { Switch, Route } from 'react-router-dom';
import LandOfFireList from './LandOfFireList';
import LandOfWindList from './LandOfWindList';
import AkatsukiList from './AkatsukiList';
import Header from './Header';
import Home from './Home';


function App(){
  return(
    <div className="container">
      <Header/>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/landoffire' component={LandOfFireList} />

        <Route path='/landofwind' component={LandOfWindList} />
        <Route path='/akatsuki' component={AkatsukiList} />
      </Switch>
      
    </div>

  );
}

export default App;

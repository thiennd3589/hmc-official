import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { getDeviceType, DEVICE_TYPE } from './utils'
import Admin from './pages/Admin';
import Landing from './pages/Landing'
import MobileLanding from './pages/MobileLanding';
import './App.css';

function App() {
  const deviceType = getDeviceType();
  return (
    <div className={`App`} >
      <Switch>
        <Route exact path='/' render={() => { return deviceType === DEVICE_TYPE.MOBILE ? <MobileLanding /> : <Landing /> }} />
        <Route path='/officialadmin' component={Admin} />
      </Switch>
    </div>
  );
}

export default App;

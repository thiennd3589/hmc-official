import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Admin from './pages/Admin';
import Landing from './pages/Landing'
import './App.css';

function App() {
  function detectMob() {
    const toMatch = [
      /Android/i,
      /webOS/i,
      /iPhone/i,
      /iPad/i,
      /iPod/i,
      /BlackBerry/i,
      /Windows Phone/i
    ];

    return toMatch.some((toMatchItem) => {
      return navigator.userAgent.match(toMatchItem);
    });
  }

  const setMinWidth = () => {
    return !detectMob() ? { minWidth: `${Math.floor(1200 / window.devicePixelRatio)}px` } : {}
  }

  console.log(detectMob(), setMinWidth())

  return (
    <div className={`App`} style={setMinWidth()} >
      <Switch>
        <Route exact path='/' render={() => <Landing style={setMinWidth()} />} />
        <Route path='/officialadmin' component={Admin} />
      </Switch>
    </div>
  );
}

export default App;

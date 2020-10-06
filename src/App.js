import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { getDeviceType, DEVICE_TYPE } from './utils'
import Admin from './pages/Admin';
import Landing from './pages/Landing'
import MobileLanding from './pages/MobileLanding';
import LoginComponent from './components/LoginComponent';
import firebase from 'firebase/app'
import { useDispatch, useSelector } from 'react-redux';
import { signUpSuccess } from './redux/SignUp/actions';
import './App.css';

function App() {
  const deviceType = getDeviceType();
  const dispatch = useDispatch();
  const currentUser = useSelector(state => state.signUp.user)
  firebase.auth().onAuthStateChanged(user => {
    user ? dispatch(signUpSuccess(user)) : dispatch(signUpSuccess(null))
  })

  return (
    <div className={`App`} >
      <Switch>
        <Route exact path='/' render={() => { return deviceType === DEVICE_TYPE.MOBILE ? <MobileLanding /> : <Landing /> }} />
        <Route path='/admin' component={() => {
          return currentUser ? <Admin /> : <Redirect to="/login" />
        }} />
        <Route path="/login" component={() => {
          return currentUser ? <Redirect to="/admin" /> : <LoginComponent />
        }} />
      </Switch>
    </div>
  );
}

export default App;

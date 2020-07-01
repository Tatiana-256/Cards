import React from 'react';
import {Route} from 'react-router-dom';

import './App.css';
import Header from './components/main/UI/header/Header';
import RefreshPassword from "./components/main/UI/pages/RefreshPassword/RefreshPassword";
import Profile from './components/main/UI/pages/Profile/Profile';
import LoginPage from './components/festers/auth/login/LogInPage';
import Registration from './components/festers/auth/register/Registration';


const App = () => {
    return (
        <div className="App">
            <Header/>
            <Route exact path="/login" component={LoginPage}/>
            <Route exact path="/registration" component={Registration}/>
            <Route exact path="/refreshPassword" component={RefreshPassword}/>
            <Route exact path="/" component={Profile}/>
        </div>
    );
    // логин, регистрация, восстановление пароля, профайл
}

export default App;

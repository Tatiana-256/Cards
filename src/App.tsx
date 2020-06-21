import React from 'react';
import {Route} from 'react-router-dom';

import './App.css';
import Header from './components/main/UI/header/Header';
import Login from './components/main/UI/routers/Login/Login';
import Registration from './components/main/UI/routers/Registration/Registration';
import RefreshPassword from "./components/main/UI/routers/RefreshPassword/RefreshPassword";
import Profile from './components/main/UI/routers/Profile/Profile';


const App = () => {
    return (
        <div className="App">
            <Header/>
            <Route exact path="/login" component={Login}/>
            <Route exact path="/registration" component={Registration}/>
            <Route exact path="/refreshPassword" component={RefreshPassword}/>
            <Route exact path="/profile" component={Profile}/>
        </div>
    );
    // логин, регистрация, восстановление пароля, профайл
}

export default App;

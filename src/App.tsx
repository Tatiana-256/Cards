import React from 'react';
import {Route} from 'react-router-dom';

import './App.css';
import Header from './components/main/UI/header/Header';
import Profile from './components/main/UI/pages/Profile/Profile';
import LoginPage from './components/main/UI/pages/Login/LogInPage';
import Registration from './components/main/UI/pages/Registration/Registration';
import ForgotPasswordContainer from "./components/main/UI/pages/RefreshPassword/RefreshPasswordContainer";
import NewPasswordContainer from "./components/main/UI/pages/newPassword/NewPasswordContainer";


const App = () => {
    return (
        <div className="App">
            <Header/>
            <Route exact path="/login" component={LoginPage}/>
            <Route exact path="/registration" component={Registration}/>
            <Route exact path="/refreshPassword" component={ForgotPasswordContainer}/>
            <Route exact path="/newPassword" component={NewPasswordContainer}/>
            <Route exact path="/" component={Profile}/>
        </div>
    );
    // логин, регистрация, восстановление пароля, профайл
}

export default App;

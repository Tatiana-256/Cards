import React from 'react';
import {Route} from 'react-router-dom';
import './App.css';
import Header from './components/main/UI/header/Header';
import Profile from './components/main/UI/pages/Profile/Profile';
import ForgotPasswordContainer from "./components/main/UI/pages/RefreshPassword/RefreshPasswordContainer";
import NewPasswordContainer from "./components/main/UI/pages/newPassword/NewPasswordContainer";
import LoginPageContainer from "./components/main/UI/pages/Login/LogInPageContainer";
import RegistrationContainer from './components/main/UI/pages/Registration/RegistrationContainer';
import CardsPack from "./components/main/UI/pages/Cards/CardsPack/CardsPack";
import {Cards} from "./components/main/UI/pages/Cards/Cards/Cards";


const App = () => {
    return (
        <div className="App">
            <Header/>
            <Route exact path="/login" component={LoginPageContainer}/>
            <Route exact path="/cards/pack" component={CardsPack}/>
            <Route path="/cards/cards/:id" component={Cards}/>
            <Route exact path="/registration" component={RegistrationContainer}/>
            <Route exact path="/refreshPassword" component={ForgotPasswordContainer}/>
            <Route path="/set-new-password/:id" component={NewPasswordContainer}/>
            <Route exact path="/" component={Profile}/>
        </div>
    );

}

export default App;

import React from 'react';
import styles from './Header.module.css';
import {NavLink} from 'react-router-dom';

type PropsType = {}


const Header = (props: PropsType) => {
    return <div>
        <NavLink to="/login"> Login </NavLink>
        <NavLink to="/registration"> Registration </NavLink>
        <NavLink to="/refreshPassword"> RefreshPassword </NavLink>
        <NavLink to="/profile"> Profile </NavLink>
    </div>
}

export default Header

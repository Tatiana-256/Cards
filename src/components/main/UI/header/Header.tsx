import React from 'react';
import styles from './Header.module.css';
import {NavLink} from 'react-router-dom';

type PropsType = {}


const Header = (props: PropsType) => {
    return <div className={styles.header}>
        <NavLink to="/" className={styles.rout}> Profile </NavLink>
        <NavLink to="/cards/pack" className={styles.rout}> Cards </NavLink>
        <NavLink to="/login" className={styles.rout}> Login </NavLink>
        <NavLink to="/registration" className={styles.rout}> Registration </NavLink>
        <NavLink to="/refreshPassword" className={styles.rout}> Remind password </NavLink>
        <NavLink to="/set-new-password/:id" className={styles.rout}> New password </NavLink>
    </div>
}

export default Header

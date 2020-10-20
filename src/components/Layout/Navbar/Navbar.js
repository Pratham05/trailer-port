import React from 'react';
import styles from './Navbar.module.scss';
import { NavLink } from 'react-router-dom';
import Logo from '../../Logo/Logo';
import SearchBar from '../../SearchBar/SearchBar';

const Navbar = () => {
    return (
        <nav className={styles.Navbar}>
            <div className={styles.Navbar__logo}>
                <Logo />
            </div>
            <ul className={styles.Navbar__list}>
                <li className={styles.Navbar__list__item}>
                    <NavLink to="" className={styles.Navbar__link}>Home</NavLink>
                </li>
                <li className={styles.Navbar__list__item}>
                    <NavLink to="" className={styles.Navbar__link}>Movies</NavLink>
                </li>
                <li className={styles.Navbar__list__item}>
                    <NavLink to="" className={styles.Navbar__link}>TV Shows</NavLink>
                </li>
                <li className={styles.Navbar__list__item}>
                    <NavLink to="" className={styles.Navbar__link}>About</NavLink>
                </li>        
            </ul>
            <div className={styles.Navbar__SearchBar}>
                <SearchBar/>
            </div>
        </nav>
    );
}

export default Navbar;

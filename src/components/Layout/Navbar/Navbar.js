import React from 'react';
import styles from './Navbar.module.scss';
import { NavLink } from 'react-router-dom';
import Logo from '../../Logo/Logo';
import SearchBar from '../../SearchBar/SearchBar';

const Navbar = () => {
    return (
        <nav className={styles.Navbar}>
            <div className={styles.Navbar__Logo}>
                <Logo />
            </div>
            <ul className={styles.Navbar__List}>
                <li className={styles.Navbar__List__Item}>
                    <NavLink to="/" className={styles.Navbar__Link} 
                    exact // Added to make sure the link doesnt show the active css by taking prefix from '/'
                    activeClassName={styles.Navbar__Link__IsActive} >Home</NavLink>
                </li>
                <li className={styles.Navbar__List__Item}>
                    <NavLink to="/movies" className={styles.Navbar__Link}
                    activeClassName={styles.Navbar__Link__IsActive}>Movies</NavLink>
                </li>
                <li className={styles.Navbar__List__Item}>
                    <NavLink to="/tvshows" className={styles.Navbar__Link}
                    activeClassName={styles.Navbar__Link__IsActive}>TV Shows</NavLink>
                </li>
                <li className={styles.Navbar__List__Item}>
                    <NavLink to="/about" className={styles.Navbar__Link}
                    activeClassName={styles.Navbar__Link__IsActive}>About</NavLink>
                </li>        
            </ul>
            <div className={styles.Navbar__SearchBar}>
                <SearchBar/>
            </div>
        </nav>
    );
}

export default Navbar;

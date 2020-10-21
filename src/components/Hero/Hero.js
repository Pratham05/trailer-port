import React from 'react';
import styles from './Hero.module.scss';
import SearchBar from '../SearchBar/SearchBar';

const Hero = () => {
    return (
        <div className={styles.Hero}>
            <p className={styles.Hero__TextPrimary}>
                Browse for the Latest Movie and TV Show Trailers 
            </p>
            <div className={styles.Hero__SearchBar}>
                <SearchBar/>
            </div>
            <p className={styles.Hero__TextSecondary}>
                New Trailers Added Everyday
            </p>
        </div>
    );
};

export default Hero;

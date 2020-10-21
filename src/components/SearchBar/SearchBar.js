import React, {useRef} from 'react';
import styles from './SearchBar.module.scss';
import sprite from '../../svg/svg-defs.svg';



const SearchBar = () => {
    // For keeping a track of the input element
    let inputRef = useRef(null);

    const onCloseClickHandler = (event) => {
        // Clear the input Field
        inputRef.current.value = "";
    }; 

    const onSearchHandler = (event) => {
        // Search only when there is something inside the search bar
        if (inputRef.current.value) {
            //console.log("Searched!");
            //console.log(event.target.type);
            if (event.type) { // Check event type for input - is undefined for seatch btn
                if (event.key === 'Enter') {
                    console.log("enter Searched!");
                } 
            } else {
                console.log("Search Button Pressed!");
            }   
        } 
    };

    return (
        <div className={styles.InputGroup}>
            <input ref={inputRef} onKeyDown={onSearchHandler}
            type="text" className={styles.InputGroup__SearchBar} 
            placeholder="Movies & TV Shows" />
            <svg onClick={onSearchHandler}
                className={styles.InputGroup__Icon}>
                <use href={sprite + "#icon-search"}/>
            </svg>
            <div onClick={onCloseClickHandler} className={styles.InputGroup__CloseBtn}>
                &#10005;
            </div>
        </div>
    );
};

export default SearchBar;

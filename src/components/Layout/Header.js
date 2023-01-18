import React from "react";
import styles from "./Header.module.css"
import HeaderCartButton from "./headerCartButton/headerCartButton";
const Header = props => {
    return (
        <React.Fragment>
            <header className={styles.header}>
                <h1>Закажи суши</h1>
                <HeaderCartButton/>
            </header>
            {/*<div className={styles['main-image']}>*/}
            {/*    <img src={headerBgImg}/>*/}
            {/*</div>*/}
        </React.Fragment>
    )
}

export default Header
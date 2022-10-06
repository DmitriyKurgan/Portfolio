import React from 'react';
import styles from './Main.module.css';
import stylesContainer from './../../common/styles/Container.module.css';

export const Main = () => {
    return (
        <main className={styles.mainBlock}>
            <div className={stylesContainer.container}>
                <div className={styles.text}>
                    <span>Hi there</span>
                    <h1>My name is Dmitriy Kurgan</h1>
                    <p>I am FrontEnd developer</p>
                </div>
                <div className={styles.photo}>

                </div>
            </div>

        </main>
    );
};
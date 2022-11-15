import React from 'react';
import styles from './Main.module.scss';
import stylesContainer from './../../common/styles/Container.module.css';
import avatar from '../../common/Assets/my_photo.png';

const style = {backgroundImage: `url(${avatar})`}

export const Main = () => {
    return (
        <main className={styles.mainBlock}>
            <div className={stylesContainer.container}>
                <div className={styles.text}>
                    <p>Hi there</p>
                    <h1>My name is Dmitriy Kurgan</h1>
                    <p>I am Front End developer</p>
                </div>
                <div className={styles.photo} style={style}>

                </div>
            </div>
        </main>
    );
};
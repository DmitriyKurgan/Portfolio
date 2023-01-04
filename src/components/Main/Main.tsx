import React from 'react';
import styles from './Main.module.scss';
import stylesContainer from './../../common/styles/Container.module.css';
import avatar from '../../common/Assets/my_photo.png';
import Fade from 'react-awesome-reveal';
import ReactTypingEffect from 'react-typing-effect';

const style = {backgroundImage: `url(${avatar})`}

export const Main = () => {
    return (
        <Fade cascade duration={1400}>
            <main className={styles.mainBlock}>
                <div className={stylesContainer.container}>
                    <div className={styles.text}>
                        <p>Hi there</p>
                        <ReactTypingEffect
                            text={['My name is Dmitriy Kurgan']}
                            typingDelay={0.2}
                            cursor={'|'}
                            displayTextRenderer={(text, i) => {
                                return (
                                    <h1>
                                        {text.split('').map((char, i) => {
                                            const key = `${i}`;
                                            return (
                                                <span
                                                    key={key}
                                                    style={i % 2 === 0 ? {color: 'inherit'} : {}}
                                                >{char}</span>
                                            );
                                        })}
                                    </h1>
                                );
                            }}
                        />
                        <p>I am Front End developer</p>
                    </div>
                    <div className={styles.photo} style={style}>

                    </div>
                </div>
            </main>
        </Fade>

    );
};
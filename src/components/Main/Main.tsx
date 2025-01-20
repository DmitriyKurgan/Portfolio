import React from 'react';
import styles from './Main.module.scss';
import stylesContainer from './../../common/styles/Container.module.css';
import avatar from '../../common/Assets/goodPic.jpg';
import {strings} from "../../common/Utills/initialization.ts";
import ReactTypingEffect from 'react-typing-effect';

const TypingEffect: any = ReactTypingEffect

const style = {backgroundImage: `url(${avatar})`}

export const Main = () => {
    return (
        <main className={styles.mainBlock}>
            <div className={stylesContainer.container}>
                <div className={styles.text}>
                    <p>{strings.mainBlock.hi}</p>
                    <ReactTypingEffect
                        text={strings.mainBlock.myName}
                        cursor={'|'}
                        typingDelay={0}
                        eraseDelay={0}
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
                    <p>{strings.mainBlock.profession}</p>
                </div>
                <div className={styles.photo} style={style}>

                </div>
            </div>
        </main>
    );
};
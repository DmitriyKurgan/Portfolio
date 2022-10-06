import React from 'react';
import styles from './Button.module.css';


type ButtonPropsType = {
    title:string
    className?:string
    callback:()=>void
}
export const Button:React.FC<ButtonPropsType> = ({title, callback, ...restProps}) => {
    return (
        <button onClick={callback} className={`${styles.button} ${restProps.className}`}>
            {title}
        </button>
    );
};


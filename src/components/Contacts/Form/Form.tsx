import React from 'react';
import styles from './Form.module.css';

export const Form = () => {
    return (
        <form className={styles.form_block}>
                <input type="text" name="name" placeholder='Name...' required/>
                <input type="text" name="email" placeholder='Email...' required/>
                <textarea name="taxtarea" placeholder='Message...' required/>
        </form>
);
};

import React from 'react';
import styles from './Form.module.scss';

export const Form = () => {
    return (
        <form className={styles.form_block}>
            <input type="text" name="name" placeholder="Name..." required autoFocus/>
            <input type="text" name="email" placeholder="Email..." required autoFocus/>
            <textarea name="taxtarea" placeholder="Message..." required autoFocus/>
        </form>
    );
};

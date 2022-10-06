import React from 'react';
import {Button} from '../../common/Button/Button';
import styles from './Contacts.module.css';
import stylesContainer from './../../common/styles/Container.module.css';
import {Form} from './Form/Form';

export const Contacts = () => {
    return (
        <section className={styles.contacts_block}>
            <div className={`${stylesContainer.container} ${styles.contacts_container}`}>
                <h2 className={styles.title}>Contacts</h2>
                <Form/>
                <Button title={'Submit'} className={styles.submit_button} callback={() => {
                }}/>
            </div>
        </section>
    );
};


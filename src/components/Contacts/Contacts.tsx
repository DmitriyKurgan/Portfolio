import React from 'react';
import styles from './Contacts.module.scss';
import stylesContainer from './../../common/styles/Container.module.css';
import {Form} from './Form/Form';
import {Title} from '../../common/Title/Title';
import {strings} from "../../common/Utills/initialization.ts";



export const Contacts = () => {
    return (
        <section className={styles.contacts_block} id="contacts-block">
            <div className={`${stylesContainer.container} ${styles.contacts_container}`}>
                <Title title={strings.contactsBlock.contactsTitle}/>
                <Form/>
            </div>
        </section>
    );
};


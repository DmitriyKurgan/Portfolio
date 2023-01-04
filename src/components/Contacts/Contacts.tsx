import React from 'react';
import {Button} from '../../common/Button/Button';
import styles from './Contacts.module.scss';
import stylesContainer from './../../common/styles/Container.module.css';
import {Form} from './Form/Form';
import {Title} from '../../common/Title/Title';
import Fade from 'react-awesome-reveal';

export const Contacts = () => {
    return (
        <Fade cascade duration={1400}>
            <section className={styles.contacts_block} id="contacts-block">
                <div className={`${stylesContainer.container} ${styles.contacts_container}`}>
                    <Title title={'Contacts'}/>
                    <Form/>
                    <Button title={'Submit'} className={styles.submit_button} callback={() => {
                    }}/>
                </div>
            </section>
        </Fade>
    );
};


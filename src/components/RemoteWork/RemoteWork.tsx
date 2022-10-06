import React from 'react';
import styles from './RemoteWork.module.css';
import stylesContainer from './../../common/styles/Container.module.css';
import {Button} from '../../common/Button/Button';

type RemoteWorkPropsType = {}
export const RemoteWork: React.FC<RemoteWorkPropsType> = ({}) => {
    return (
        <section className={styles.remote_work_block}>
            <div className={`${stylesContainer.container} ${styles.works_container}`}>
                <h2 className={styles.title}>Considering remote work options</h2>
                <Button title={'Hire me'} callback={() => {
                }}/>
            </div>
        </section>
    );
};
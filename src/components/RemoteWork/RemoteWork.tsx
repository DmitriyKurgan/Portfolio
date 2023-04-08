import React from 'react';
import styles from './RemoteWork.module.scss';
import stylesContainer from './../../common/styles/Container.module.css';
import {Button} from '../../common/Button/Button';
import {Title} from '../../common/Title/Title';
import {strings} from "../../common/Utills/initialization.ts";


type RemoteWorkPropsType = {}
export const RemoteWork: React.FC<RemoteWorkPropsType> = ({}) => {
    return (
        <section className={styles.remote_work_block}>
            <div className={`${stylesContainer.container} ${styles.works_container}`}>
                <Title title={strings.remoteWorkBlock.remoteWorkTitle}/>
                <Button title={strings.remoteWorkBlock.hire} callback={() => {
                }}/>
            </div>
        </section>
    );
};
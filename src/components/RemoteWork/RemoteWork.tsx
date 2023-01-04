import React from 'react';
import styles from './RemoteWork.module.scss';
import stylesContainer from './../../common/styles/Container.module.css';
import {Button} from '../../common/Button/Button';
import {Title} from '../../common/Title/Title';
import Fade from 'react-awesome-reveal';

type RemoteWorkPropsType = {}
export const RemoteWork: React.FC<RemoteWorkPropsType> = ({}) => {
    return (
        <Fade cascade duration={1400}>
            <section className={styles.remote_work_block}>
                <div className={`${stylesContainer.container} ${styles.works_container}`}>
                    <Title title={'Considering remote work options'}/>
                    <Button title={'Hire me'} callback={() => {
                    }}/>
                </div>
            </section>
        </Fade>
    );
};
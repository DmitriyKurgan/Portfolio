import React from 'react';
import styles from './Works.module.css';
import stylesContainer from '../../common/styles/Container.module.css';
import {Project} from './Project/Project';

let projects = [
    {
        title: 'First project',
        description: 'This is my first educational social network, created by free video lessons from Dimych'
    },
    {
        title: 'Second project',
        description: 'This is my second educational social network, created by free video lessons from Dimych'
    },
]

export const Works = () => {
    return (
        <section className={styles.works_block}>
            <div className={`${stylesContainer.container} ${styles.works_container}`}>
                <h2 className={styles.title}>Works</h2>
                <div className={styles.works}>
                    <Project title={projects[0].title} description={projects[0].description}/>
                    <Project title={projects[1].title} description={projects[1].description}/>
                </div>
            </div>
        </section>
    );
};

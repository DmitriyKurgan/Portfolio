import React from 'react';
import styles from './Projects.module.scss';
import stylesContainer from '../../common/styles/Container.module.css';
import {Project} from './Project/Project';
import {Title} from '../../common/Title/Title';

type ProjectType = {
    id: number
    title: string
    description: string
    style:StyleType
}

export type StyleType = {
    backgroundImage: string
}

type ProjectPropsType = {
    projects:ProjectType[]
}



export const Projects:React.FC<ProjectPropsType> = ({projects}) => {

    return (
        <section className={styles.projects_block}>
            <div className={`${stylesContainer.container} ${styles.projects_container}`}>
                <Title title={'Projects'}/>
                <div className={styles.projects}>
                    {projects.map(p => <Project
                        key={p.id}
                        title={p.title} description={p.description}
                        style={p.style}/>)}
                </div>
            </div>
        </section>
    );
};

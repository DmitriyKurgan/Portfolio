import React, {memo} from 'react';
import styles from './Projects.module.scss';
import stylesContainer from '../../common/styles/Container.module.css';
import {Project} from './Project/Project';
import {Title} from '../../common/Title/Title';

type ProjectType = {
    id: number
    title: string
    description: string
    style: StyleType
    link: string
}

export type StyleType = {
    backgroundImage: string
}

type ProjectPropsType = {
    projects: ProjectType[]
}


export const Projects: React.FC<ProjectPropsType> = memo(({projects}) => {

    return (
        <section className={styles.projects_block} id="projects">
            <div className={`${stylesContainer.container} ${styles.projects_container}`}>
                <Title title={'Projects'}/>
                <div className={styles.projects}>
                    {projects.map(p => <Project
                        key={p.id}
                        title={p.title} description={p.description} link={p.link}
                        style={p.style}/>)}
                </div>
            </div>
        </section>
    );
});

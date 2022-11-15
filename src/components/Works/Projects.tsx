import React from 'react';
import styles from './Projects.module.scss';
import stylesContainer from '../../common/styles/Container.module.css';
import {Project} from './Project/Project';
import {Title} from '../../common/Title/Title';
import socialNetworkImage from './../../common/Assets/social_network.jpg';
import todolist1Image from './../../common/Assets/todolist1.png';
import todolist2Image from './../../common/Assets/todolist2.jpg';
import counterImage from './../../common/Assets/counter.png';
import jsTrainingImage from './../../common/Assets/js_native.png';
import reactCabzda from './../../common/Assets/reactCab.jpeg';

type ProjectType = {
    id: number
    title: string
    description: string
    style:SocialType
}

export type SocialType = {
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

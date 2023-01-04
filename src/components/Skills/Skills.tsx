import React from 'react';
import styles from './Skills.module.scss';
import stylesContainer from './../../common/styles/Container.module.css';
import {Skill} from './Skill/Skill';
import {Title} from '../../common/Title/Title';
import {StyleType} from '../Works/Projects';
import Fade from 'react-awesome-reveal';

export type SkillType = {
    id: number
    title: string
    description: string
    style: StyleType
}

type SkillsPropsType = {
    skills: SkillType[]
}

export const Skills: React.FC<SkillsPropsType> = ({skills}) => {
    return (
        <Fade cascade duration={1400}>
            <section className={styles.skills_block} id="skills">
                <div className={`${stylesContainer.container} ${styles.skillsContainer}`}>
                    <Title title={'Skills'}/>
                    <div className={styles.skills}>
                        {skills.map(s => <Skill key={s.id} title={s.title} description={s.description}
                                                style={s.style}/>)}
                    </div>
                </div>
            </section>
        </Fade>
    );
};

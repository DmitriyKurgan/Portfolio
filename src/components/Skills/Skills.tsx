import React, {memo} from 'react';
import styles from './Skills.module.scss';
import stylesContainer from './../../common/styles/Container.module.css';
import {Skill} from './Skill/Skill';
import {Title} from '../../common/Title/Title';
import {StyleType} from '../Works/Projects';
import {strings} from "../../common/Utills/initialization.ts";

export type SkillType = {
    id: number
    title: string
    description: string
    style: StyleType
}

type SkillsPropsType = {
    skills: SkillType[],
    internationalization: string
}

export const Skills: React.FC<SkillsPropsType> = memo(({skills, internationalization}) => {
    const skillsDescriptions = strings.skillsBlock.allSkills;
    return (
        <section className={styles.skills_block} id="skills">
            <div className={`${stylesContainer.container} ${styles.skillsContainer}`}>
                <Title title={strings.skillsBlock.skillsTitle}/>
                <div className={styles.skills}>
                    {skills.map(s => <Skill key={s.id} title={s.title} description={skillsDescriptions[s.id]}
                                            style={s.style}/>)}
                </div>
            </div>
        </section>
    );
});

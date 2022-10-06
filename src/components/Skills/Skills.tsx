import React from 'react';
import styles from './Skills.module.css';
import stylesContainer from './../../common/styles/Container.module.css';
import {Skill} from './Skill/Skill';

export const Skills = () => {
    return (
        <section className={styles.skills_block}>
            <div className={`${stylesContainer.container} ${styles.skillsContainer}`}>
                <h2 className={styles.title}>Skills</h2>
                <div className={styles.skills}>
                    <Skill title={'HTML'} description={'I`m learn HTML for 1 hour'}/>
                    <Skill title={'CSS'} description={'I`m learn CSS for 1 hour'}/>
                    <Skill title={'JS'} description={'I`m learn JS for 1 hour'}/>
                    <Skill title={'TS'} description={'I`m learn TS for 1 hour'}/>
                </div>
            </div>
        </section>
    );
};

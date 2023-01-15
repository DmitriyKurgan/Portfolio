import {SkillType} from "../components/Skills/Skills";
import HTML5 from "../common/Assets/html-svgrepo-com.svg";
import CSS3 from "../common/Assets/css-svgrepo-com.svg";
import Module from "../common/Assets/css-programming-svgrepo-com.svg";
import FLEX from "../common/Assets/module-svgrepo-com.svg";
import GRID from "../common/Assets/css-svgrepo-com.svg";
import ScSS from "../common/Assets/SCSS.png";
import JS from "../common/Assets/JS.png";
import TS from "../common/Assets/typescript-svgrepo-com.svg";
import reactImg from "../common/Assets/react-svgrepo-com.svg";
import ReduX from "../common/Assets/redux-svgrepo-com.svg";
import Thunk from "../common/Assets/RDX_THNK.png";
import Axios from "../common/Assets/pull-requests-svgrepo-com.svg";
import REST_API from "../common/Assets/icon.png";
import Formik from "../common/Assets/formik.png";
import Selectors from "../common/Assets/pull-requests-svgrepo-com.svg";
import FLUX from "../common/Assets/fluX.png";
import GIT from "../common/Assets/git-svgrepo-com.svg";
import Hooks from "../common/Assets/icon.png";


export type SkillsStateType = SkillType[]
type SkillsActionTypes = any;
let initialState: SkillsStateType = [
    {
        id: 0,
        title: 'HTML5',
        description: 'I am proficient in HTML5, understand the importance of semantic layout and BEM methodology.',
        style: {backgroundImage: `url(${HTML5})`}
    },
    {
        id: 1, title: 'CSS3',
        description: 'I know CSS3 and have trained on a sufficient number of layouts.',
        style: {backgroundImage: `url(${CSS3})`}
    },
    {
        id: 2,
        title: 'Module.css',
        description: 'Actively practice modular layout, allowing you to use simpler names without the risk of overwriting selectors.',
        style: {backgroundImage: `url(${Module})`}
    },
    {
        id: 3,
        title: 'FLEX',
        description: 'Used flexboxes for some projects, including my portfolio. I understand the basic principles and syntax.',
        style: {backgroundImage: `url(${FLEX})`}
    },
    {
        id: 4,
        title: 'GRID',
        description: 'I use CSS-grid in my projects many times and find it to be the most versatile when it comes to complex structures.',
        style: {backgroundImage: `url(${GRID})`}
    },
    {
        id: 5,
        title: 'SCSS',
        description: 'I know how to work with this preprocessor and understand its advantages over native CSS.',
        style: {backgroundImage: `url(${ScSS})`}
    },
    {
        id: 6,
        title: 'JS',
        description: 'I\'ve been studying JS for quite some time now, including promises, event loops, classes, prototype inheritance, etc.',
        style: {backgroundImage: `url(${JS})`}
    },
    {
        id: 7,
        title: 'TS',
        description: 'I create all my projects using TS, I understand the convenience of this approach and I\'ve put quite a lot of typing features into practice.',
        style: {backgroundImage: `url(${TS})`}
    },
    {
        id: 8,
        title: 'React',
        description: 'Built about 10 different applications of different complexity using React on my own, including pretty massive projects.',
        style: {backgroundImage: `url(${reactImg})`}
    },
    {
        id: 9,
        title: 'Redux',
        description: 'I know how to work with Redux and use this library as my main tool for state management.',
        style: {backgroundImage: `url(${ReduX})`}
    },
    {
        id: 10,
        title: 'Thunk',
        description: 'I know how Thunks work and understand the problems they solve. I know how to write these functions and how to type them in the most universal way.',
        style: {backgroundImage: `url(${Thunk})`}
    },
    {
        id: 11,
        title: 'Axios',
        description: 'Ability to work with Axios library and interact with the server. I know how to properly create a DAL level in applications and create a convenient and shorter code.',
        style: {backgroundImage: `url(${Axios})`}
    },
    {
        id: 12,
        title: 'REST API',
        description: 'I know how to interact with Rest API, make requests of different kinds and handle server errors (try/catch).',
        style: {backgroundImage: `url(${REST_API})`}
    },
    {
        id: 13,
        title: 'Formik',
        description: 'Worked with Formik library, solidifying my skills on two social networks and two Todo lists, creating authorization flow.',
        style: {backgroundImage: `url(${Formik})`}
    },
    {
        id: 14,
        title: 'Selectors/Reselect',
        description: 'Worked with selectors and understand why they need to be written, know how to interact with the Reselect library.',
        style: {backgroundImage: `url(${Selectors})`}
    },
    {
        id: 15,
        title: 'FLUX',
        description: 'Built all of my web applications following the principles of FLUX architecture.',
        style: {backgroundImage: `url(${FLUX})`}
    },
    {
        id: 16,
        title: 'GIT',
        description: 'I use Git all the time and know enough basic commands. PS every working day starts with a Git Pull...',
        style: {backgroundImage: `url(${GIT})`}
    },
    {
        id: 17,
        title: 'Hooks',
        description: 'Worked a lot with hooks and try to use them in every way possible to solve various tasks.\n',
        style: {backgroundImage: `url(${Hooks})`}
    },
];

export const skillsReducer = (state: SkillsStateType = initialState, action: SkillsActionTypes) => {
    switch (action.type) {
                default: {
            return state
        }

    }
}


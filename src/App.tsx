import React from 'react';
import './App.css';
import {Header} from './components/Header/Header';
import {Main} from './components/Main/Main';
import {Skills} from './components/Skills/Skills';
import {RemoteWork} from './components/RemoteWork/RemoteWork';
import {Contacts} from './components/Contacts/Contacts';
import {Footer} from './components/Footer/Footer';
import {Projects} from './components/Works/Projects';
import socialNetworkImage from './common/Assets/social_network.jpg';
import todolist1Image from './common/Assets/todolist1.png';
import todolist2Image from './common/Assets/todolist2.jpg';
import counterImage from './common/Assets/counter.png';
import jsTrainingImage from './common/Assets/JS.png';
import JS from './common/Assets/JS.png';
import reactCabzda from './common/Assets/reactCab.jpeg';
import HTML5 from './common/Assets/html-svgrepo-com.svg';
import CSS3 from './common/Assets/css-svgrepo-com.svg';
import GRID from './common/Assets/css-svgrepo-com.svg';
import Module from './common/Assets/css-programming-svgrepo-com.svg';
import FLEX from './common/Assets/module-svgrepo-com.svg';
import SCSS from './common/Assets/css-svgrepo-com (1).svg';
import TS from './common/Assets/typescript-svgrepo-com.svg';
import ScSS from './common/Assets/SCSS.png';
import reactImg from './common/Assets/react-svgrepo-com.svg';
import ReduX from './common/Assets/redux-svgrepo-com.svg';
import Thunk from './common/Assets/RDX_THNK.png';
import Axios from './common/Assets/pull-requests-svgrepo-com.svg';
import Selectors from './common/Assets/pull-requests-svgrepo-com.svg';
import REST_API from './common/Assets/icon.png';
import Hooks from './common/Assets/icon.png';
import Formik from './common/Assets/formik.png';
import FLUX from './common/Assets/fluX.png';
import GIT from './common/Assets/git-svgrepo-com.svg';
import {BrowserRouter} from 'react-router-dom';


let skills = [
    {
        id: 1,
        title: 'HTML5',
        description: 'I am proficient in HTML5, understand the importance of semantic layout and BEM methodology.',
        style: {backgroundImage: `url(${HTML5})`}
    },
    {
        id: 2, title: 'CSS3',
        description: 'I know CSS3 and have trained on a sufficient number of layouts.',
        style: {backgroundImage: `url(${CSS3})`}
    },
    {
        id: 3,
        title: 'Module.css',
        description: 'Actively practice modular layout, allowing you to use simpler names without the risk of overwriting selectors.',
        style: {backgroundImage: `url(${Module})`}
    },
    {
        id: 4,
        title: 'FLEX',
        description: 'Used flexboxes for some projects, including my portfolio. I understand the basic principles and syntax.',
        style: {backgroundImage: `url(${FLEX})`}
    },
    {
        id: 5,
        title: 'GRID',
        description: 'I use CSS-grid in my projects many times and find it to be the most versatile when it comes to complex structures.',
        style: {backgroundImage: `url(${GRID})`}
    },
    {
        id: 6,
        title: 'SCSS',
        description: 'I know how to work with this preprocessor and understand its advantages over native CSS.',
        style: {backgroundImage: `url(${ScSS})`}
    },
    {
        id: 7,
        title: 'JS',
        description: 'I\'ve been studying JS for quite some time now, including promises, event loops, classes, prototype inheritance, etc.',
        style: {backgroundImage: `url(${JS})`}
    },
    {
        id: 8,
        title: 'TS',
        description: 'I create all my projects using TS, I understand the convenience of this approach and I\'ve put quite a lot of typing features into practice.',
        style: {backgroundImage: `url(${TS})`}
    },
    {
        id: 9,
        title: 'React',
        description: 'Built about 10 different applications of different complexity using React on my own, including pretty massive projects.',
        style: {backgroundImage: `url(${reactImg})`}
    },
    {
        id: 10,
        title: 'Redux',
        description: 'I know how to work with Redux and use this library as my main tool for state management.',
        style: {backgroundImage: `url(${ReduX})`}
    },
    {
        id: 11,
        title: 'Thunk',
        description: 'I know how Thunks work and understand the problems they solve. I know how to write these functions and how to type them in the most universal way.',
        style: {backgroundImage: `url(${Thunk})`}
    },
    {
        id: 12,
        title: 'Axios',
        description: 'Ability to work with Axios library and interact with the server. I know how to properly create a DAL level in applications and create a convenient and shorter code.',
        style: {backgroundImage: `url(${Axios})`}
    },
    {
        id: 13,
        title: 'REST API',
        description: 'I know how to interact with Rest API, make requests of different kinds and handle server errors (try/catch).',
        style: {backgroundImage: `url(${REST_API})`}
    },
    {
        id: 14,
        title: 'Formik',
        description: 'Worked with Formik library, solidifying my skills on two social networks and two Todo lists, creating authorization flow.',
        style: {backgroundImage: `url(${Formik})`}
    },
    {
        id: 15,
        title: 'Selectors/Reselect',
        description: 'Worked with selectors and understand why they need to be written, know how to interact with the Reselect library.',
        style: {backgroundImage: `url(${Selectors})`}
    },
    {
        id: 16,
        title: 'FLUX',
        description: 'Built all of my web applications following the principles of FLUX architecture.',
        style: {backgroundImage: `url(${FLUX})`}
    },
    {
        id: 17,
        title: 'GIT',
        description: 'I use Git all the time and know enough basic commands. PS every working day starts with a Git Pull...',
        style: {backgroundImage: `url(${GIT})`}
    },
    {
        id: 18,
        title: 'Hooks',
        description: 'Worked a lot with hooks and try to use them in every way possible to solve various tasks.\n',
        style: {backgroundImage: `url(${Hooks})`}
    },
];
let projects = [
    {
        id: 1,
        title: 'Social Network on TS',
        description: 'I present you my second fully completed social network, which is written in React + Redux + TS. ',
        link: 'https://dmitriykurgan.github.io/TSX_SOCIAL_NETWORK_Dmitriy',
        style: {backgroundImage: `url(${socialNetworkImage})`}
    },
    {
        id: 2,
        title: 'Todo list',
        description: 'Introducing my basic Todo list, written using React + Redux + TS+ Axios + Hooks, etc. Here I honed all my skills in practice as I studied in IT-INCUBATOR.',
        link: 'https://dmitriykurgan.github.io/toDoList_DmitriyKurgan',
        style: {backgroundImage: `url(${todolist1Image})`}
    },
    {
        id: 3,
        title: 'Cards project',
        description: 'I present you my cards project, written using React + Redux Toolkit + RTK Query + TS + Axios + Hooks, etc. Here I consolidated all my skills in practice as I studied in IT-INCUBATOR.',
        link: 'https://cards-friday-project.vercel.app/',
        style: {backgroundImage: `url(${todolist2Image})`}
    },
    {
        id: 4,
        title: 'React + Redux counter with settings',
        description: 'I present you my modified setup counter, which was my IT-INCUBATOR exam and was refined as I learned, according to the ToR. Here I used the classic combination of React + Redux technologies with the addition of Local Storage + store.subscribe.',
        link: '#',
        style: {backgroundImage: `url(${counterImage})`}
    },
    {
        id: 5,
        title: 'JS training',
        link: '#',
        description: 'I\'m also attaching some of my files in which I wrote practice code, solidifying my knowledge of native JS, delving into the technologies needed to better understand the architecture of web applications.',
        style: {backgroundImage: `url(${jsTrainingImage})`}
    },
    {
        id: 6,
        title: 'React training',
        link: '#',
        description: 'I\'m also attaching this repository for a local exploration of React and StoryBook features. ',
        style: {backgroundImage: `url(${reactCabzda})`}
    }
]

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Header/>
                <Main/>
                <Skills skills={skills}/>
                <Projects projects={projects}/>
                <RemoteWork/>
                <Contacts/>
                <Footer/>
            </div>
        </BrowserRouter>
    );
}

export default App;

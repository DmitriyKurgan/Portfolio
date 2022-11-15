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
import jsTrainingImage from './common/Assets/js_native.png';
import reactCabzda from './common/Assets/reactCab.jpeg';

let skills = [
    {
        id: 1,
        title: 'HTML5',
        description: 'I am proficient in HTML5, understand the importance of semantic layout and BEM methodology.'
    },
    {id: 2, title: 'CSS3', description: 'I know CSS3 and have trained on a sufficient number of layouts.'},
    {
        id: 3,
        title: 'Module.css',
        description: 'Actively practice modular layout, allowing you to use simpler names without the risk of overwriting selectors.'
    },
    {
        id: 4,
        title: 'FLEX',
        description: 'Used flexboxes for some projects, including my portfolio. I understand the basic principles and syntax.'
    },
    {
        id: 5,
        title: 'GRID',
        description: 'I use CSS-grid in my projects many times and find it to be the most versatile when it comes to complex structures.'
    },
    {
        id: 6,
        title: 'SCSS',
        description: 'I know how to work with this preprocessor and understand its advantages over native CSS.'
    },
    {
        id: 7,
        title: 'JS',
        description: 'I\'ve been studying JS for quite some time now, including promises, event loops, classes, prototype inheritance, etc.'
    },
    {
        id: 8,
        title: 'TS',
        description: 'I create all my projects using TS, I understand the convenience of this approach and I\'ve put quite a lot of typing features into practice.'
    },
    {
        id: 9,
        title: 'React',
        description: 'Built about 10 different applications of different complexity using React on my own, including pretty massive projects.'
    },
    {
        id: 10,
        title: 'Redux',
        description: 'I know how to work with Redux and use this library as my main tool for state management.'
    },
    {
        id: 11,
        title: 'Thunk',
        description: 'I know how Thunks work and understand the problems they solve. I know how to write these functions and how to type them in the most universal way.'
    },
    {
        id: 12,
        title: 'Axios',
        description: 'Ability to work with Axios library and interact with the server. I know how to properly create a DAL level in applications and create a convenient and shorter code.'
    },
    {
        id: 13,
        title: 'REST API',
        description: 'I know how to interact with Rest API, make requests of different kinds and handle server errors (try/catch).'
    },
    {
        id: 14,
        title: 'Formik',
        description: 'Worked with Formik library, solidifying my skills on two social networks and two Todo lists, creating authorization flow.'
    },
    {
        id: 15,
        title: 'Selectors/Reselect',
        description: 'Worked with selectors and understand why they need to be written, know how to interact with the Reselect library.'
    },
    {
        id: 16,
        title: 'FLUX',
        description: 'Built all of my web applications following the principles of FLUX architecture.'
    },
    {
        id: 17,
        title: 'GIT',
        description: 'I use Git all the time and know enough basic commands. PS every working day starts with a Git Pull...'
    },
    {
        id: 18,
        title: 'Hooks',
        description: 'Worked a lot with hooks and try to use them in every way possible to solve various tasks.\n'
    },
];

let projects = [
    {
        id: 1,
        title: 'Soicial Network on TS',
        description: 'I present you my second fully completed social network, which is written in React + Redux + TS. ',
        style: {backgroundImage: `url(${socialNetworkImage})`}
    },
    {
        id: 2,
        title: 'First Todo list',
        description: 'Introducing my basic Todo list, written using React + Redux + TS+ Axios + Hooks, etc. Here I honed all my skills in practice as I studied in IT-INCUBATOR.',
        style: {backgroundImage: `url(${todolist1Image})`}
    },
    {
        id: 3,
        title: 'Second Training Todo list',
        description: 'I present you my second training Todo list, written using React + Redux + TS + Axios + Hooks, etc. Here I consolidated all my skills in practice as I studied in IT-INCUBATOR.',
        style: {backgroundImage: `url(${todolist2Image})`}
    },
    {
        id: 4,
        title: 'React + Redux counter with settings',
        description: 'I present you my modified setup counter, which was my IT-INCUBATOR exam and was finalized as I learned, according to the ToR. Here I used a classic combination of React + Redux technologies with the addition of Local Storage + Thunk.',
        style: {backgroundImage: `url(${counterImage})`}
    },
    {
        id: 5,
        title: 'JS training',
        description: 'I\'m also attaching some of my files in which I wrote practice code, solidifying my knowledge of native JS, delving into the technologies needed to better understand the architecture of web applications.',
        style: {backgroundImage: `url(${jsTrainingImage})`}
    },
    {
        id: 6,
        title: 'React training',
        description: 'I\'m also attaching this repository for a local exploration of React and StoryBook features. ',
        style: {backgroundImage: `url(${reactCabzda})`}
    }
]


function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Skills skills={skills}/>
            <Projects projects={projects}/>
            <RemoteWork/>
            <Contacts/>
            <Footer/>
        </div>

    );
}

export default App;

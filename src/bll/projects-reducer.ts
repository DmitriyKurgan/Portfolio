import jsTrainingImage from "../common/Assets/JS.png";
import socialNetworkImage from "../common/Assets/social_network.jpg";
import todolist1Image from "../common/Assets/todolist1.png";
import todolist2Image from "../common/Assets/todolist2.jpg";
import counterImage from "../common/Assets/counter.png";
import reactCabzda from "../common/Assets/reactCab.jpeg";
import {ProjectType} from "../components/Works/Projects";


export type ProjectsStateType = ProjectType[]
type SkillsActionTypes = any;
let initialState: ProjectsStateType = [
    {
        id: 0,
        title: 'Social Network on TS',
        description: 'I present you my second fully completed social network, which is written in React + Redux + TS.',
        link: 'https://dmitriykurgan.github.io/TSX_SOCIAL_NETWORK_Dmitriy',
        style: {backgroundImage: `url(${socialNetworkImage})`}
    },
    {
        id: 1,
        title: 'Todo list',
        description: 'Introducing my basic Todo list, written using React + Redux + TS+ Axios + Hooks, etc.',
        link: 'https://dmitriykurgan.github.io/toDoList_DmitriyKurgan',
        style: {backgroundImage: `url(${todolist1Image})`}
    },
    {
        id: 2,
        title: 'Cards project',
        description: 'I present you my cards project, written using React + Redux Toolkit + RTK Query + TS + Axios + Hooks, etc.',
        link: 'https://cards-friday-project.vercel.app/',
        style: {backgroundImage: `url(${todolist2Image})`}
    },
    {
        id: 3,
        title: 'React + Redux counter with settings',
        description: 'I present you my modified counter with settings, Here I used the classic combination of React + Redux technologies with the addition of Local Storage + store.subscribe.',
        link: '#',
        style: {backgroundImage: `url(${counterImage})`}
    },
];

export const projectsReducer = (state: ProjectsStateType = initialState, action: SkillsActionTypes) => {
    switch (action.type) {
        default: {
            return state
        }

    }
}


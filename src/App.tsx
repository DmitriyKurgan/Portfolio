import React, {useCallback} from 'react';
import './App.css';
import {Header} from './components/Header/Header';
import {Main} from './components/Main/Main';
import {Skills} from './components/Skills/Skills';
import {RemoteWork} from './components/RemoteWork/RemoteWork';
import {Contacts} from './components/Contacts/Contacts';
import {Footer} from './components/Footer/Footer';
import {Projects} from './components/Works/Projects';
import {BrowserRouter} from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import {setInitialize} from "./bll/app-reducer";
import {RootStateType} from "./bll/store";
import {strings} from "./common/Utills/initialization.ts";
import {SkillsStateType} from "./bll/skills-reducer";
import {ProjectsStateType} from "./bll/projects-reducer";


function App() {
    const initialize = useSelector<RootStateType, string>(state => state.app.initialize);
    const skills = useSelector<RootStateType, SkillsStateType>(state =>state.skills)
    const projects = useSelector<RootStateType, ProjectsStateType>(state =>state.projects)
    const dispatch = useDispatch();
    strings.setLanguage(initialize);

    const initializeAppLanguage = useCallback((initialize: string) => {
        dispatch(setInitialize(initialize))
    }, [dispatch])

    return (
        <BrowserRouter>
            <div className="App">
                <Header initializeAppLanguage={initializeAppLanguage}/>
                <Main/>
                <Skills skills={skills} initialize={initialize}/>
                <Projects projects={projects} initialize={initialize}/>
                <RemoteWork/>
                <Contacts/>
                <Footer/>
            </div>
        </BrowserRouter>
    );
}

export default App;

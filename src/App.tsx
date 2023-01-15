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
import {setInternationalization} from "./bll/app-reducer";
import {RootStateType} from "./bll/store";
import {strings} from "./common/Utills/initialization.ts";
import {SkillsStateType} from "./bll/skills-reducer";
import {ProjectsStateType} from "./bll/projects-reducer";


function App() {
    const internationalization = useSelector<RootStateType, string>(state => state.app.internationalization);
    const skills = useSelector<RootStateType, SkillsStateType>(state => state.skills)
    const projects = useSelector<RootStateType, ProjectsStateType>(state => state.projects)
    const dispatch = useDispatch();
    strings.setLanguage(internationalization);

    const initializeAppLanguage = useCallback((initialize: string) => {
        dispatch(setInternationalization(initialize))
    }, [dispatch])

    return (
        <BrowserRouter>
            <div className="App">
                <Header initializeAppLanguage={initializeAppLanguage}/>
                <Main/>
                <Skills skills={skills} internationalization={internationalization}/>
                <Projects projects={projects} internationalization={internationalization}/>
                <RemoteWork/>
                <Contacts/>
                <Footer/>
            </div>
        </BrowserRouter>
    );
}

export default App;

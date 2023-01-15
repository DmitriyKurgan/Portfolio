import LocalizedStrings from "react-localization";


// initialize:
export const strings = new LocalizedStrings({
    eng: {
        mySkills: "My skills",
        myProjects: "My projects",
        contact: "Contact me",
        mainBlock: {
            hi: "Hi there",
            myName: "My name is Dmitriy Kurgan",
            profession: "I am Front End developer",
        },
        skillsBlock: {
            skillsTitle:"Skills",
            allSkills: [
                "I am proficient in HTML5, understand the importance of semantic layout and BEM methodology.",
                "I know CSS3 and have trained on a sufficient number of layouts.",
                 "Actively practice modular layout, allowing you to use simpler names without the risk of overwriting selectors.",
                "Used flexboxes for some projects, including my portfolio. I understand the basic principles and syntax.",
                 "I use CSS-grid in my projects many times and find it to be the most versatile when it comes to complex structures.",
                 "I know how to work with this preprocessor and understand its advantages over native CSS.",
                 "I\'ve been studying JS for quite some time now, including promises, event loops, classes, prototype inheritance, etc.",
                 "I create all my projects using TS, I understand the convenience of this approach and I\'ve put quite a lot of typing features into practice.",
                 "Built about 10 different applications of different complexity using React on my own, including pretty massive projects.",
                 "I know how to work with Redux and use this library as my main tool for state management.",
                 "I know how Thunks work and understand the problems they solve. I know how to write these functions and how to type them in the most universal way.",
                 "Ability to work with Axios library and interact with the server. I know how to properly create a DAL level in applications and create a convenient and shorter code.",
                 "I know how to interact with Rest API, make requests of different kinds and handle server errors (try/catch).",
                 "Worked with Formik library, solidifying my skills on two social networks and two Todo lists, creating authorization flow.",
                 "Worked with selectors and understand why they need to be written, know how to interact with the Reselect library.",
                 "Built all of my web applications following the principles of FLUX architecture.",
                 "I use Git all the time and know enough basic commands. PS every working day starts with a Git Pull...",
                 "Worked a lot with hooks and try to use them in every way possible to solve various tasks.",
            ]
        },
        projectsBlock:{
            title:"Projects",
            allProjects:[
                "I present you my second fully completed social network, which is written in React + Redux + TS.",
                "Introducing my basic Todo list, written using React + Redux + TS+ Axios + Hooks, etc. ",
                "I present you my cards project, written using React + Redux Toolkit + RTK Query + TS + Axios + Hooks, etc.",
                "I present you my modified counter with settings, Here I used the classic combination of React + Redux technologies with the addition of Local Storage + store.subscribe.",
                "I\'m also attaching some of my files in which I wrote practice code, solidifying my knowledge of native JS, delving into the technologies needed to better understand the architecture of web applications.",
                "I\'m also attaching this repository for a local exploration of React and StoryBook features.",
            ],
            watchLink: "Watch my project"
        },
        remoteWorkBlock:{
            remoteWorkTitle: 'Considering remote work options',
            hire:'Hire me'
        },
        contactsBlock:{
            contactsTitle:"Contacts",
            formPlaceholders:{
                name:"Enter your name...",
                email:"Enter your email...",
                message:"Enter your message...",
            },
            submit:"Submit"
        },
        footerBlock:{
            title:"Dmitriy Kurgan",
            coopyright: "@2023 All rights reserved"
        }
    },
    ru: {
        mySkills: "Навыки",
        myProjects: "Мои проекты",
        contact: "Связаться",
        mainBlock: {
            hi: "Привет всем",
            myName: "Меня зовут Дмитрий Курган",
            profession: "Я - Фронт Енд разработчик",
        },
        skillsBlock: {
            skillsTitle:"Навыки",
            allSkills: [
                "Я хорошо владею HTML5, понимаю важность семантической верстки и методологии БЭМ.",
                "Я знаю CSS3 и применял эту технологию на большом количестве проектов.",
                "Активно практикую модульную верстку, позволяющую использовать более простые имена без риска перезаписать селекторы",
                "Использовал flexbox для некоторых проектов, включая мое портфолио.  Понимаю основные принципы и синтаксис.",
                "Много раз использовал CSS-grid в своих проектах и считаю его наиболее универсальным, когда речь идет о сложных структурах.",
                "Знаю, как работать с этим препроцессором и понимаю его преимущества перед нативным CSS.",
                "Я изучаю JS уже довольно давно, включая promises, event loop, классы, прототипное наследование и т.д.",
                "Я создаю все свои проекты, используя TS, понимаю удобство такого подхода и применяю на практике довольно много возможностей типизации.",
                "Самостоятельно создал около 10 различных приложений разной сложности с использованием React, включая довольно массивные проекты.",
                "Я знаю, как работать с Redux и использую эту библиотеку как основной инструмент для стейт-менеджмента.",
                "Я знаю, как работают Thunks, и понимаю, какие проблемы они решают. Я знаю, как писать эти функции и как делть их наиболее универсальными.",
                "Умение работать с библиотекой Axios и взаимодействовать с сервером. Я знаю, как правильно создавать уровень DAL в приложениях и создавать удобный и лаконичный код.",
                "Умею взаимодействовать с Rest API, делать запросы разных типов и обрабатывать ошибки сервера (try/catch).",
                "Работал с библиотекой Formik, уверенно владею данным инструментом.",
                "Работал с селекторами и понимаю, зачем их нужно использовать, знаю, как взаимодействовать с библиотекой Reselect.",
                "Построил все свои веб-приложения, следуя принципам архитектуры FLUX.",
                "Я постоянно использую Git и знаю все основные команды. PS каждый рабочий день начинается с Git Fetch...",
                "Много работал с Хуками и стараюсь использовать их для решения всевозможных задач",
            ]
        },
        projectsBlock:{
            title:"Проекты",
            allProjects:[
                "Представляю вам свою полностью готовую социальную сеть, написанную на React + Redux + TS",
                "Представляю вам мой основной Todo list, написанный с использованием React + Redux + TS+ Axios + Hooks и т.д.",
                "Представляю вам свой проект \"Обучения по карточкам\", написанный с использованием React + Redux Toolkit + RTK Query + TS + Axios + Hooks и т.д.",
                "Представляю вам мой модифицированный счетчик с настройками, здесь я использовал классическую комбинацию технологий React + Redux с добавлением Local Storage + store.subscribe.",
                "Я также прилагаю некоторые из моих файлов, в которых я писал практический код, закрепляя свои знания нативного JS, углубляясь в технологии, необходимые для лучшего понимания архитектуры веб-приложений.",
                "Я также прикрепляю этот репозиторий с моими учебными файлами для локального изучения возможностей React и StoryBook.",
            ],
            watchLink: "Смотреть мой проект"
        },
        remoteWorkBlock:{
            remoteWorkTitle: 'Рассматриваю варианты удаленной работы',
            hire:'Нанять меня'
        },
        contactsBlock:{
            contactsTitle:"Контакты",
            formPlaceholders:{
                name:"Введите ваше имя...",
                email:"Введите ваш электронный адрес...",
                message:"Введите ваше сообщение...",
            },
            submit:"Отправить"
        },
        footerBlock:{
            title:"Дмитрий Курган",
            coopyright: "@2023 Все права защищены"
        }

    }
});



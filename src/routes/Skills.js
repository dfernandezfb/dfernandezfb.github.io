import {useContext} from 'react'
import {
    FaHtml5,
    FaCss3Alt,
    FaJsSquare,
    FaBootstrap,
    FaReact,
    FaNodeJs,
    FaGit,
    FaGithub,
    FaTrello,
    FaCheck,
    FaAngular,
    FaBitbucket,
    FaJira
} from 'react-icons/fa'
import {DiMongodb} from 'react-icons/di'
import './../styles/skills.css'
import { LanguageContext } from '../context/LanguageContext'

const Skills = () => {
    const {language} = useContext(LanguageContext)
    return (
        <div className='box-container mt-3 mb-0 pr-3'>
            <h2 className='seccion-title mb-5'>{language==='en'?'Skills':'Habilidades'}</h2>
            <div className="subheading mb-2">{language==='en'?'Programming languages & tools':'Lenguajes de programación y herramientas'}</div>
            <ul className='dev-icons pl-4'>
                <li className='dev-icon d-flex flex-column align-items-center'><FaHtml5/> <span className='dev-icon-name'>HTML 5</span></li>
                <li className='dev-icon d-flex flex-column align-items-center'><FaCss3Alt/><span className='dev-icon-name'>CSS 3</span></li>
                <li className='dev-icon d-flex flex-column align-items-center'><FaJsSquare/><span className='dev-icon-name'>JAVASCRIPT</span></li>
                <li className='dev-icon d-flex flex-column align-items-center'><FaBootstrap/><span className='dev-icon-name'>BOOTSTRAP</span></li>
                <li className='dev-icon d-flex flex-column align-items-center'><FaReact/><span className='dev-icon-name'>REACT JS</span></li>
                <li className='dev-icon d-flex flex-column align-items-center'><FaAngular/><span className='dev-icon-name'>ANGULAR</span></li>
                <li className='dev-icon d-flex flex-column align-items-center'><FaNodeJs/><span className='dev-icon-name'>NODE JS</span></li>
                <li className='dev-icon d-flex flex-column align-items-center'><DiMongodb/><span className='dev-icon-name'>MONGO DB</span></li>
                <li className='dev-icon d-flex flex-column align-items-center'><FaGit/><span className='dev-icon-name'>GIT</span></li>
                <li className='dev-icon d-flex flex-column align-items-center'><FaGithub/><span className='dev-icon-name'>GITHUB</span></li>
                <li className='dev-icon d-flex flex-column align-items-center'><FaBitbucket/><span className='dev-icon-name'>BIT BUCKET</span></li>
                <li className='dev-icon d-flex flex-column align-items-center'><FaTrello/><span className='dev-icon-name'>TRELLO</span></li>
                <li className='dev-icon d-flex flex-column align-items-center'><FaJira/><span className='dev-icon-name'>JIRA</span></li>
            </ul>
            <div className="subheading mb-2">{language==='en'?'Workflow':'Flujo de trabajo'}</div>
            <ul className='u-list'>
                <li className=''><FaCheck/> {language==='en'?'Mobile-first, responsive design':'Mobile-first, diseños responsive'}</li>
                <li className=''><FaCheck/> {language==='en'?'Agile Development & Scrum':'Metodologías ágiles - Scrum'}</li>
            </ul>
            <div className="subheading mb-2">{language==='en'?'Languages':'Idiomas'}</div>
            <ul className='u-list'>
                <li className=''><FaCheck/> {language==='en'?'Spanish (native)':'Español (nativo)'}</li>
                <li className=''><FaCheck/> {language==='en'?'English (intermediate)':'Ingles (intermedio)'}</li>
            </ul>
            <div className="subheading mb-2">{language==='en'?'Other skills':'Otras habilidades'}</div>
            <ul className='u-list'>
                <li className=''><FaCheck/> {language==='en'?'C Programming (microcontroled systems)':'Programación en C (sistemas microcontrolados)'}</li>
                <li className=''><FaCheck/> {language==='en'?'Matlab (data analysis & signal processing)':'Matlab (analisis de datos y procesamiento de señales)'}</li>
                <li className=''><FaCheck/> Microsoft Office</li>
            </ul>
        </div>
    )
}

export default Skills

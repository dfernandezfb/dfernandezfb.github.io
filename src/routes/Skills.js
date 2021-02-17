import {useContext} from 'react'
import {
    FaHtml5,
    FaCss3Alt,
    FaJsSquare,
    FaBootstrap,
    FaReact,
    FaNodeJs,
    FaGit,
    FaTrello,
    FaCheck
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
                <li className='dev-icon'><FaHtml5/></li>
                <li className='dev-icon'><FaCss3Alt/></li>
                <li className='dev-icon'><FaJsSquare/></li>
                <li className='dev-icon'><FaBootstrap/></li>
                <li className='dev-icon'><FaReact/></li>
                <li className='dev-icon'><FaNodeJs/></li>
                <li className='dev-icon'><DiMongodb/></li>
                <li className='dev-icon'><FaGit/></li>
                <li className='dev-icon'><FaTrello/></li>
            </ul>
            <div className="subheading mb-2">{language==='en'?'Workflow':'Flujo de trabajo'}</div>
            <ul className='u-list'>
                <li className='dev-icon'><FaCheck/> {language==='en'?'Mobile-first, responsive design':'Mobile-first, diseños responsive'}</li>
                <li className='dev-icon'><FaCheck/> {language==='en'?'Agile Development & Scrum':'Metodologías ágiles - Scrum'}</li>
            </ul>
            <div className="subheading mb-2">{language==='en'?'Languages':'Idiomas'}</div>
            <ul className='u-list'>
                <li className='dev-icon'><FaCheck/> {language==='en'?'Spanish (native)':'Español (nativo)'}</li>
                <li className='dev-icon'><FaCheck/> {language==='en'?'English (intermediate)':'Ingles (intermedio)'}</li>
            </ul>
            <div className="subheading mb-2">{language==='en'?'Other skills':'Otras habilidades'}</div>
            <ul className='u-list'>
                <li className='dev-icon'><FaCheck/> {language==='en'?'C Programming (microcontroled systems)':'Programación en C (sistemas microcontrolados)'}</li>
                <li className='dev-icon'><FaCheck/> {language==='en'?'Matlab (data analysis & signal processing)':'Matlab (analisis de datos y procesamiento de señales)'}</li>
                <li className='dev-icon'><FaCheck/> Microsoft Office</li>
            </ul>
        </div>
    )
}

export default Skills

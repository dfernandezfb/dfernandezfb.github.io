import {useContext} from 'react'
import {LanguageContext} from './../context/LanguageContext'

const Experience = () => {
    const {language} = useContext(LanguageContext)
    return (
            <div className='box-container mt-3 mb-0 pr-3'>
                <h2 className='seccion-title mb-5'>{language==='en'?'Experience':'Experiencia'}</h2>
                <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                    <div className="flex-grow-1">
                        <h3 className="mb-0">{language==='en'?'Assistant professor':'Ayudante estudiantil'}</h3>
                        <div className="subheading mb-2">Facultad de Ciencias Exactas y Tecnología · UNT · {language==='en'?'Chair: "Electrónica I':' Cátedra: "Electrónica I"'}</div>
                        <div>{language==='en'?'In charge of giving classes in the electronics laboratory, where the practical application of the subject is taught ':' A cargo del dictado de clases en el laboratorio de electrónica, donde se enseña la aplicación práctica de la materia.'}</div>
                    </div>
                    <div className="flex-shrink-0"><span className="text-primary">2019 - {language==='en'?'present':'presente'}</span></div>
                </div>
                <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                    <div className="flex-grow-1">
                        <h3 className="mb-0">{language==='en'?'Student intern':'Pasantía estudiantil'}</h3>
                        <div className="subheading mb-2">Instituto de Maternidad y Ginecología "Nuestra Señora de las Mercedes"</div>
                        <div>{language==='en'?"Management of the institution's health technologies. Preventive and corrective maintenance of medical devices":'Gestión de las tecnologías sanitarias de la institución. Mantenimiento preventivo y correctivo de dispositivos médicos'}</div>
                    </div>
                    <div className="flex-shrink-0"><span className="text-primary">2020</span></div>
                </div>
                <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                    <div className="flex-grow-1">
                        <h3 className="mb-0">{language==='en'?'Small projects':'Proyectos pequeños'}</h3>
                        <div className="subheading mb-3">URL de los proyectos</div>
                        <div>· {language==='en'?'Calculator (React)':'Calculadora (React)'}</div>
                        <div>· {language==='en'?'Login & register with authentication (MERN stack)':'Registro e ingreso con autenticación (MERN stack)'}</div>
                        <div>· Simpson's API (Node JS)</div>
                        <div>· {language==='en'?'This resume':'Este resumén'}</div>
                    </div>
                </div>
            </div>
    )
}

export default Experience

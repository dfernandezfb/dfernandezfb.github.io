import {useContext} from 'react'
import {LanguageContext} from './../context/LanguageContext'
import './../styles/experience.css'

const Experience = () => {
    const {language} = useContext(LanguageContext)
    return (
            <div className='box-container box-container-large mt-3 mb-0 pr-3'>
                <h2 className='seccion-title mb-3'>{language==='en'?'Experience':'Experiencia'}</h2>
                <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                    <div className="flex-grow-1">
                        <h3 className="mb-0">{language==='en'?'Software development':'Desarrollo de software'}</h3>
                        <div className="subheading mb-2">ROLLING CODE STUDIO</div>
                        <div>{language==='en'?"Backend development in Node JS, and frontend app's development in React":' Desarrollo de Backends en Node JS, y de aplicaciones de Frontend en React JS'}</div>
                    </div>
                    <div className="flex-shrink-0"><span className="text-primary">2022 - {language==='en'?'present':'presente'}</span></div>
                </div>
                <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                    <div className="flex-grow-1">
                        <h3 className="mb-0">{language==='en'?'IT services':'Servicios IT'}</h3>
                        <div className="subheading mb-2">PIXELADAS.ES</div>
                        <div>{language==='en'?"API's and Backend development in Node JS, and frontend app's development in React and Angular. Wordpress and PHP development. SEO positioning. Servers management. Reference: Daniel Infante Muñoz ":' Desarrollo de Backends y APIs en Node JS, y de aplicaciones de Frontend en React JS y en Angular. Desarrollos en PHP y Wordpress. Posicionamiento SEO. Administración de servidores. Referencia: Daniel Infante Muñoz'}</div>
                    </div>
                    <div className="flex-shrink-0"><span className="text-primary">2021 - {language==='en'?'present':'presente'}</span></div>
                </div>
                <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                    <div className="flex-grow-1">
                        <h3 className="mb-0">{language==='en'?'Full stack Mentor':'Mentor Full Stack'}</h3>
                        <div className="subheading mb-2">Rolling Code School</div>
                        <div>{language==='en'?'In charge of the teaching of the course "Fullstack Development", where some technologies that make up the frontend (HTML, CSS, Javscript, Bootstrap, React, among others) are taught, and also some that make up the backend (Node JS, Mongo DB , Express, among others)':' A cargo del dictado de clases del curso "Desarrollo Fullstack", donde se enseñan algunas tecnologías que componen al frontend (HTML,CSS,Javscript, Bootstrap, React, entre otras), y también algunas que componen al backend (Node JS, Mongo DB, Express, entre otras)'}</div>
                    </div>
                    <div className="flex-shrink-0"><span className="text-primary">2021 - {language==='en'?'present':'presente'}</span></div>
                </div>
                <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                    <div className="flex-grow-1">
                        <h3 className="mb-0">{language==='en'?'Assistant professor':'Ayudante estudiantil'}</h3>
                        <div className="subheading mb-2">Facultad de Ciencias Exactas y Tecnología · UNT · {language==='en'?'Chair: "Electrónica I':' Cátedra: "Electrónica I"'}</div>
                        <div>{language==='en'?'In charge of giving classes in the electronics laboratory, where the practical application of the subject is taught ':' A cargo del dictado de clases en el laboratorio de electrónica, donde se enseña la aplicación práctica de la materia.'}</div>
                    </div>
                    <div className="flex-shrink-0"><span className="text-primary">2019 - 2022</span></div>
                </div>
                <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                    <div className="flex-grow-1">
                        <h3 className="mb-0">{language==='en'?'Student intern':'Pasantía estudiantil'}</h3>
                        <div className="subheading mb-2">Instituto de Maternidad y Ginecología "Nuestra Señora de las Mercedes"</div>
                        <div>{language==='en'?"Management of the institution's health technologies. Preventive and corrective maintenance of medical devices":'Gestión de las tecnologías sanitarias de la institución. Mantenimiento preventivo y correctivo de dispositivos médicos'}</div>
                    </div>
                    <div className="flex-shrink-0"><span className="text-primary">2020</span></div>
                </div>
                <div className="d-flex flex-column flex-md-row justify-content-between pb-5">
                    <div className="flex-grow-1">
                        <h3 className="mb-0">{language==='en'?'Freelance and personal projects':'Proyectos freelance y personales'}</h3>
                        {/* <a href='#' target='_blank'className="subheading mb-3 portfolio">{language==='en'?'Personal Portfolio in progress':'Portafolio personal en desarrollo'}</a> */}
                        <a href='https://github.com/dfernandezfb'><h4 className="subheading mb-3 portfolio">{language==='en'?'See my github profile':'Dale un vistazo a mi perfil de github'}</h4></a>
                        <div className='d-lg-flex'>
                            <div className='mr-4'>
                                <div>· {language==='en'?'Calculator (React)':'Calculadora (React)'}</div>
                                <div>· {language==='en'?<>Nutrition web app (MERN stack) - <a href="https://teacheatnutrition.com/" target='_blank' rel='no referrer' className="text-decoration-none text-info">Teach eat</a></>:<>Aplicación web de nutrición (MERN stack)- <a href="https://teacheatnutrition.com/" target='_blank' rel='no referrer' className='text-decoration-none text-info'>Teach eat</a></>}</div>
                                <div>· Simpson's API (Node JS)</div>
                                <div>· {language==='en'?'This resume':'Este resumén'}</div>
                            </div> 
                            <div>
                                <div>· {language==='en'?<> Bioengineering conference information page (React) - <a href="https://www.cesabi.com.ar/#/" target='_blank' rel='no referrer' className="text-decoration-none text-info">CESABI</a></>:<>Página informativa de congreso de bioingeniería (React) - <a href="https://www.cesabi.com.ar/#/" target='_blank' rel='no referrer' className='text-decoration-none text-info'>CESABI</a></>}</div>
                                <div>· {language==='en'?'Movies page (Javascript)':'Página de películas (Javascript)'}</div>
                                <div>· {language==='en'?'Friends party (React)':'Juntada de amigos (React)'}</div>
                                <div>· {language==='en'?'Others':'Otros'}</div>
                            </div> 
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default Experience

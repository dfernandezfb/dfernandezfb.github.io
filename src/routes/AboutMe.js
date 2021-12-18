import {useContext} from 'react'
import {LanguageContext} from '../context/LanguageContext'
import profileImage from './../assets/Profile_photo.jpg'
import {AiFillGithub} from 'react-icons/ai'
import {FaFacebookF, FaLinkedinIn} from 'react-icons/fa'
import './../styles/aboutMe.css'

const AboutMe = () => {
    const {language} = useContext(LanguageContext)
    return (
        <div className='box-container'>
            <div className='d-flex'>
            <h1 className='name'>Diego Gabriel <span className='important'>Fernández</span></h1>
            <div className='image-container2'>
                <img src={profileImage} className='profile-image' alt='profile-image'/>
            </div>
            </div>
            <div className='contact-data'>Barrio Policial IV · San Miguel de Tucumán, Tucumán CP 4000 · +549 3815934976 · <a className='important' href='mailto:dfernandezfb@gmail.com'>dfernandezfb@gmail.com</a></div>
            <p className='description'>
                {language==='en'? 'I consider myself an organized, persevering and self-demanding person. My goals are to finish my degree, improve myself professionally in the software development field and one day aply both. I am active, sociable, and easy to adapt to groups and situations. 26 years old.' : 'Me considero una persona organizada, perseverante y autoexigente. Mis metas son terminar mi carrera, perfeccionarme profesionalmente en el campo del desarrollo de software, y algún dia aplicar ambas. Activo, sociable, y de fácil adaptacion a grupos y situaciones. 26 años.'}</p>
            <div className="social-icons">
                <a className="social-icon" target='_blank' href="https://www.linkedin.com/in/dfernandezfb"><FaLinkedinIn/></a>
                <a className="social-icon" target='_blank' href="https://github.com/dfernandezfb"><AiFillGithub/></a>
                <a className="social-icon" target='_blank' href="https://www.facebook.com/dgfernandezfb/"><FaFacebookF/></a>
            </div>
        </div>
    )
}

export default AboutMe

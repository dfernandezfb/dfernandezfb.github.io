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
                {language==='en'? 'I consider myself a self-demanding, persevering and organized person, willing to improve myself professionally. I am active and in a good spirits, easy to adapt to groups and situations. 25 years old. Single.' : 'Me considero una persona autoexigente, perseverante y organizada, dispuesto a perfeccionarme profesionalmente. Activo con buen ánimo, de fácil adaptacion a grupos y situaciones. 25 años. Soltero'}</p>
            <div className="social-icons">
                <a className="social-icon" href="www.linkedin.com/in/dfernandezfb"><FaLinkedinIn/></a>
                <a className="social-icon" href="https://github.com/dfernandezfb"><AiFillGithub/></a>
                <a className="social-icon" href="https://www.facebook.com/dgfernandezfb/"><FaFacebookF/></a>
            </div>
        </div>
    )
}

export default AboutMe

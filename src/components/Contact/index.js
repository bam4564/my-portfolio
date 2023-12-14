import AnimatedLetters from '../AnimatedLetters';
import './index.scss';
import Loader from 'react-loaders';
import {useState, useEffect, useRef} from 'react';
import emailjs from '@emailjs/browser';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';

const Contact = () => {
    
    const refForm = useRef()
    const [letterClass, setLetterClass] = useState('text-animate')

    const sendEmail = (e) => {
        e.preventDefault()

        emailjs
            .sendForm(
                'default_service', 
                'template_fyga4tj', 
                refForm.current, 
                'YsooVRmjIm-sQtmoC'
                )
            .then(() => {
                alert('Message successfully sent.')
                window.location.reload(false)
                },
                () => {
                    alert('Failed to send the message.')
                }
            )   
    }

    useEffect(() => {
        setTimeout(() => {
          setLetterClass('text-animate-hover');
        }, 3000);
    }, []);
    
    return (
        <>
            <div className='container contact-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'M', 'e']}
                        idx={15}
                        letterClass={letterClass} />
                    </h1>
                    <p>
                    I am interested in freelance opportunities - especially on ambitious
                    or large projects. However, if you have any other requests or
                    questions, don't hesitate to contact me using below form either.
                    </p>
                    <div className='contact-form'>
                        <form ref={refForm} onSubmit={sendEmail}> 
                            <ul>
                                <li className='half'>
                                    <input type='text' name='name' placeholder='Name' required={true} />
                                </li>
                                <li className='half'>
                                    <input type='email' name='email' placeholder='Email' required={true} />
                                </li>
                                <li>
                                    <input placeholder='Subject' type='text' name='subject' required />
                                </li>
                                <li>
                                    <textarea placeholder='Message' name='message' required={true} />
                                </li>
                                <li>
                                    <input type='submit' className='flat-button' value="SEND" />
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
                <div className='info-map'>
                    Alex Morrow,
                    <br />
                    United States,
                    <br />
                    13677 Mandarin Circle, 34109
                    <br />
                    Naples, Florida
                    <br />
                    <span>alex.morrow239@gmail.com</span>
                </div>
                <div className='map-wrap'>
                    <MapContainer center={[26.1420, -81.7948]} zoom={13}>
                        <TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' />
                        <Marker position={[26.1420, -81.7948]}>
                            <Popup>Have a look around my town!</Popup>
                        </Marker>
                    </MapContainer>
                </div>
            </div>

            <Loader type="ball-scale-ripple-multiple" />
        </>
    )
}

export default Contact
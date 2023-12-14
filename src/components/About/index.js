import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faGitAlt,
    faJsSquare,
    faReact,
    faPython,
    faJava,
    faRProject
  } from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'

const About = () => {

    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        setTimeout(() => {
          setLetterClass('text-animate-hover');
        }, 5000);
    }, []);

    return (
        <>
        <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters
                    letterClass={letterClass}
                    strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
                    idx={15} />
                </h1>
                <p>
                As an ambitious undergraduate student ready to embark on the journey of a 
                successful career, I am thrilled to have you here. My passion for computer 
                science and my dedication to continuous learning have led me to this point. 
                Throughout my academic journey, I've acquired a strong foundation trough projects 
                with real-world applications. Currently, I go attend the University of Miami pursuing a 
                dual degree <a rel='noreferrer' href='https://bulletin.miami.edu/undergraduate-academic-programs/arts-sciences/computer-science/computer-science-bs-students-arts-sciences/'className='link'>B.S. in Computer Science</a>,
                 <a rel='noreferrer' target='_blank' href ='https://bulletin.miami.edu/undergraduate-academic-programs/arts-sciences/computer-science/data-science-and-ai-bs/' className='link'>
                B.S. in AI & Data Science</a> and a <a rel='noreferrer' target='_blank' href='https://bulletin.miami.edu/undergraduate-academic-programs/arts-sciences/mathematics/mathematics-minor/' className='link'>Minor in Mathematics</a>
                </p>
                <p>
                You'll find that I am not 
                only a fast learner but also a passionate problem-solver with a keen eye for 
                detail. I'm seeking an internship that will challenge me, nurture my skills, 
                and allow me to make a meaningful impact.
                </p>
                <p>
                Let's connect and discuss how I 
                can be a valuable addition to your team. I'm eager to take the next step in my 
                professional journey and look forward to exploring the possibilities with you.
                </p>
            </div>

            <div className='stage-cube-cont'>
                <div className='cubespinner'>
                    <div className='face1'>
                        <FontAwesomeIcon icon={faRProject} color='#276abe' />
                    </div>
                    <div className='face2'>
                        <FontAwesomeIcon icon={faJava} color='#Fo6259' />
                    </div>
                    <div className='face3'>
                        <FontAwesomeIcon icon={faPython} color='#000000'/>
                    </div>
                    <div className='face4'>
                        <FontAwesomeIcon icon={faReact} color='#5ED4F4' />
                    </div>
                    <div className='face5'>
                        <FontAwesomeIcon icon={faJsSquare} color='#EFD81D' />
                    </div>
                    <div className='face6'>
                        <FontAwesomeIcon icon={faGitAlt} color='#EC4D28' />
                    </div>
                </div>
            </div>
        </div>

        <Loader type='ball-scale-ripple-multiple' />
        </>
    )
}

export default About
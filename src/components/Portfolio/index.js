import Loader from 'react-loaders'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useState, useEffect } from 'react'
import portfolioData from '../../Data/portfolio.json'
import PortfolioItem from '../PortfolioItem'


const Portfolio = () => {

    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        setTimeout(() => {
          setLetterClass('text-animate-hover');
        }, 3000);
    }, []);
        

    return (
        <>
        <div className='container portfolio-page'>
            <h1 className='page-title'>
                <AnimatedLetters 
                strArray={['P','o','r','t','f','o','l','i','o']}
                idx={15}
                letterClass={letterClass} />
            </h1>
            <div className='images-container'>
                {portfolioData.portfolio.map((port, index) => (
                    <PortfolioItem key={index} {...port} />
                ))}
            </div>
        </div>

        <Loader type='ball-scale-ripple-multiple' />
        </>
        
        
    )
}

export default Portfolio
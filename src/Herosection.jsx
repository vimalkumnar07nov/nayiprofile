import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { Button } from './style/Button';
import { useGlobalContext } from './Context';
import Typical from 'react-typical';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Herosection = () => {
    // animation code 
    useEffect(() => {
        Aos.init({
            duration: 2000,
        })
    }, [])
    


    const { name, image,desc} = useGlobalContext();

    // Style CSS for HeroSection

    const Wrapper = styled.section`
    /* background-color: #212122; */
    background-color: #ebebeb;
    padding: 9rem 0;
    /* border: 5px solid red; */
    .section-hero-data{
        display: flex;
        flex-direction: column;
        justify-content: center;
        /* border: 5px solid cyan; */
    }
    .btn{
        max-width: 20rem;
    }
    .hero-top-data{
        text-transform: uppercase;
        font-size: 1.5rem;
        /* color: #fff; */
        color: black;
        font-weight: 300;
        /* background-color: green; */
    }
    .hero-top-data-subtittle{
        text-transform: uppercase;
        font-size: 2rem;
        /* color: #fff; */
        color: red;
        font-weight: 700;
        /* background-color: green; */
    }
    .hero-heading{
        text-transform: uppercase;
        font-size: 4rem;
        font-style: italic;
        
    }
    .hero-animation{
        font-size: 5rem;
        color: green;
        /* background-color: cornsilk; */
        border-bottom: 3px solid gainsboro;
        /* box-shadow: 5px 10px 30px 0px grey; */
    }
    .hero-para{
        margin-top: 1.5rem;
        margin-bottom: 3.4rem;
        max-width: 60rem;
        /* color: #fff; */
        color: black;
    }
    .hero-para2{
        margin-top: 1.5rem;
        margin-bottom: 3.4rem;
        max-width: 60rem;
        color: red;
    }
    .hireme-cv-btn{
        .cv-btn{
            margin-left: 2rem;
        }
    }
    .section-hero-img{
        display: flex;
        align-items: center;
        justify-content: center;
        /* border: 5px solid green; */
    }
    picture{
        text-align: center;
    }
    .hero-img{
        max-width: 50%;
        border-radius: 5% 35%;
    }

    @media (max-width: ${({ theme }) => theme.media.mobile}) {
        .grid {
            gap: 7rem;
        }
    }
    
    `;

    return (
        <Wrapper>
            <div className='container grid grid-two-column'>
                <div className='section-hero-data'>
                    <p className='hero-top-data'>Hello,</p>
                    <h1 className='hero-heading' data-aos="slide-right">{name}</h1>
                    <p className='hero-top-data-subtittle'>Online Extra- Curricular Courses</p>
                    <h2 data-aos="slide-left">
                        
                        <Typical className='hero-animation'
                        loop={Infinity}
                            steps={[
                            "Painting.",
                            1000,
                            "Self-defence.",
                            1000,
                            "Public Speaking.",
                            1000,
                            "Yoga.",
                            1000,
                            "Eassy Writing.",
                            1000,
                        ]}
                    />     
                    </h2>
                    <p className='hero-para'>
                        
                        {desc}

                    </p>
                    
                    <div className='hireme-cv-btn'>
                        <Button className='btn hireme-btn' data-aos="slide-right">
                            <NavLink to='/contact'>contact</NavLink>
                        </Button>
                        <a href='https://nayipehchaan.com/book-demo/'>
                            <Button className='btn cv-btn' data-aos="slide-left">Book Free Demo</Button>
                        </a>
                    </div>
                </div>

                <div className='section-hero-img'>
                    <picture>
                        <img src={image} alt='this is my pic' className='hero-img' data-aos="fade-down-left"></img>
                    </picture>
                </div>
            </div>
            {/* <hr></hr> */}
        </Wrapper>
    );
};

export default Herosection;
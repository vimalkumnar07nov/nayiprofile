import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { Button } from './style/Button';

const MyInfo = () => {

    const Wrapper = styled.section`
    background-color: #212122;
    padding: 9rem 0;
    .myinfo-heading{
        display: flex;
        justify-content: center;
        align-items: center;
        color: green;
    }
    .section-hero-data{
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    .btn{
        max-width: 16rem;
    }
    .hero-top-data{
        text-transform: uppercase;
        /* font-size: 1.5rem; */
    
    }
    .hero-heading{
        text-transform: uppercase;
        /* font-size: 6rem; */
    }
    .hero-para{
        color: #fff;
        margin-top: 1.5rem;
        margin-bottom: 3.4rem;
        max-width: 60rem;
    }
    .myinfo{
        font-size: 5rem;
        padding-bottom: 4rem;
        cursor: pointer;
        gap: 20px;
        /* background-color: red; */
        li{
            justify-content: center;
            align-items: center;
            text-decoration: none;
            text-transform: uppercase;
            border-bottom: 3px solid red;
            color: #fff;
            transition: all 0.2s;
            
            &:hover{
                color: grey;
                box-shadow: 5px 0px 30px -10px #fff;
                border-radius: 0.9rem;
                text-align: center;
            }
        }
        
    }
    
    .section-hero-img{
        display: flex;
        align-items: center;
        justify-content: center;
    }
    picture{
        text-align: center;
    }
    .hero-img{
        max-width: 40%;
    }

    
    `;
    return (
        <>
        <Wrapper>
            <h1 className='myinfo-heading'>My Info</h1>
            <div className='container grid grid-two-column'>
                <div className='section-hero-data'>
                    <h2 className='hero-top-data'>This is me</h2>
                        <h2 className='hero-heading'>Vimal kumar</h2>
                    <p className='hero-para'>
                        i am vimal kumar and ReactJs developer.
                        i am looking for job in frontend developer.
                    </p>
                    <ul className='myinfo'>
                        <li >my Bio</li>
                        <li>Graduation</li>
                        <li>Intermediate</li>
                        <li>Matriculation</li>
                    </ul>

                    <Button className='btn hireme-btn'>
                        <NavLink to='/contact'>Hire Me</NavLink>
                    </Button>
                </div>

                <div className='section-hero-img'>
                    <picture>
                        <img src='./images/logo.png' alt='this is my pic' className='hero-img'></img>
                    </picture>
                </div>
            </div>
            </Wrapper>
        </>
    );
    
};
export default MyInfo;
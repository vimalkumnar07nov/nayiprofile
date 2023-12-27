import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { Button } from '../style/Button';

const Error = () => {
    const Wrapper = styled.section`
    padding: 9rem 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .error-img{
        height: 24rem;
    }

    .btn{
        margin-top: 4rem;
    }
    `;
    return (
        <Wrapper>
            <h1>AP GALAT JAGAH AA GYE HAI.</h1>
            <p>PAGE NOT FOUND.</p>
            <img src='./images/error.svg' className='error-img' />
            <NavLink to='/' >
            <Button className='btn'>Go Back</Button>
            </NavLink>
        </Wrapper>
    );
};

export default Error;
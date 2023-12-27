import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import Clock from './Clock';
import Navbar from './Navbar';

const Header = () => {
const MainHeader = styled.header`
    padding: 0 4.8rem;
    /* border-bottom: 0.1px solid grey; */
    height: 5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* background-color: #1b1a1a; */
    background-color: #eae6ff4d;
    .logo{
        max-width: 200px;
        height: 40px;
    }
`;

    return (
        <MainHeader>
            
            <NavLink to="/">
                
                <img src='./images/NayiPehchaan.png' alt='logo' className='logo'/>
            </NavLink>
            
            <Clock />
{/* ---------------NavBar components----------------- */}
            <Navbar/>
        </MainHeader>
        
    );
};

export default Header;
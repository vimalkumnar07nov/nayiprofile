import React,{useEffect} from 'react';
import { useGlobalContext } from './Context';
import Herosection from './Herosection';

const About = () => {

    const { updateAbout } = useGlobalContext();
    useEffect(() => updateAbout(), []);

    return (
        <>
            <Herosection />
        </>
    );
};

export default About;
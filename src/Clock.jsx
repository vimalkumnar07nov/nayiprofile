import React, { useState } from 'react';
import styled from 'styled-components';

const Clock = () => {

    let date = new Date().toLocaleDateString();
    let time = new Date().toLocaleTimeString();
    const [currTime, setCurrTime] = useState(time);

    const upDateTime = () => {
        time = new Date().toLocaleTimeString();
        setCurrTime(time)
    }
    setInterval(upDateTime, 1000)
    
    

    return (
        <>
            <Wrapper>
                <h3 className='clock'>{date} @ {currTime}</h3>
                
            </Wrapper>    
        </>
    );
};

const Wrapper = styled.section`

/* background-color: green; */
.clock{
    color: #ff3f61d9;
    font-size: 1.5rem;
}
@media (max-width: ${({ theme }) => theme.media.mobile}){
   .clock{
        font-size: 1.5rem;
    }
}

`;

export default Clock;
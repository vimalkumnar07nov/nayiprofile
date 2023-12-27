import React, { useEffect } from 'react';
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { Button } from "./style/Button";
import Sdata from "../Sdata";
import Aos from 'aos';
import 'aos/dist/aos.css';

const Cards = () => {
  useEffect(() => {
    Aos.init({
     duration: 2000,
   })
  }, [])
  


    return (
      
      <Wrapper className="section">
            <h2 className="common-heading" data-aos="slide-right">My Arts📃</h2>
            <div className="container grid grid-three-column">
                {Sdata.map((curElem) => {
                    const { id, name, image, description } = curElem;
                    return (
                        <div key={id} className="card" data-aos="slide-up">
                            <figure>
                                <img src={image} alt={name} />
                            </figure>
                            <div className="card-data" data-aos="zoom-in">
                                <h3>{name}</h3>
                                <p className='skill-para'>{description}</p>
                                <NavLink to="/service">
                                    <Button className="btn">Read More</Button>
                                </NavLink>
                            </div>
                        </div>
                    );
                })}
            </div>
        </Wrapper>
    );
};

const Wrapper = styled.section`
  padding: 9rem 0;
  /* background-color: #1f1f1f; */
  background-color: #e1e1e1;
  .common-heading{
    color: black;
  }
  .container {
    max-width: 120rem;
  }

  .card {
    border: 0.3rem solid rgb(170 170 170 / 40%);
    .card-data {
      padding: 0 2rem;
    }

    h3 {
      margin: 2rem 0;
      font-weight: 300;
      font-size: 2.4rem;
      /* color: #fff; */
      color: black;
    }
    .skill-para{
      /* color: #fff; */
      color: #1f1f1f;
    }
    .btn {
      margin: 2rem auto;
      background-color: rgb(0 0 0 / 0%);
      border: 0.1rem solid rgb(98 84 243);
      display: flex;
      justify-content: center;
      align-items: center;
      color: rgb(98 84 243);
      font-size: 1.4rem;

      &:hover {
        background-color: rgb(98 84 243);
        color: #fff;
      }
    }
  }

  figure {
    width: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    transition: all 0.5s linear;
    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 0%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
      transition: all 0.2s linear;
      cursor: pointer;
    }
    &:hover::after {
      width: 100%;
    }
    &:hover img {
      transform: scale(1.2);
    }
    img {
      max-width: 90%;
      margin-top: 1.5rem;
      height: 20rem;
      transition: all 0.2s linear;
    }
  }
`;

export default Cards;
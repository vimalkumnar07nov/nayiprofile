import React,{useEffect} from 'react';
import styled from 'styled-components';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Contact = () => {

    useEffect(() => {
    Aos.init({
      duration: 3000,
    })
  }, [])

    const Wrapper = styled.section`
    padding: 9rem 0 5rem 0;
    /* background-color: #232323; */
    background-color: #fff;
    h1{
        color: black;
    }

    .container {
      margin-top: 6rem;
      text-align: center;

      .contact-form {
        max-width: 50rem;
        margin: auto;

        .contact-inputs {
          display: flex;
          flex-direction: column;
          gap: 3rem;

          input[type="submit"] {
            cursor: pointer;
            transition: all 0.2s;

            &:hover {
              background-color: #fff;
              border: 1px solid red;
              color: red;
              transform: scale(0.9);
            }
          }
        }
      }
    }
    `;
    
    return (
        <Wrapper>
            <h1 className="common-heading" data-aos="flip-left">Feel Free to Contact us</h1>

            {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d538.7851142740087!2d85.20866639421604!3d25.59081907148515!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed5f1bad29f6ff%3A0xca05f864398c7274!2sNarayan%20Niwas!5e0!3m2!1sen!2sin!4v1663754099395!5m2!1sen!2sin"
                width="100%"
                height="450"
                style={{border:0}}
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"></iframe> */}

            <div className="container" >
                <div className="contact-form">
                    <form
                        action="https://formspree.io/f/myyveqrj"
                        method="POST"
                        className="contact-inputs" data-aos="zoom-in">
                        <input
                            data-aos="slide-left"
                            type="text"
                            name="username"
                            placeholder="full name"
                            autoComplete="off"
                            required
                        />
                        <input
                            data-aos="slide-right"
                            type="email"
                            name="Email"
                            placeholder="Email"
                            autoComplete="off"
                            required
                        />
                        <input
                            data-aos="slide-left"
                            type="number"
                            name="username"
                            placeholder="Mobile No."
                            autoComplete="off"
                            required
                        />
                        <textarea
                            name="message"
                            cols="30"
                            rows="6"
                            placeholder="write your message"  
                            autoComplete="off"
                            required></textarea>

                        <input type="submit" value="send" />
                    </form>
                </div>
            </div>
        </Wrapper>
    );
};

export default Contact;
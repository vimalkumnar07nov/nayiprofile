import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;
    font-family: 'Poppins', sans-serif;

}
html{
    font-size: 62.5%;
    overflow-x: hidden;

}
body {
  overflow-x: hidden;
   scrollbar-color: rgb(98 84 243);
    scrollbar-width: thin;
}

${'' /* Scroll Bar style start */}

::-webkit-scrollbar {
  width: 1.5rem;
}
::-webkit-scrollbar-track {
   background-color: rgb(24 24 29);
}
::-webkit-scrollbar-thumb {
 
  background: cyan;
  border: 5px solid transparent;
  border-radius: 10px;
  background-clip: content-box;
}

${'' /* Scroll Bar style End */}

a{
    text-decoration: none;
}
li{
    list-style: none;
}
h1{
    color: #102c4fde;
    font-size: 6rem;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: 6rem;
}
h2{
    font-size: 5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: 5rem;
    color: #fff;
}
h3{
  font-size: 1.5rem;

}
p{
    opacity: 0.7;
    font-size: 1.65rem;
    line-height: 1.5;
    margin-top: 1rem;
}
.container{
    max-width: 120rem;
    margin: 0 auto;
}
.grid{
    display: grid;
    gap: 9rem;
}
.grid-two-column{
    grid-template-columns: repeat(2,1fr);
}
.grid-three-column{
    grid-template-columns: repeat(3,1fr);
}
.grid-four-column{
    grid-template-columns: 1fr 1.2fr .5fr .8fr;
}
    .common-heading {
      font-size: 3.8rem;
      font-weight: 600;
      margin-bottom: 6rem;
      text-transform: capitalize;
    }

    input, textarea{
    max-width: 50rem;
    color: black;
    padding: 1.6rem 2.4rem;
    border: 1px solid rgba(98, 84, 243, 0.5);
    text-transform: uppercase;
   box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
}
    input[type="submit"]{
    max-width: 16rem;
    margin-top: 2rem;
    background-color: rgb(98 84 243);
    color: #fff;
    padding: 1.4rem 2.2rem;
    border-style: solid;
    border-width: .1rem;
    text-transform: uppercase;
    font-size: 1.8rem;
    cursor: pointer;
    }

${'' /* MEDIA QUERY START HERE */}

//998px
@media (max-width:${({ theme }) => theme.media.tab}) {
      .container{
        padding: 0 3.2rem;
      }

        .grid-three-column {
      grid-template-columns: 1fr 1fr;
    }
}

@media (max-width:${({ theme }) => theme.media.mobile}) {

      html{
        font-size: 50%;
      }

      .grid{
        gap: 3.2rem;
      }

      .grid-two-column, .grid-three-column, .grid-four-column{
        grid-template-columns: 1fr;
      }
}




${'' /*--------------------- resume style */}
${'' /* .rate{
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  float: right;
} */}
span{
  font-size: 2.5rem;
  color: lightseagreen;
}

`;
import React, { useEffect } from 'react'
import styled from 'styled-components'
import 'aos/dist/aos.css'
import Aos from 'aos'

const ParMod = styled.section`
    height: 600px;
    background-image: url(../imagens/paraiso.jpg);
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
    position: relative;
    color: #fff;
    text-align: center;

    > .interface{
        width: 50%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        z-index: 2;
        position: relative;
        font-family: "Poppins", sans-serif;
    }

    > .overlay{
        position: absolute;
        top: 0;
        left: 0;
        background-color: #000000dc;
        width: 100%;
        height: 100%;
        z-index: 1;
    }

    h3{
        font-size: 3em;
        line-height: 50px;
        font-weight: 200;
    }

    span{
        display: block;
        font-weight: 700;
    }

    p{
        margin: 20px 0;
        font-size: 20px;
        font-weight: 300;
    }

    button{
        width: 250px;
        height: 60px;
        font-family: "Poppins", sans-serif; 
        font-size: 20px;
        font-weight: 600;
        background-color: transparent;
        color: #fff;
        border: 1px solid #fff;
        border-radius: 10px;
        cursor: pointer;
        transition: .5s;
    }

    button:hover{
        background-color: #fff;
        color: #000;   
    }

    @media screen and (max-width: 650px){
        .interface{
            padding: 20px 10px;
            width: 100%;
        }

        h3{
            font-size: 2.5em;
        }

        p{
            font-size: 16px;
        }
    }
`

const Paraiso = () => {

    useEffect(() => {
        Aos.init({
            duration: 2500,
            once: false,
        });
    },[]);

  return (
    <ParMod>
        <div data-aos="fade-down" className="interface">
            <h3>Hospedagens? <span>Deixa com a gente</span></h3>
            <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                Eaque modi sed perspiciatis ab! Sequi repellendus ullam, 
                commodi laborum nesciunt sit totam. Officia, fugit! Quibusdam 
                deleniti facere reprehenderit fugit dolorum. Eum.
            </p>
            <a href='#'>
                <button>Conheça os hotéis!</button>
            </a>
        </div>

        <div className="overlay"></div>

    </ParMod>
  )
}

export default Paraiso

import React from 'react'
import styled from 'styled-components'

const InterMod = styled.div`
    height: 98vh;
    background-image: linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.5)), url(../imagens/hero.png);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;

    .interface{
        display: flex;
        align-items: center;
        height: 100%;
        color: #fff;
    }
    
    .txt-hero h1{
        font-size: 3.8em;
        line-height: 70px;
        font-weight: 200;
        font-style: normal;
    }

    .txt-hero h1 span{
        display: block;
        font-weight: 800;
        font-style: italic;
    }

    .txt-hero p{
        font-size: 20px;
        font-weight: 300;
        margin: 20px 0;
    }

    .txt-hero p span{
        display: block;
    }

    button{
        width: 220px;
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

    @media screen and (max-width: 700px){
        .interface{
            width: 100%;
            padding: 20px;
        }

        .txt-hero h1{
            font-size: 3.0em;
            line-height: 50px;
        }

        .txt-hero h1 span{
            display: block;
            font-weight: 800;
            font-style: italic;
        }

        .txt-hero p{
            font-size: 18px;
            font-weight: 300;
            margin: 20px 0;
        }
    }
`

const HeroSite = () => {
  return (
    <InterMod>
        <div className="interface">
            <div className="txt-hero">
                <h1>Transforme sonhos <span>em destinos</span></h1>
                <p>
                    Encontre destinos que ficarão para sempre em sua 
                    memória <span>com um orçamento que cabe no seu bolso</span>
                </p>
                <a href='#'>
                    <button>
                        Quero Conhecer
                    </button>
                </a>
            </div>     
        </div>
            
    </InterMod>
  )
}

export default HeroSite

import React from 'react'
import { FaLinkedin, FaGithub, FaRegUser } from "react-icons/fa";
import styled from 'styled-components'

const RodaMod = styled.footer`
    background-color: #021f75;
    width: 100%;
    text-align: center;
    padding: 30px 0;
    color: #fff;

    .top-footer button{
        width: 60px;
        height: 60px;
        border-radius: 50%;
        border: 2px solid #efff0f;
        background-color: transparent;
        color: #efff0f;
        font-size: 24px;
        transition: .5s;
        cursor: pointer;
        margin: 0 10px;
    }

    .top-footer button:hover{
        background-color: #efff0f;
        color: #021f75;
    }

    .middle-footer{
        margin: 20px 0;
    }

    .middle-footer a{
        color: #efff0f;
        margin: 0 15px;
    }

    .bottom-footer{
        border-top: 2px solid #efff0f;
        width: 70%;
    }

    .bottom-footer p{
        color: #efff0f;
        margin-top: 10px;
        font-weight: 300;
        font-size: 18px;
    }

    .bottom-footer p span{
        font-weight: 600;
    }
`

const Rodape = () => {
  return (
    <RodaMod>
        <div className="interface">
            <section className="top-footer">
                <a href='https://www.linkedin.com/in/henrique-madruga-gonçalves-044a072aa'><button><FaLinkedin/></button></a>
                <a href='https://github.com/henriquemgoncalves'><button><FaGithub/></button></a>
                <a href='https://cursos.alura.com.br/emprega-one/profile/88dev-hg'><button><FaRegUser/></button></a>
            </section>

            <section className="middle-footer">
                <a href='#'>Suporte</a>
                <a href='#'>Informações</a>
                <a href='#'>Marketing</a>
            </section>

            <section className="bottom-footer">
                <p>Viajar 2024 &copy; - Desenvolvido por <span>Henrique</span></p>
            </section>
        </div>

    </RodaMod>
  )
}

export default Rodape

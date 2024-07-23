import React from 'react'
import styled from 'styled-components'
import { FaLinkedin, FaGithub, FaRegUser } from "react-icons/fa";

const ContMod = styled.section`
    background-color: #fff;
    padding: 80px 0 80px 100px;
    width: 100%;

    .txt-contato, 
    .btn-contato{
        display: inline-block;
        width: 50%;
        margin-right: -4px;
        vertical-align: middle;
    }

    h3{
        font-size: 2.5em;
        line-height: 50px;
        font-weight: 300;
        margin-bottom: 20px;
    }

    span{
        display: block;
        font-weight: 700;
    }

    a{
        text-decoration: none;
    }

    button{
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 50%;
        height: 60px;
        margin: 0 auto 20px auto;
        background-color: transparent;
        border-radius: 5px;
        cursor: pointer;
        transition: .5s;
    }

    button:hover{
        background-color: #000;
        color: #fff;
    }

    button p{
        font-family: "Poppins", sans-serif;
        font-weight: 400;
        font-size: 15px;
    }

    @media screen and (max-width: 510px){
        padding: 80px 40px;

        .interface{
            display: flex;
            flex-direction: column;
            justify-content: center;
            gap: 20px;
        }

        .txt-contato, 
        .btn-contato{
            width: 100%;
            align-items: center;
        }

        h3{
        font-size: 2.0em;
        margin-bottom: 20px
    }
    }
`

const Contato = () => {
  return (
    <ContMod>
        <div className="interface">
            <article className="txt-contato">
                <h3>
                    Fale agora com <span>nossa equipe</span>
                </h3>
                <p>E solicite orçamento que cabe no seu bolso</p>
            </article>

            <article className="btn-contato">
                <a href='https://www.linkedin.com/in/henrique-madruga-gonçalves-044a072aa'>
                    <button><FaLinkedin style={{width:"20px", height:"20px"}}/><p>LinkedIn</p></button>
                </a>
                <a href='https://github.com/henriquemgoncalves'>
                    <button><FaGithub style={{width:"20px", height:"20px"}}/><p>GitHub</p></button>
                </a>
                <a href='https://cursos.alura.com.br/emprega-one/profile/88dev-hg'>
                    <button><FaRegUser style={{width:"20px", height:"20px"}}/><p>Perfil ONE</p></button>
                </a>
            </article>
        </div>
    </ContMod>
  )
}

export default Contato

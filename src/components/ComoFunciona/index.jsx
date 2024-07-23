import React from 'react'
import styled from 'styled-components'

const FuncMod = styled.section`
    background-color: #e3e3e3;
    padding: 80px 0 80px 100px;
    width: 100%;

    .interface{
        width: 90%;
    }

    .txt-funciona,
    .instrucoes{
        display: inline-block;
        width: 50%;
        margin-right: -4px;
        vertical-align: top;
    }

    .txt-funciona{
        position: sticky;
        top: 40%;
    }

    h3{
        font-size:3em;
        line-height: 60px;
        font-weight: 300;
    }

    h3 span{
        display: block;
        font-weight: 700;
    }

    .instru-box{
        display: flex;
        align-items: center;
        gap: 30px;
        margin-bottom: 40px;
        border: 2px solid #021f75;
        border-radius: 5px;
        padding: 20px;
    }

    h4{
        font-size: 1.5em;
        font-weight: 300;
        margin-bottom: 10px;
    }

    h4 span{
        font-weight: 800;
    }

    p{
        line-height: 20px;
    }

    img{
        width: 100px;
        height: 100px;
    }

    @media screen and (max-width: 720px){
        padding: 80px 0;

        h3{
            font-size: 2.0rem;
        }

        .instru-box{
            display: flex;
            flex-direction: column;
        }
        
        @media screen and (max-width: 400px){
            h3{
                font-size: 28px;
            }
        }
    }
`

const ComoFunciona = () => {
  return (
    <FuncMod>
        <div className="interface">
            <div className="txt-funciona">
                <h3>Como <span>funciona?</span></h3>
            </div>

            <div className="instrucoes">
                <article className="instru-box">
                    <div className="img-instru">
                        <img src='../imagens/atendimento.png' alt=''/>
                    </div>
                    <div className="txt-box">
                        <h4><span>Você </span>fala com a gente</h4>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Vitae eius, maxime distinctio saepe excepturi ullam repudiandae 
                            sint itaque hic quasi officiis! Debitis.
                        </p>
                    </div>
                </article>

                <article className="instru-box">
                    <div className="img-instru">
                        <img src='../imagens/planejar.png' alt=''/>
                    </div>
                    <div className="txt-box">
                        <h4><span>A gente</span> planeja</h4>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Vitae eius, maxime distinctio saepe excepturi ullam repudiandae 
                            sint itaque hic quasi officiis! Debitis.
                        </p>
                    </div>
                </article>

                <article className="instru-box">
                    <div className="img-instru">
                        <img src='../imagens/viajar.png' alt=''/>
                    </div>
                    <div className="txt-box">
                        <h4><span>Partiu </span>viajar</h4>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Vitae eius, maxime distinctio saepe excepturi ullam repudiandae 
                            sint itaque hic quasi officiis! Debitis.
                        </p>
                    </div>
                </article>
            </div>
        </div>
    </FuncMod>
  )
}

export default ComoFunciona

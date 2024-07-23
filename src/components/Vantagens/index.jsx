import React, { useEffect } from 'react'
import styled from 'styled-components'
import 'aos/dist/aos.css'
import Aos from 'aos'

const VantMod = styled.section`
    background-color: #e3e3e3;
    padding: 80px 120px;

    .itens-container,
    .itens-containe-1{
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 10%;
        margin-bottom: 60px;
    }

    .txt-itens h3{
        font-size: 2.5em;
        line-height: 50px;
        margin-bottom: 20px;
    }

    img{
        width: 480px;
        height: 330px;
        border-radius: 20px;
        box-shadow: 5px 5px #021f75;
    }

    span{
        font-weight: 300;
    }

    @media screen and (max-width: 950px){
        padding: 80px 50px;

        .itens-container{
            display: flex;
            flex-direction: column;
            gap: 20px;
            margin-bottom: 50px;
        }

        .itens-containe-1{
            display: flex;
            flex-direction: column-reverse;
            gap: 20px;
        }
    }

    @media screen and (max-width: 950px){
        img{
            width: 100%;
            height: auto;
        }
    }

`

const Vantagens = () => {
    
    useEffect(() => {
        Aos.init({
            duration: 2500,
            once: false,
        });
    },[]);

  return (
    <VantMod>
        <div className='interface'>
            <article className='itens-container'>
                <div className='txt-itens'>
                    <h3><span>Viaje</span> com<br/> conforto</h3>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                        Modi, dolorem explicabo! Minus distinctio animi officia 
                        provident, culpa, aut reiciendis quisquam debitis reprehenderit, 
                        placeat harum id impedit sequi voluptates dolor odio.
                    </p>
                </div>
                <div data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="5000" className="img-itens">
                    <img src='../imagens/conforto.jpg' alt=''/>
                </div>
            </article>

            <article className='itens-containe-1'>
                <div data-aos="flip-right" data-aos-easing="ease-out-cubic" data-aos-duration="5000" className="img-itens">
                    <img src='../imagens/destinos.jpeg' alt=''/>
                </div>

                <div className='txt-itens'>
                    <h3><span>Os</span> melhores<br/>destinos</h3>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                        Modi, dolorem explicabo! Minus distinctio animi officia 
                        provident, culpa, aut reiciendis quisquam debitis reprehenderit, 
                        placeat harum id impedit sequi voluptates dolor odio.
                    </p>
                </div>
                
            </article>

            <article className='itens-container'>
                <div className='txt-itens'>
                    <h3><span>Os</span> melhores<br/>hotéis</h3>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                        Modi, dolorem explicabo! Minus distinctio animi officia 
                        provident, culpa, aut reiciendis quisquam debitis reprehenderit, 
                        placeat harum id impedit sequi voluptates dolor odio.
                    </p>
                </div>
                <div data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="5000" className="img-itens">
                    <img src='../imagens/hoteis.jpg' alt=''/>
                </div>
            </article>
        </div>
    </VantMod>
  )
}

export default Vantagens

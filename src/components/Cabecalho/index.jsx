import React, { useState } from 'react'
import styled from 'styled-components'
import logo from './logo.png'
import { HiMenu } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";

const HeaderMod = styled.header`
    width: 100%;
    padding: 20px 0;
    position: fixed;
    top: 0;
    left: 0;
    background-color: ${props => (props.scrolled ? '#021f75' : 'transparent')};
    z-index: 5;
    transition: .5s ease;

    .mobile-menu-icon{
        display: none;
    }

    .mobile-menu{
        display: none;
        transition: max-height 0.5s ease;
    }

    @media screen and (max-width: 900px){
        background-color: #021f75;
        
        .menu-desktop{
            display: none;           
        }

        .btn-contato button{
            display: none;
        }

        .mobile-menu-icon{
            display: block; 
        }

        .mobile-menu-icon button{
            background-color: transparent;
            border: none;
            cursor: pointer;
        }

        .mobile-menu ul{
            background-color: #021f75a9;
            display: flex;
            flex-direction: column;
            text-align: center;
            padding-bottom: 1rem;          
        }

        .navItem{
            display: block;
            padding-top: 1rem;
        }

        .btn-mobile{
            display: block;
            padding: 1rem 2rem;
        }

        .btn-mobile button{
            width: 100%;
            height: 40px;
            font-family: "Poppins", sans-serif; 
            font-size: 16px;
            background-color: transparent;
            color: #efff0f;
            border: 1px solid #efff0f;
            border-radius: 10px;
            cursor: pointer;
            transition: .5s;
        }

        .btn-mobile button:hover{
            background-color: #fff;
            color: #000;
            font-weight: 300;
        }

        .navItem a{
            text-decoration: none;
            color: #efff0f;
            font-size: 18px;
            font-weight: 700;
        }

        .navItem a:hover{
            background-color: #011653;
            padding: 0 30px;
            border-radius: 20px;
        }

        .open{
            display: block;
            
        }
    }
`

const InterfaceMod = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;


    .menu-desktop nav ul li{
        list-style-type: none;
        display: inline-block;
        margin: 0 40px;
    }

    .menu-desktop nav ul li a{
        text-decoration: none;
        color: #efff0f;
        display: inline-block;
        font-weight: 300;
        transition: .5s;
        font-size: 18px;
    }

    .menu-desktop nav ul li a:hover{
        transform: scale(1.1);
    }

    .btn-contato button{
        width: 140px;
        height: 40px;
        font-family: "Poppins", sans-serif; 
        font-size: 16px;
        background-color: transparent;
        color: #efff0f;
        border: 1px solid #efff0f;
        border-radius: 10px;
        cursor: pointer;
        transition: .5s;
    }

    .btn-contato button:hover{
        background-color: #fff;
        color: #000;
        font-weight: 300;
        
    }
`

const Cabecalho = ({scrolled}) => {

    const [menuOpen, setMenuOpen] = useState(false);
    
    const menuShow = () => {
        setMenuOpen(!menuOpen)
    }

  return (
    <HeaderMod scrolled={scrolled}>
        <InterfaceMod>
            <img src={logo} alt='' 
                style={{
                    width:"50px", 
                    height:"50px"
                }}
            />

            <section className='menu-desktop'>
                <nav>
                    <ul>
                        <li><a href='#'>Início</a></li>
                        <li><a href='#'>Destinos</a></li>
                        <li><a href='#'>Hotéis</a></li>
                        <li><a href='#'>Passagens</a></li>
                    </ul>
                </nav>
            </section>

            <section className='btn-contato'>
                <a href='#'>
                    <button>Contato</button>
                </a>
            </section>

            <div className="mobile-menu-icon">
                <button onClick={menuShow}>
                    {menuOpen ? <IoMdClose style={{
                                                width:"40px",
                                                height:"40px",
                                                color:"#efff0f"
                                                }}
                                            /> 
                                    : 
                                <HiMenu style={{
                                            width:"40px",
                                            height:"40px",
                                            color:"#efff0f"
                                            }}
                                        />}
                </button>             
            </div>
        </InterfaceMod>

        <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
            <ul>
                <li className='navItem'><a href='#'>Início</a></li>
                <li className='navItem'><a href='#'>Destinos</a></li>
                <li className='navItem'><a href='#'>Hotéis</a></li>
                <li className='navItem'><a href='#'>Passagens</a></li>
            </ul>
            
            <div className='btn-mobile'>
                <button>Contato</button>
            </div> 
        </div>   
    </HeaderMod>
  )
}

export default Cabecalho
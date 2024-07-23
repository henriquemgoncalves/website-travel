import React, { useEffect, useState } from 'react'
import Cabecalho from '../Cabecalho';

const NavBar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY;

            if(offset > 0) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return() => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

  return (
    <Cabecalho scrolled={scrolled} />
  )
}

export default NavBar

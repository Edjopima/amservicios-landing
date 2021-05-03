import React from 'react';
import StyledContact from './StyledContact';
import {useSpring, animated} from 'react-spring';

const Contact = () => {
    const props = useSpring({ to: { opacity: 1 }, from: { opacity: 0 }, delay: 200 })

    return (
        <animated.div style={props}>
        <StyledContact>
            <h1 className='Contact-title'>Contactanos</h1>
            <div className='Contact-content'>
                <div className='Contact-contentContainer'>
                    <div className='Contact-textBox'>
                        <h1 className='Contact-subTitle'>Direccion</h1>
                        <span>Calle Camoruco con Calle Guasdualito </span>
                        <br></br>
                        <span>Casa s/n Sector Casco Central</span>
                        <br></br>
                        <span>Ciudad Ojeda - Zulia.</span>
                        <br></br>
                    </div>
                    <div className='Contact-textBox'>
                        <h1 className='Contact-subTitle'>Numeros de Contacto</h1>
                        <p>(+58) 414-9611463</p>
                        <p>(+58) 412-3060626</p>
                    </div>
                </div>
                <div className='Contact-separator'></div>
                <div className='Contact-contentContainer'>
                    <div className='Contact-textBox'>
                    <h1 className='Contact-subTitle'>Redes Sociales</h1>
                    </div>
                    <div className='Contact-textBox'>
                        <h1 className='Contact-subTitle'>Correo Electronico</h1>
                        <p>amservicios01@gmail.com</p>
                    </div>
                </div>
            </div>
        </StyledContact>
        </animated.div>
    );
}

export default Contact;
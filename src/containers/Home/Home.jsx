import React from 'react';
import StyledButton from '../../components/Button/StyledButton'
import StyledHome from './StyledHome';
import {useSpring, animated} from 'react-spring';
import { useHistory } from 'react-router-dom';
import image from '../../Images/image.jpg'
import logo from '../../Images/logo.jfif'


const Home = () => {
  const history = useHistory();
  const changeRoute = (route) => {
    history.push(`/${route}`);
  }
  const props = useSpring({ to: { opacity: 1 }, from: { opacity: 0 }, delay: 200 })
  return (
    <animated.div style={props}>
    <StyledHome>
      <div className='Home-left'>
        <img src={logo} alt='A&M SERVICIOS C.A' style={{width:'200px',height:'150px', marginTop:'20px'}}/>
        <h1>A&M SERVICIOS C.A</h1>
        <p>Somos una empresa que nace con el propósito de ofrecer un alto 
        nivel profesional en la prestación de servicios múltiples, en el área 
        de buceo Industrial, conexiones, transporte lacustre, transporte terrestre, obras civiles y servicios en general, adicionalmente ofrecer al 
        mercado los mejores equipos, instrumentos e insumos, para todo lo 
        relacionado al buceo industrial, comprometidos a ser líderes de la 
        tecnología en nuestro ramo, a fines de proveer al cliente la mejor 
        calidad y el mejor servicio.</p>
        <div className='Home-buttonContainer'>
          <StyledButton onClick={()=>changeRoute('about')}>
            <span className='btn1'><span>¿Quienes Somos?</span></span>
          </StyledButton>
          <StyledButton onClick={()=>changeRoute('contact')}>
            <span className='btn2'><span>Contactanos</span></span>
          </StyledButton>
        </div>
      </div>
      <div className='Home-right'>
      <img src={image} alt='' style={{width:'100%',height:'100%'}}/>
      </div>
    </StyledHome>
    </animated.div>

  );
}

export default Home;
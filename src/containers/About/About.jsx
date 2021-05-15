import React from 'react';
import StyledAbout from './StyledAbout';
import {useSpring, animated} from 'react-spring';
import logo from '../../Images/logo.jfif'
import image from '../../Images/image.jpg'

const About = () => {
  const props = useSpring({ to: { opacity: 1 }, from: { opacity: 0 }, delay: 200 })

  return (
    <animated.div style={props}>
      <StyledAbout backgroundImage={image}>
        <div className='About-container'>
          <div className = 'About-contentBox'>
            <img src={logo} alt='A&M SERVICIOS C.A' className='Logo'/>
            <h1 className = 'About-title'>A&M SERVICIOS C.A</h1>
          </div>
          <div className='About-textContainer'>
          <div className = 'About-textBox'>
            <h1 className = 'About-subTitle'>Mision</h1>
            <p>Mantenerse como empresa de servicios 
            integrados de alta calidad para la industria 
            con una alta rentabilidad y competitividad 
            en las operaciones, para brindar un 
            excelente servicio cumpliendo a cabalidad 
            con los estándares establecidos por 
            nuestros clientes, entes gubernamentales y 
            públicos, garantizando la seguridad, integridad y bienestar a nuestros trabajadores y 
            el medio ambiente.</p>
          </div>
          <div className = 'About-textBox'>
            <h1 className = 'About-subTitle'>Vision</h1>
            <p>Ser una organización modelo de avanzada 
            en función de contribuir a mejorar el proceso 
            de transformación en lo relacionado a las 
            actividades submarinas de la industria petrolera, con sólido prestigio, confianza y credibilidad, en virtud de su gestión transparente, 
            sus elevados niveles de productividad, el 
            profesionalismo, el sentido de compromiso de 
            sus recursos humanos, el deber moral, la 
            alta calidad, la atención y el respeto a las 
            normativas que nos rigen. </p>
          </div>
          </div>
          <div className='About-textContainer'>
            <h1 className = 'About-title'>Servicios</h1>
            <div className='About-itemBox'>Servicio de alquiler de lancha de buceo industrial.</div>
            <div className='About-itemBox'>Servicio integral de alquiler de lancha de conexiones.</div>
            <div className='About-itemBox'>Servicio integral de alquiler de lancha de transporte de pasajeros.</div>
            <div className='About-itemBox'>Reparación y Mantenimiento de Unidades Lacustres.</div>
            <div className='About-itemBox'>Servicio de mantenimiento a equipos de buceo.</div>
            <div className='About-itemBox'>Suministro de equipos, instrumentos e insumos de buceo</div>
          </div>
          <div className='About-textContainer'>
            <h1 className = 'About-title'>Nuestros Valores</h1>
            <div className = 'About-textBox'>
              <h1 className = 'About-subtitle'>Puntualidad</h1>
              <p>Somos conocedores de la exactitud 
              de las operaciones marítimas donde 
              el valor del tiempo toma una 
              posición importante, es por eso que 
              nuestra planeación operacional 
              cuenta con una diversidad de controles y equipos que facilitan este 
              aspecto, pues una nave necesita 
              suplir su necesidad justo a tiempo.</p>
            </div>
            <div className = 'About-textBox'>
              <h1 className = 'About-subtitle'>Calidad</h1>
              <p>Contamos con una vasta experiencia en todas las actividades 
              maritimas y portuarias, aspecto 
              que nos grarantiza conocer con 
              alto detalle de las necesidades 
              y exigencias de los diferentes 
              sistemas de abordo, las cuales 
              supliremos con proveedores de 
              bienes y servicios certificados, 
              aspecto que unido a nuestros 
              parametros y controles de calidad darán como resultado un 
              excelente servicio.</p>
            </div>
            <div className = 'About-textBox'>
              <h1 className = 'About-subtitle'>Protección</h1>
              <p>La experiencia adquirida durante los 
              largos años de trabajo aportando al 
              desarrollo maritimo de la región, 
              nos da la solidez para conocer el 
              espectro de amenazas en el esquema de protección maritimo y portuario de la region, nos da la solidez 
              para conocer el espectro de 
              amenazas en el esquema de protección maritimo y portuario de la 
              región y como estas, influyen en 
              las vulnerabilidades reinantes, 
              aspecto que nos permite implementar medidas de mitigación contundentes, contra los principales 
              flagelos que afectan.</p>
            </div>
            <div className = 'About-textBox'>
              <h1 className = 'About-subtitle'>Ahorro</h1>
              <p>Los análisis de mercado realizados, asi como el conocimiento 
              historico de la región y sus 
              empresas, soportan la toma de 
              decisiones acertadas. En la 
              relación calidad-precio, seleccionando el proveedor con las 
              mejores condiciones.</p>
            </div>
            <div className = 'About-textBox'>
              <h1 className = 'About-subtitle'>Seguridad</h1>
              <p>Contamos con un sistema de 
              gestión de seguridad estructurado 
              con muchos aspectos contenidos en 
              la ley mercante de puertos, lo que 
              nos arroja que el desarrollo de 
              tareas se hará con amplio conocimiento maritimo y portuario, asi 
              como los riesgos asociados de 
              estas actividades.</p>
            </div>
          </div>
        </div>
      </StyledAbout>
    </animated.div>
  );
}

export default About;
import React from 'react';
import StyledAbout from './StyledAbout';

const About = () => {
  return (
    <StyledAbout>
      <div className = 'About-textBox quienes-somos'>
        <h1 className = 'About-title'>¿Quienes somos?</h1>
        <p>Somos una empresa que nace con el propósito de ofrecer un alto 
        nivel profesional en la prestación de servicios múltiples, en el área 
        de buceo Industrial, conexiones, transporte lacustre, transporte terrestre, obras civiles y servicios en general, adicionalmente ofrecer al 
        mercado los mejores equipos, instrumentos e insumos, para todo lo 
        relacionado al buceo industrial, comprometidos a ser líderes de la 
        tecnología en nuestro ramo, a fines de proveer al cliente la mejor 
        calidad y el mejor servicio.</p>
      </div>
      <div className = 'About-galery galeria-1'>
        <div className='img'></div>
        <div className='img'></div>
        <div className='img'></div>
        <div className='img'></div>
      </div>
      <div className = 'About-textBox Mision'>
        <h1 className = 'About-title'>Mision</h1>
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
      <div className = 'About-textBox vision'>
        <h1 className = 'About-title'>Vision</h1>
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
      <div className = 'About-galery Galeria-2'>
        <div className='img'></div>
        <div className='img'></div>
        <div className='img'></div>
        <div className='img'></div>
      </div>
      <div className='About-textContainer Valores'>
        <h1 className = 'About-title valores-title'>Nuestros Valores</h1>
        <div className = 'About-textBox valor1'>
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
        <div className = 'About-textBox valor2'>
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
        <div className = 'About-textBox valor3'>
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
        <div className = 'About-textBox valor4'>
          <h1 className = 'About-subtitle'>Ahorro</h1>
          <p>Los análisis de mercado realizados, asi como el conocimiento 
          historico de la región y sus 
          empresas, soportan la toma de 
          decisiones acertadas. En la 
          relación calidad-precio, seleccionando el proveedor con las 
          mejores condiciones.</p>
        </div>
        <div className = 'About-textBox valor5'>
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
    </StyledAbout>
  );
}

export default About;
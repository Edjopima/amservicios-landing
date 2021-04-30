import React from 'react';
import StyledButton from '../../components/Button/StyledButton'
import StyledHome from './StyledHome';

const Home = () => {
  return (
    <StyledHome>
      <div className='Home-left'>
        <h1>A&M SERVICIOS C.A</h1>
        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
        <div className='Home-buttonContainer'>
          <StyledButton>
            <span className='btn1'><span>¿Quienes Somos?</span></span>
          </StyledButton>
          <StyledButton>
            <span className='btn2'><span>Contactanos</span></span>
          </StyledButton>
        </div>
      </div>
      <div className='Home-right'>
      </div>
    </StyledHome>
  );
}

export default Home;
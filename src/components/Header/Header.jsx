import React from 'react';
import StyledHeader from './StyledHeader';
import { useHistory } from "react-router-dom";

const Header = () => {
  const history = useHistory();
  const changeRoute = (route) => {
    history.push(`/${route}`);
  }

  return (
    <StyledHeader>
      <div className='Header-logo'>
        <p onClick={()=>{changeRoute('home')}}>A&M SERVICIOS C.A</p>
      </div>
      <div className='Header-options'>
      <p onClick={()=>{changeRoute('about')}}>¿QUINES SOMOS?</p>
        <p onClick={()=>{changeRoute('contact')}}>CONTACTANOS</p>
      </div>
    </StyledHeader>
  );
}

export default Header;
import React from 'react';
import StyledHeader from './StyledHeader';
import { useHistory } from "react-router-dom";
import Burger from './Burger';

const Header = () => {
  const history = useHistory();
  const changeRoute = (route) => {
    history.push(`/${route}`);
  }

  return (
    <StyledHeader>
      <div className='Header-logo'>
        <p onClick={()=>{changeRoute('')}}>A&M SERVICIOS C.A</p>
      </div>
      <Burger />
    </StyledHeader>
  );
}

export default Header;

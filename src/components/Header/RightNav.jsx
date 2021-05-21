import React from 'react';
import styled from 'styled-components';
import { useHistory } from "react-router-dom";

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  li {
    padding: 18px 10px;
  }
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: rgba(0, 51, 153,0.9);
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 200px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    li {
      color: #f1f1f1;
      cursor: pointer;
    }
  }
`;

const RightNav = ({ open }) => {
  const history = useHistory();
  const changeRoute = (route) => {
    history.push(`/${route}`);
  }
  return (
    <Ul open={open}>
      <li onClick={()=>{changeRoute('about')}}>¿QUIÉNES SOMOS?</li>
      <li onClick={()=>{changeRoute('documents')}}>SOLVENCIAS</li>
      <li onClick={()=>{changeRoute('contact')}}>CONTACTANOS</li>
    </Ul>
  )
}

export default RightNav
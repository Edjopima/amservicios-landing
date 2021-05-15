import React from 'react';
import styled from 'styled-components'

const StyledFooter = styled.div`
    font-size:0.8em;
    color:#212449;
    margin:0;
    margin-bottom:10px;
    padding:0;
    padding-top:2px;
    text-align:center;
    border-top:1px solid rgba(33, 36, 73, 0.3);
    @media screen and (max-width: 500px) {
        padding:0;
    }
`;

const Footer = () => {
    return (
        <StyledFooter>
            A&M Servicios C.A 2021. Todos los derechos reservados
        </StyledFooter>
    );
}

export default Footer;

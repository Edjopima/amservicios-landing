import styled from 'styled-components';

const StyledAbout = styled.div`
  color:#212449;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  gap: 0px 0px;
  grid-template-areas:
    "quienes-somos quienes-somos"
    "galeria-1 galeria-1"
    "Mision vision"
    "Galeria-2 Galeria-2"
    "Valores Valores";

  .quienes-somos { grid-area: quienes-somos; }
  .galeria-1 { grid-area: galeria-1; }
  .Mision { grid-area: Mision; }
  .vision { grid-area: vision; }
  .Galeria-2 { grid-area: Galeria-2; }
  .Valores { grid-area: Valores; }

  .About-textBox {
    padding: 20px 60px;
    text-align:center;
    font-size: 18px;
  }
  .About-title {
    text-align: center;
    font-size:2.5rem;
  }
  .About-subtitle {
    text-align: center;
    font-size:2rem;
  }
  .About-galery {
    display: flex;
    flex-direction:row;
    justify-content: space-around;
  }
  .img {
    height:200px;
    width:200px;
    background-color:lightgray;
  }
  .About-textContainer{
    /* display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    gap: 0px 0px;
    grid-template-areas:
      "valores-title valores-title valores-title"
      "valor1 valor2 valor3"
      "valor4 valor5 .";
    .valores-title { grid-area: valores-title; }
    .valor1 { grid-area: valor1; }
    .valor2 { grid-area: valor2; }
    .valor3 { grid-area: valor3; }
    .valor4 { grid-area: valor4; }
    .valor5 { grid-area: valor5; } */
    width:100%;
    display:flex;
    flex-direction:row;
    flex-wrap:wrap;
    justify-content:center;
    align-items:center;
  }
  .About-textContainer .About-title {
    width:100%;
  }
  .About-textContainer .About-textBox {
    padding:0;
    width:40%;
    margin: 0 60px;
  }
`;

export default StyledAbout;
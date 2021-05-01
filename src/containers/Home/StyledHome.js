import styled from 'styled-components'

const StyledHome = styled.div`
  display:flex;
  flex-direction:row;
  justify-content:center;
  align-items:center;
  color:#212449;
  p{
    text-align:justify;
    width:80%;
  }
  h1 {
    font-size:3em;
  }
  .Home-left {
    width:50%;
    padding-left:40px;
  }
  .Home-right {
    width:50%;
    background-color:lightgray;
    height: 90vh;
  }
  .Home-buttonContainer {
    display:flex;
    flex-direction:row;
  }
`;

export default StyledHome;
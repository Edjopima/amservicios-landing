import styled from 'styled-components'

const StyledHome = styled.div`
  background-image:url(${props=>props.backgroundImage});
  display:flex;
  flex-direction:row;
  justify-content:center;
  align-items:center;
  color:#212449;
  .Logo{
      width:200px;
      height:150px;
      margin-top:20px;
    }
  p{
    text-align:center;
    width:80%;
  }
  h1 {
    font-size:3em;
  }
  .Home-left {
      display:flex;
      padding:0;
      padding-top:4vh;
      flex-direction:column;
      justify-content:center;
      align-items:center;
      background-color: rgb(255,255,255,0.9);
      width:100%;
      height:85vh;
      text-align:center;
    }
  .Home-buttonContainer {
    display:flex;
    flex-direction:row;
  }
  @media screen and (max-width: 600px) {
    /* background-image:url(${props=>props.backgroundImage});
    .Home-right{display:none}
    .Home-left {
      padding:0;
      padding-top:4vh;
      flex-direction:column;
      justify-content:center;
      align-items:center;
      background-color: rgb(255,255,255,0.8);
      width:100%;
      height:85vh;
      text-align:center;
    } */
    p{
    text-align:center;
    width:80%;
    padding:0 5vh;
    }
    h1 {
      font-size:1.9em;
    }
    .Logo{
      width:100px;
      height:75px;
      margin-top:20px;
    }
    .Home-buttonContainer {
    flex-direction:column;
    justify-content:center;
    align-items:center;
  }
  }
`;

export default StyledHome;

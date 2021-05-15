import styled from 'styled-components';

const StyledAbout = styled.div`
  color:#212449;
  background-image:url(${props=>props.backgroundImage});
  .About-container {
    background-color: rgba(255, 255, 255,0.9);
  }
  .Logo{
    width:200px;
    height:150px;
    margin-top:20px;
  }
  .About-textBox {
    width:400px;
    height:350px;
    padding: 20px 60px;
    text-align:center;
    font-size: 18px;
    border-radius:15px;
    background-color: rgba(38, 84, 96,0.1);
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    margin:30px 60px;
  }
  .About-itemBox {
    width:175px;
    height:150px;
    padding: 20px 60px;
    text-align:center;
    font-size: 18px;
    border-radius:15px;
    background-color: rgba(38, 84, 96,0.05);
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    margin:30px 60px;
    font-weight:bold;
  }
  .About-contentBox{
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
  @media screen and (max-width: 550px) {
    .About-title {
      font-size:2rem;
    }
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
    .About-textBox {
      height:500px;
      padding: 20px 40px;
    }
    .About-textBox .About-title{
      margin:0;
      padding:0;
    }
    .About-textBox p{
      width:100%;
      margin:0;
      padding:0;
    }
    .About-itemBox {
      margin:20px 50px;
    }
    .About-subtitle {
      font-size:2em;
    }
  }
`;

export default StyledAbout;

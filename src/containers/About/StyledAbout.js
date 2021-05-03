import styled from 'styled-components';

const StyledAbout = styled.div`
  color:#212449;

  .About-textBox {
    width:400px;
    height:350px;
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
`;

export default StyledAbout;
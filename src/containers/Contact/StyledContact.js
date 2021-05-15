import styled from 'styled-components';

const StyledContact = styled.div`
  color:#212449;
  height:80vh;
  background-image:url(${props=>props.backgroundImage});
  .Contact-container {
    background-color: rgba(255, 255, 255,0.9);
    height:80vh;
  }
  .Contact-title {
    text-align: center;
    font-size:2.5rem;
  }
  .Contact-subtitle {
    text-align: center;
    font-size:1.5rem;
  }
  .Contact-content{
    display: flex;
    flex-direction:row;
    flex-wrap:wrap;
    justify-content: center;
    align-items: center;
  }
  .Contact-contentContainer{

  }
  .Contact-separator{
    border:1px solid #C33753;
    background-color:#C33753;
    height:60vh;
    margin:0 80px;
    padding:0;
  }
  .socialLogo{
    width:30px;
    height:30px;
  }
  a{
    text-transform:uppercase;
    text-decoration:none;
    color:#212449;
    display:flex;
    flex-direction:row;
    align-items: center;
    justify-content: space-around;
    width:170px;
  }

  @media screen and (max-width: 480px) {
    .Contact-title {
      font-size:2rem;
      text-align: center;
    }
    .Contact-subTitle {
      font-size:1.6rem;
      text-align: center;
    }
    .Contact-content{
      display: flex;
      flex-direction:column;
      flex-wrap:wrap;
      justify-content: center;
      align-items: center;
      text-align: center;
      background-color: rgba(38, 84, 96,0.1);
      margin:0 40px;
      border-radius:15px;
    }

    .Contact-separator{
      display:none;
      margin:0;
      padding:0;
    }
    a{
    margin-left:25px;
    padding:0;
  }
  }
`;

export default StyledContact;
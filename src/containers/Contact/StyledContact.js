import styled from 'styled-components';

const StyledContact = styled.div`
  color:#212449;
  height:80vh;
  .Contact-title {
    text-align: center;
    font-size:2.5rem;
  }
  .Contact-subtitle {
    text-align: center;
    font-size:2rem;
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

  @media screen and (max-width: 480px) {
    .Contact-title {
      font-size:2rem;
      text-align: center;
    }
    .Contact-subtitle {
      font-size:1.5rem;
      text-align: center;
    }
    .Contact-content{
      display: flex;
      flex-direction:column;
      flex-wrap:wrap;
      justify-content: center;
      align-items: center;
      text-align: center;
      background-color: rgba(38, 84, 96,0.05);
      margin:0 40px;
      border-radius:15px;
    }

    .Contact-separator{
      display:none;
    }
  }
`;

export default StyledContact;
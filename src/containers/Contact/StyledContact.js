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
`;

export default StyledContact;
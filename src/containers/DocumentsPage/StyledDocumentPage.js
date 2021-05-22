import styled from 'styled-components';

const StyledDocumentPage = styled.div`
  background-image:url(${props=>props.backgroundImage});
  height: 85vh;
  color:#212449;
  .container{
    background-color: rgb(255,255,255,0.9);
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }
  .documents{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }
  h1 {
    padding-top: 20px;
    padding-bottom: 20px;
    text-align: center;
    font-size:3em;
    width: 100%;
  }
  @media screen and (max-width: 550px) {
    height: max-content;
  }
`;

export default StyledDocumentPage;
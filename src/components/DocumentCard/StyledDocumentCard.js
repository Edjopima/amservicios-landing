import styled from 'styled-components';

const StyledDocumentCard = styled.div`
  background-color: rgba(0, 51, 153,0.1);
  margin: 20px;
  width: 200px;
  height: 200px;
  border-radius:15px;

  a{
    font-size: 18px;
    width: 100%;
    height: 100%;
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-decoration: none;
  }
  .icon{
    font-size: 25px;
  }
`;

export default StyledDocumentCard;
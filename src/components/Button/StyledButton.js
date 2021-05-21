import styled from 'styled-components'

const StyledButton = styled.div`
  line-height: 50px;
  height: 50px;
  text-align: center;
  width: 250px;
  cursor: pointer;
  margin: 20px;
  color:#003399;
  transition: all 0.3s;
  position: relative;

  span {
    transition: all 0.3s;
  }
  .btn1::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    opacity: 0;
    transition: all 0.3s;
    border-top-width: 1px;
    border-bottom-width: 1px;
    border-top-style: solid;
    border-bottom-style: solid;
    border-top-color: rgba(0, 51, 153,0.5);
    border-bottom-color: rgba(0, 51, 153,0.5);
    transform: scale(0.1, 1);
  }
  .btn1:hover span {
    letter-spacing: 2px;
  }
  .btn1:hover::before {
    opacity: 1;
    transform: scale(1, 1);
  }
  .btn1::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    transition: all 0.3s;
    background-color: rgba(0, 51, 153,0.1);
  }
  .btn1:hover::after {
    opacity: 0;
    transform: scale(0.1, 1);
  }

  .btn2 span{
    font-weight:bold;
  }
  .btn2::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    opacity: 0;
    transition: all 0.3s;
    border-top-width: 1px;
    border-bottom-width: 1px;
    border-top-style: solid;
    border-bottom-style: solid;
    border-top-color: rgba(0, 51, 153,0.5);
    border-bottom-color: rgba(0, 51, 153,0.5);
    transform: scale(0.1, 1);
  }
  .btn2:hover span {
    letter-spacing: 2px;
  }
  .btn2:hover::before {
    opacity: 1;
    transform: scale(1, 1);
  }
  @media screen and (max-width: 480px) {
    height: 50px;
    width: 200px;
    margin:10px;
  }
`

export default StyledButton;
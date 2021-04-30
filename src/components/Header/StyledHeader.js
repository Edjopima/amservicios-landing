import styled from 'styled-components'

const StyledHeader = styled.div`
  width: 100%;
  height: 10vh;
  background-color:#114084;
  display:flex;
  flex-direction:row;
  align-items:center;
  justify-content:space-around;
  color:#f1f1f1;
  .Header-logo {
    width: 25%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    padding-left: 30px;
  }
  .Header-options {
    width:75%;
    display:flex;
    flex-direction:row;
    justify-content: flex-end;
    padding-right: 30px;
  }
  p {
    margin:0 20px;
    cursor: pointer;
  }
`

export default StyledHeader;
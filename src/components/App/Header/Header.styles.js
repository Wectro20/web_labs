import styled from 'styled-components';


export const LinkingWrapper = styled.div`
  .selected {
    display:flex;
    flex-direction: column-reverse;
    align-items:center;
    :after {
      justify-content: center;
      content: '';
      display: block;
      position: absolute;
      bottom: -3px;
      height: 3px;
      border-radius: 4px;
      border-left: 30px solid rgb(134, 188, 238);
    }
  }

  ul {
    list-style-type: none;
    display: flex;
  }

  li {
    margin-top: 10px;
    margin-bottom: -7px;
    display: flex;
    position: relative;
    font-size: 12px;
    margin-left: 10px;
    margin-right: 23px;

    a {
      text-decoration: none;
      color: black;
      font-family: Helvetica;
      font-size: 15px;
    }
  }

  #navbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: aliceblue;
    border-bottom: solid;
    border-width: 1.5px;
  }
`
export const Image = styled.div`
  img {
    width: 40px;
    height: 40px;
    margin-left: 5px;
  }
`
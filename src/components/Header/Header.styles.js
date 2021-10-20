import styled from 'styled-components';


export const LinkingWrapper = styled.div`
  .selected {
    :after {
      justify-content: center;
      content: '';
      display: block;
      position: absolute;
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
    display: flex;
    position: relative;
    font-size: 12px;
    margin-left: 10px;
    margin-right: 10px;

    a {
      text-decoration: none;
      color: black;
      font-family: Helvetica;
    }
  }

  #navbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: aliceblue;
    border-bottom: solid;
  }
`
export const Image = styled.image`
  img {
    width: 40px;
    height: 40px;
    margin-left: 5px;
  }
`
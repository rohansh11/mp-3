import styled from "styled-components";

export const StyledMain = styled.main`
    z-index: 1; /* need for calculator math symbol background */
    width: 70%;
    flex: 1;
    padding: calc(0.75rem + 0.5vw);

  img{
      max-width: 100%;
      height: auto;
      float: left;
      padding: 2em;
  }

  table{
      max-width: 50vw;
  }

  @media screen and (max-width: 1000px) {
      max-width: 100%;
      flex: 1;
  }

  @media screen and (max-width: 749px) {
      width: 100%;
      padding: calc(0.5rem + 0.5vw);
      img{
        float: none;
        display: block;
        margin: 0 auto;
      }
  }
`;

export default StyledMain;

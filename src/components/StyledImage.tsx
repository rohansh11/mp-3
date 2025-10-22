import styled from "styled-components";

const StyledImage = styled.img`
    width: 50vw;
    height: 50vw;
    width: auto;
    height: auto;
    float: left;
    padding: 2em;
  

    object-fit: contain; /* learned from chatgpt, prevents image from squishing */

    @media screen and (max-width: 1000px) {
        max-width: 30vw;
        height: auto;
    }

    @media screen and (max-width: 749px) {
        padding-top: 0.5em;
        float: none;
        display: block;
        margin: 0 auto;
        max-width: 40vw;
        padding: 1em;
        height: auto;
  }
`;

export default StyledImage;

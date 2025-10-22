import styled from "styled-components";

export const StyledHeader = styled.header`
    z-index: 2; /* need for calculator math symbol background */
    text-align: left;
    background-color: rgb(76, 255, 36);
    width: 100%;
    padding: calc(0.75rem + 0.5vw);

    @media screen and (max-width: 749px) {
      text-align: center;
      padding: calc(0.5rem + 0.5vw);
    }

  h1{
    font-size: calc(1.4rem + 0.8vw);
  }

  p{
    font-size: calc(1rem + 0.2vw);
  }
`;


export default function Header(){
    return(
        <StyledHeader>
            <h1>
                Rohan Sharma
            </h1>
            <p>Welcome to my resume!</p>
        </StyledHeader>
    )
}
import {Link} from "react-router";
import styled from "styled-components";

export const StyledFooter = styled.footer`
    z-index: 2; /* need for calculator math symbol background */
    background-color: rgb(58, 237, 72);
    margin-top: 0;
    width: 100%;
    padding: calc(0.75rem + 0.5vw);

    p{
      font-size: calc(1rem + 0.2vw);
    }

    @media screen and (max-width: 749px) {
      padding: calc(0.5rem + 0.5vw);
    }
`;

export default function Footer() {
    return(
        <StyledFooter>
            <p>All right reserved by Rohan Sharma <Link to={`/credits`}>Credits</Link> &copy;</p>
        </StyledFooter>
    )
}

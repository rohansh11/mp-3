import {Link} from "react-router-dom";
import styled from "styled-components";

export const StyledNav = styled.nav`
    width: 30%;
    padding: calc(0.75rem + 0.5vw);
    z-index: 2; /* need for calculator math symbol background */

    ul{
        list-style: none;
        margin: 0;
        padding-left: 0;
        display: flex;
        flex-direction: column;
    }

    li{
        display: block;
        margin-bottom: 0.5em;
        border: 3px solid green;
        background-color: rgb(18, 178, 0);
    }

    a{
        text-decoration: none;
        display: block;
        padding: 0.5em 0.75em;
        font-size: calc(1rem + 0.2vw);
    }

    @media screen and (max-width: 749px) {
        width: 100%;
        flex-basis: 100%;
        display: inline;
        text-align: center;

    ul{
        display: inline;
        padding-left: 0;
    }
    
    li{
        width: 20%;
        display: inline;
        margin: 0;
    }

    a{
        display: inline-block;
        padding: 0.5em 0;
        font-size: calc(0.8rem + 0.2vw);
    }
}
`;

export default function Nav(){
    return(
        <StyledNav>
            <ul>
                <li><Link to={`/`}>Home</Link></li>
                <li><Link to={`/education`}>Education</Link></li>
                <li><Link to={`/experience`}>Experience</Link></li>
                <li><Link to={`/extracurriculars`}>Extracurriculars</Link></li>
                <li><Link to={`/techskills`}>Tech Skills</Link></li>
                <li><Link to={`/projects`}>Projects</Link></li>
                <li><Link to={`/credits`}>Credits</Link></li>
            </ul>
        </StyledNav>
    )
}
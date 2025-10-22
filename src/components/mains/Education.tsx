import useTitle from "../../hooks/useTitle";
import StyledMain from "../StyledMain";
import majors from "../../images/majors.jpg";
import StyledImage from "../StyledImage";
import StyledTitle from "../StyledTitle";

export default function Education(){
    
    useTitle("Education | RS Resume");

    return (

    <StyledMain>
        <StyledTitle>Education</StyledTitle>
        <StyledImage src={majors} alt="majors"/>
        <p>
            I am currently a senior at Boston University. I am majoring in computer science, neuroscience, and psychology! My expected graduation date is May 2026. 
        </p>
    </StyledMain>
    );
}
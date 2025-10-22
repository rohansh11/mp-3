import useTitle from "../../hooks/useTitle";
import StyledMain from "../StyledMain";
import bucs from "../../images/BUCS.jpg";
import StyledImage from "../StyledImage";
import StyledTitle from "../StyledTitle";

export default function Home(){
    
    useTitle("Home | RS Resume");

    
    return(
        <StyledMain>
            <StyledTitle>Home</StyledTitle>
            <StyledImage src={bucs} alt="main page photo"/>
            <p>I am Rohan Sharma, a student at Boston University. This is where you will find all the details about my resume. Click each link to explore.</p>
        </StyledMain>
    )
}
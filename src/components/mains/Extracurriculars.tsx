import useTitle from "../../hooks/useTitle";
import StyledMain from "../StyledMain";
import overwatch from "../../images/overwatch.jpg";
import robotics from "../../images/robotics.jpg";
import StyledImage from "../StyledImage";
import StyledTitle from "../StyledTitle";

export default function Extracurriculars(){
    
    useTitle("Extracurriculars | RS Resume");

    return(
    <StyledMain>
        <StyledTitle>Extracurriculars</StyledTitle>
        <StyledImage src={robotics} alt="robotics photo"/>
        <p>
        </p>
        <StyledImage src={overwatch} alt="overwatch logo"/>
        <p>For upwards of 5 years, I competed in the First Tech Challenge robotics competitions, working with teammates to design, build, and program autonomous robots to execute multi‑step objectives in competitive events. Along with that, I currently compete in Overwatch Esports at the collegiate level, where my team and I work together in a fast-paced environment to compete for Boston University in an objective-based first-person competition.</p>
    </StyledMain>
    )
}
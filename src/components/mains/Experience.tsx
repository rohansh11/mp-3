import useTitle from "../../hooks/useTitle";
import StyledMain from "../StyledMain";
import experience from "../../images/experience.jpg";
import StyledImage from "../StyledImage";
import StyledTitle from "../StyledTitle";

export default function Experience(){

    useTitle("Experience | RS Resume");

    return(

        <StyledMain>
            <StyledTitle>Experience</StyledTitle>
            <StyledImage src={experience} alt="collins and lab logo"/>
            <p>My work experience is in Systems Engineering and Platform Software Engineering at Collins Aerospace. I completed 3 internships and worked part time during school semesters, totaling to about 2.5 years of experience. Additionally, I do research in AI at Boston University's Computational Neuroscience and Vision Lab, where I have been researching for about 2 years now.</p>
        </StyledMain>
    );
}
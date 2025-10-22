import useTitle from "../../hooks/useTitle";
import StyledMain from "../StyledMain";
import skills from "../../images/skills.jpg";
import StyledImage from "../StyledImage";
import StyledTitle from "../StyledTitle";

export default function TechSkills(){
    
    useTitle("Tech Skills | RS Resume");
    
    return(
        <StyledMain>
        <StyledTitle>Tech Skills</StyledTitle>
        <StyledImage src={skills} alt="tech skills photo"/>
        <p>See my tech skills in this table below!</p>
        <table>
            <tr>
                <td>Languages</td>
                <td>MATLAB, Python, Java, JavaScript, C, C#, Assembly, C++</td>
            </tr>

            <tr>
                <td>Applications</td>
                <td>Jira, Confluence, Jama, PyTorch, TensorFlow, Microsoft Office 365, PyCharm, GitHub, Visual Studio Code, Unity, Eclipse, PREP</td>
            </tr>

            <tr>
                <td>AI/ML Research Interests</td>
                <td>Deep Learning, Explainable AI (XAI), Computer Vision, CNNs, Category Representation, Model Interpretability, Computational Neuroscience, Cognitive Modeling</td>
            </tr>
        </table>
    </StyledMain>
    );
}
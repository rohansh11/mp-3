import styled from "styled-components";
import useTitle from "../../hooks/useTitle";
import useAnswerColor from "../../hooks/useAnswerColor";
import StyledMain from "../StyledMain";
import StyledTitle from "../StyledTitle";
// @ts-ignore /* found in stack overflow, need to allow cooperation with my calculator js file */
import {addition, subtraction, multiplication, division, power, clearbutton} from "../../calculator";

const MathBackground = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
    font-size: 3rem;
    color: rgb(79, 240, 38);
    opacity: 0.5;
    text-align: center;

`;

const Inputs = styled.div`
    input{
        margin: 1em;
        padding: 1em;
  }
`;

const EqualShape = styled.div`
  
    display: flex;
    flex-direction: column;
    gap: 0.5em;
`;

const TopRow = styled.div`
    display: block;
    text-align: center;
    gap: 4em;
    border: 3px solid rgb(176, 61, 0);
    padding: 0.5em;
    background-color: rgb(216, 108, 0);
    margin: 1em;
    width: 80%;

    @media screen and (max-width: 749px) {
        width: 100%;
    }
`;

const BotRow = styled.div`
    display: block;
    text-align: center;
    gap: 4em;
    border: 3px solid rgb(176, 61, 0);
    padding: 0.5em;
    background-color: rgb(216, 108, 0);
    margin: 1em;
    width: 80%;

    @media screen and (max-width: 749px) {
        width: 100%;
    }
`;

const CalcButton = styled.button`
    padding: 0.5em;
    font-size: calc(1rem + 0.2vw);
    margin: 0.25em;
    font-family: "Comic Sans MS", cursive, sans-serif;
    background-color: rgb(255, 60, 0);
    color: rgb(3, 102, 240);

    @media screen and (max-width: 749px) {
        font-size: calc(0.8rem + 0.2vw);
    }
`;

const OutputSpace = styled.div`
    text-align: center;
    font-size: 5em;
    margin-left: 1em;
    font-family: "Comic Sans MS", cursive, sans-serif;
    font-style: italic;

    @media screen and (max-width: 749px) {
        margin-left: 0;
  }
`;




export default function Projects(){
    useTitle("Projects | RS Resume");

    const z=0;
    const color = useAnswerColor(z);

    return(
        <>
        <MathBackground>{`
        +-×÷=√π+-×÷=√π+-×÷=√π+-×÷=√π+-×÷=√π+-×÷=√π
        +-×÷=√π+-×÷=√π+-×÷=√π+-×÷=√π+-×÷=√π+-×÷=√π
        +-×÷=√π+-×÷=√π+-×÷=√π+-×÷=√π+-×÷=√π+-×÷=√π
        +-×÷=√π+-×÷=√π+-×÷=√π+-×÷=√π+-×÷=√π+-×÷=√π
        +-×÷=√π+-×÷=√π+-×÷=√π+-×÷=√π+-×÷=√π+-×÷=√π
        +-×÷=√π+-×÷=√π+-×÷=√π+-×÷=√π+-×÷=√π+-×÷=√π
        +-×÷=√π+-×÷=√π+-×÷=√π+-×÷=√π+-×÷=√π+-×÷=√π
        +-×÷=√π+-×÷=√π+-×÷=√π+-×÷=√π+-×÷=√π+-×÷=√π
        +-×÷=√π+-×÷=√π+-×÷=√π+-×÷=√π+-×÷=√π+-×÷=√π
        +-×÷=√π+-×÷=√π+-×÷=√π+-×÷=√π+-×÷=√π+-×÷=√π
        +-×÷=√π+-×÷=√π+-×÷=√π+-×÷=√π+-×÷=√π+-×÷=√π
        +-×÷=√π+-×÷=√π+-×÷=√π+-×÷=√π+-×÷=√π+-×÷=√π
        +-×÷=√π+-×÷=√π+-×÷=√π+-×÷=√π+-×÷=√π+-×÷=√π
        +-×÷=√π+-×÷=√π+-×÷=√π+-×÷=√π+-×÷=√π+-×÷=√π
        +-×÷=√π+-×÷=√π+-×÷=√π+-×÷=√π+-×÷=√π+-×÷=√π
        `}</MathBackground>
        <StyledMain>
        <StyledTitle>Projects</StyledTitle>

            <br></br>

            <h1>Welcome to Math Land!</h1>
        <div id="calculator">

            <Inputs>
                <input type="text" id="first-number"/>
                <input type="text" id="second-number"/>
            </Inputs>
            
            <EqualShape>
                <TopRow>
                    <CalcButton onClick={addition}> + </CalcButton>
                    <CalcButton onClick={subtraction}> - </CalcButton>
                    <CalcButton onClick={multiplication}> * </CalcButton>
                </TopRow>

                <BotRow>
                    <CalcButton onClick={division}> / </CalcButton>
                    <CalcButton onClick={power}> ** </CalcButton>
                    <CalcButton onClick={clearbutton}> Clear </CalcButton>
                </BotRow>
            </EqualShape>
        
            <OutputSpace>
                <h3 id="output" style={{color}}>{z}</h3>
            </OutputSpace>
            
        </div>

        </StyledMain>
        </>
    )
}
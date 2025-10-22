import Nav from "./Nav.tsx";
import Footer from "./Footer.tsx";
import Header from "./Header.tsx";
import Home from "./mains/Home";
import Education from "./mains/Education";
import Experience from "./mains/Experience";
import TechSkills from "./mains/TechSkills";
import Extracurriculars from "./mains/Extracurriculars.tsx";
import {Route, Routes} from "react-router";
import styled from "styled-components";
import Projects from "./mains/Projects.tsx";

const Wrapper=styled.div`
    display: flex;
    width: 100vw;
    height: auto;
    margin: 0 auto;
    background-color: rgb(13, 223, 153);
    font-family: "Comic Sans MS", cursive, sans-serif;
    flex-direction: column;
    flex: 1;
    min-height: 100vh; /* learned from stack overflow, fixes extra white space between body and footer */

`;

const Container=styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    flex: 1;
    
    
    @media screen and (max-width: 1000px) {
        flex-direction: column;
    }
`;

export default function Root(){
    return(
        <>
            <Wrapper>
            <Header/>
            <Container>
            <Nav/>

            <Routes>
                <Route path = {`/`} element={<Home/>}/>
                <Route path = {`/education`} element={<Education/>}/>
                <Route path = {`/experience`} element={<Experience/>}/>
                <Route path = {`/extracurriculars`} element={<Extracurriculars/>}/>
                <Route path = {`/techskills`} element={<TechSkills/>}/>
                <Route path = {`/projects`} element={<Projects/>}/>
                <Route path = {`/credits`} element={<Home/>}/>
            </Routes>
            </Container>
            <Footer/>
            </Wrapper>
        </>
    ) 
}
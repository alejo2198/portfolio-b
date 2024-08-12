import './Skills.scss'
import Skill from '../Skill/Skill';
// import { useState,useEffect } from 'react';

// const [skills,setSkills] = null;

// useEffect(()=>{
//     const async getSkills= () => {
//        const response =  await  fetch("urlthatsdeployed/skills")
//        const data = json(response)
//        setSkills(data)
//     } 
// },[])

const Skills = () => {
const all_skills = [
    {
        category:"front-end",
        skills:[
            {
                name: "html",
                icon:  "devicon-html5-plain"
            },
            {
                name: "css",
                icon:  "devicon-css3-plain"
            },
            {
                name: "javascript",
                icon:  "devicon-javascript-plain"
            },
            {
                name: "react",
                icon:  "devicon-react-original"
            },
            {
                name: "tailwind",
                icon:  "devicon-tailwindcss-original"
            },
            {
                name: "sass",
                icon:  "devicon-sass-original"
            },
            {
                name: "figma",
                icon:  "devicon-figma-plain"
            },
            {
                name: "typescript",
                icon:  "devicon-typescript-plain"
            },
            {
                name: "threejs",
                icon:  "devicon-threejs-original"
            },
        ]
    }
]

    return (
        // {!setSkills && <p>Loading...</p>}
        // {setSkills && }
        <section id="skills" class="skills">
        <h2>Skills</h2>
        <ul class="skills_navigation">
            <li class="skills_tab selected">Front-End</li>
            <li class="skills_tab hide">Back-End</li>
            <li class="skilsl_tab hide">Project Management</li>
        </ul>
        <div class="skills-container">
            <ul class="skills_list">
               {all_skills[0].skills.map((skill,index) => {
                return (
                    <Skill skill={{key:index,...skill}}/>
                )
               })}
            </ul>
            <div class="skills_description-container">
                <div class="blur">&nbsp;</div>
                <div class="skills_content">
                    <p class="skills_paragraph">I would describe my design style as clean and simple with a pop of colour.  I enjoy keeping up to date with  design trends.</p>
                    <p class="skills_paragraph">I have complete confidence that I can bring my designs to life using my front-end development skills.</p>
                </div>
            </div>
        </div>
    </section>
    );
};

export default Skills;
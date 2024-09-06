import './Skills.scss'
import Skill from '../Skill/Skill';
import { useState,useEffect } from 'react';

import arrow from '../../assets/icons/right-arrow.svg'



const Skills = () => {
    const [skillList,setSkillList] = useState(null);
    const [skillType,setSkillType] = useState("front_end")

    //call api to get skills
    const getSkills = async() => {
        try {
            const response = await fetch("https://portfolio-api-mu-flax.vercel.app/api/skills");
            const data = await response.json()
            setSkillList(data)
        } catch (error) {
            console.error('Error:', error);
        }
    }

    //handler to change the category of skill (front-end,back-end,product-management)
    const changeSkillType = (type) => {
        setSkillType(type)
    }
    const changeMobileSkillType = (index) => {
        const types = ["front_end","back_end","project_management"];
        const current_index = types.indexOf(skillType);
        
        if(index + current_index > types.length -1){
            setSkillType("front_end")
        }else if(index + current_index < 0){
            setSkillType("project_management")
        }else{
            setSkillType(types[index + current_index])
        }
    }

    //fetch skills when component is mounted
    useEffect(()=>{
        getSkills();
    },[])

    if(!skillList){
        return <p>Loading...</p>;
    }

    const filteredSkillList = skillList.filter(skill => skill.category === skillType);

    return(
        <section id="skills" className="skills">
        <h2>Skills</h2>
        <ul className="skills__navigation">
            <img className="skills__icon--left" src={arrow} alt="an arrow pointed right for navigation" onClick={() => {changeMobileSkillType(-1)}}/>
            <li className={`skills__tab ${skillType === "front_end" ? 'skills__tab--selected':''}`} onClick={() => {changeSkillType("front_end")}}>Front-End</li>
            <li className={`skills__tab ${skillType === "back_end" ? 'skills__tab--selected':''}`} onClick={() => {changeSkillType("back_end")}}>Back-End</li>
            <li className={`skills__tab ${skillType === "project_management" ? 'skills__tab--selected':''}`} onClick={() => {changeSkillType("project_management")}}>Project Management</li>
            <img className="skills__icon--right" src={arrow} alt="an arrow pointed right for navigation" onClick={() => {changeMobileSkillType(1)}}/>
        </ul>
        <div className="skills-container">
            <ul className="skills__list">
               {filteredSkillList.map((skill,index) => {
                return (
                    <Skill key={index} skill={skill}/>
                )
               })}
            </ul>
            <div className="skills__description-container">
                <div className="blur">&nbsp;</div>
                <div className="skills__content">
                    <p className="skills__paragraph">I would describe my design style as clean and simple with a pop of colour.  I enjoy keeping up to date with  design trends.</p>
                    <p className="skills__paragraph">I have complete confidence that I can bring my designs to life using my front-end development skills.</p>
                </div>
            </div>
        </div>
    </section>
    )
};

export default Skills;

const all_skills = [
    {
        front_end:[
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
        ],
        project_management:[
            {
                name: "jira",
                icon:  "devicon-jira-plain"
            },
            {
                name: "github",
                icon:  "devicon-github-original"
            },
            {
                name: "Trello",
                icon:  "devicon-trello-plain"
            },
            
        ],
        back_end:[
            {
                name: "node",
                icon:  "devicon-nodejs-plain"
            },
            {
                name: "express",
                icon:  "devicon-express-original"
            },
            {
                name: "sql",
                icon:  "devicon-azuresqldatabase-plain"
            },
            {
                name: "mySql",
                icon:  "devicon-mysql-original"
            },
            {
                name: "mongo",
                icon:  "devicon-mongodb-plain"
            },
            {
                name: "c#",
                icon:  "devicon-csharp-plain"
            },
            {
                name: "asp.net",
                icon:  "devicon-dotnetcore-plain"
            },
            {
                name: "php",
                icon:  "devicon-php-plain"
            },
            {
                name: "laravel",
                icon:  "devicon-laravel-original"
            },
        ]
    }
]
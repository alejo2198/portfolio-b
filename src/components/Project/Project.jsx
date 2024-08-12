import React from 'react';

const Project = ({project}) => {
    return (
        <article class="project project--featured">
                <img id="sabfit" src={project.image} alt={project.alt}/>
                <div class="project_title-container">
                    <h4 class="project_title">{project.title}</h4>
                    <a href="https://sabfit-training.com/" class="project_link">
                        <p>Visit Site</p>
                        <img src={visit_link} alt="arrow"/>
                    </a>
                </div>
                {project.isFeatured && <p class="featured">Featured Project</p>}
                <p class="project_description">{project.description}</p>
                <ul class="project_languages">
                    {project.languages.forEach((element,index) => {
                        return (
                            <li key={index} class="project_skill">
                                <i class={`${element.icon} project_skill_icon`} title={`icon for ${element.name}`}></i>
                                <p class="project_skill_name">{element.name}</p>
                            </li>
                        )
                    })}
                </ul>
            </article>
    );
};

export default Project;
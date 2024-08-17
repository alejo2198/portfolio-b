import './Project.scss'

import visit_link from '../../assets/icons/visit_link.svg';
import sabfit_image from '../../assets/images/projects/sabfit.png';
import qrp_image from '../../assets/images/projects/qrp.png';
import flf_image from '../../assets/images/projects/flf.png';
import skoro_image from '../../assets/images/projects/skoro.png';

const Project = ({project}) => {
    let project_image = null;
    switch(project.abbreviation) {
        case 'sabfit':
            project_image = sabfit_image;
            break;
        case 'qrp':
            project_image = qrp_image;
            break;
        case 'flf':
            project_image = flf_image;
            break;
        case 'skoro':
            project_image = skoro_image;
            break;
      }


    return (
        <article class={`${project.isFeatured ? 'project--featured':'project'}`}>
                <img id={project.abbreviation} src={project_image} alt={project.alt_text}/>
                <div class="project_title-container">
                    <h4 class="project_title">{project.name}</h4>
                    <a href={project.link} class="project_link">
                        <p>Visit Site</p>
                        <img src={visit_link} alt="arrow"/>
                    </a>
                </div>
                {project.isFeatured && <p class="featured">Featured Project</p>}
                <p class="project_description">{project.description}</p>
                <ul class="project_languages">
                    {project.languages.map((element,index) => {
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
import './ProjectList.scss';

import sabfit from '../../assets/images/projects/sabfit.png';
import visit_link from '../../assets/icons/visit_link.svg';

const ProjectList = () => {
    return (
        <section id="projects" class="projects">
        <h2>Projects</h2>
        <div class="projects-container">
            <article class="project project--featured">
                <img id="sabfit" src={sabfit} alt="landing page for sabfit training"/>
                <div class="project_title-container">
                    <h4 class="project_title">SABFIT</h4>
                    <a href="https://sabfit-training.com/" class="project_link">
                        <p>Visit Site</p>
                        <img src={visit_link} alt="arrow"/>
                    </a>
                </div>
                <p class="featured">Featured Project</p>
                
                <p class="project_description">Landing Page for a personal trainer. This website was  developed by the FLF team. The key takeaways were client experience as well as practicing team development in an agile methodology.</p>
                <ul class="project_languages">
                    <li class="project_skill">
                        <i class="devicon-react-original project_skill_icon" title="icon for react"></i>
                        <p class="project_skill_name">react</p>
                    </li>
                    <li class="project_skill">
                        <i class="devicon-typescript-plain project_skill_icon"  title="icon for typescript"></i>
                        <p class="project_skill_name">typescript</p>
                    </li>
                </ul>
            </article>
            <article class="project">
                <img id="qrp" src="./assets/images/projects/qrp.png" class="grayscale" alt="quick response plumbing logo and van"/>
                <div class="project_title-container">
                    <h4 class="project_title">Quick <span class="new_line"></span>Response Plumbing</h4>
                    <a href="https://quickresponseplumbing.ca/" class="project_link--absolute">
                        <p class="link_text">Visit Site</p>
                        <img src="./assets/icons/visit_link.svg" alt="arrow"/>
                    </a>
                </div>
                <p class="project_description">Landing Page for a personal trainer. This website was  developed by the FLF team. The key takeaways were client experience as well as practicing team development in an agile methodology.</p>
                <ul class="project_languages">
                    <li class="project_skill">
                        <i class="devicon-figma-plain project_skill_icon" title="icon for figma"></i>
                        <p class="project_skill_name">figma</p>
                    </li>
                    <li class="project_skill">
                        <i class="devicon-html5-plain project_skill_icon" title="icon for html"></i>
                        <p class="project_skill_name">html</p>
                    </li>
                </ul>
            </article>
            <article class="project">
                <img id="flf" src="./assets/images/projects/flf.png" alt="Landing page for FLF technologies"/>
                <div class="project_title-container">
                    <h4 class="project_title">FLF <span class="new_line"></span>Technology</h4>
                    <a href="https://flf-freelance.netlify.app/" class="project_link--absolute">
                        <p class="link_text">Visit Site</p>
                        <img src="./assets/icons/visit_link.svg" alt="arrow"/>
                    </a>
                </div>
                <p class="project_description">Company Website for FLF technology.  Founded by myself and developers in my network. Designed by myself. Key takeaways include developing in a team setting and exploring SASS and Tailwind to improve styling solutions.</p>
                <ul class="project_languages">
                    <li class="project_skill">
                        <i class="devicon-sass-plain project_skill_icon" title="icon for sass"></i>
                        <p class="project_skill_name">sass</p>
                    </li>
                    <li class="project_skill">
                        <i class="devicon-tailwindcss-original project_skill_icon" title="icon for tailwind"></i>
                        <p class="project_skill_name">tailwind</p>
                    </li>
                </ul>
            </article>
            <article class="project">
                <img id="skoro"  src="./assets/images/projects/skoro.png" alt="Landing page for Skoro Media"/>
                <div class="project_title-container">
                    <h4 class="project_title">Skoro Media</h4>
                    <a href="https://www.figma.com/file/8KqCESxaHFdoXBwO8Pd7mz/Skoro-Media?type=design&node-id=0%3A1&mode=design&t=WKgpSDO8QF6lIAiW-1" class="project_link">
                        <p class="link_text">Visit Site</p>
                        <img src="./assets/icons/visit_link.svg" alt="arrow"/>
                    </a>
                </div>
                <p class="project_description">Landing Page for a digital media company. Designed by myself. Key takeaways were improved client communication and expanding on design concepts to elevate feel of website. </p>
                <ul class="project_languages">
                    <li class="project_skill">
                        <i class="devicon-figma-plain project_skill_icon" title="icon for figma"></i>
                        <p class="project_skill_name">figma</p>
                    </li>
                </ul>
            </article>
        </div>
        </section>
    )
}

export default ProjectList;
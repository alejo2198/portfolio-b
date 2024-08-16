import './ProjectList.scss';
import { useState,useEffect } from 'react';
import Project from '../Project/Project'

const ProjectList = () => {
  const [projectList,setProjectList] = useState(null);

    //call api to get projects
    const getProjects = async() => {
        try {
            const response = await fetch("https://portfolio-api-mu-flax.vercel.app/api/projects");
            const data = await response.json()
            setProjectList(data)
        } catch (error) {
            console.error('Error:', error);
        }
    }

    //fetch skills when component is mounted
    useEffect(()=>{
        getProjects();
    },[])

    if(!projectList){
        return <p>Loading...</p>;
    }

    
    return (
        <section id="projects" className="projects">
          <h2>Projects</h2>
          <div className="projects-container">
            {projectList.map((project)=>{
              return <Project key={project._id} project={project}/>
            })}
          </div>
        </section>
    )
}

export default ProjectList;

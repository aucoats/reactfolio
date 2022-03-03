import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';

function Projects() {

    const projects = [
        {
            name: 'Treaddit', 
            deployed: 'https://treaddit.herokuapp.com/',
            repo: 'https://github.com/aucoats/treaddit',
            image: 'treaddit.png'
        },
        // {
        //     name: 'placeholder',
        //     deployed: 'placeholder',
        //     repo: 'placeholder', 
        //     image: 'placeholder'
        // }
    ]

    console.log(projects);

    return(
        <section className="projects">
            {projects.map(project => (
            <div className="card">
                    <div className="project-title">
                        <h1>{project.name}</h1>
                    </div>
                    <div className="img">
                        <img src={require(`../../assets/img/${project.image}`)} />
                    </div>
                     <div className="project-content">
                         <span>
                            <a href={project.deployed}>Deployed App</a> <br></br>
                            <a href={project.repo}><GitHubIcon/> Repo </a>
                         </span>
                     </div>
                 </div>
            ))}
        </section>
        // <section className="projects">
        //     <div className="card">
        //         <div className="project-title">

        //         </div>
        //         <div className="img">

        //         </div>
        //         <div className="project-content">
        //             <span>
        //                 Deployed at: <br></br>
        //                 GitHub Repo: 
        //             </span>
        //         </div>
        //     </div>
        //     <div className="card">
        //         <div className="project-title">

        //         </div>
        //         <div className="img">

        //         </div>
        //         <div className="project-content">
        //             <span>
        //                 Deployed at: <br></br>
        //                 GitHub Repo: 
        //             </span>
        //         </div>
        //     </div>
        //     <div className="card">
        //         <div className="project-title">

        //         </div>
        //         <div className="img">

        //         </div>
        //         <div className="project-content">
        //             <span>
        //                 Deployed at: <br></br>
        //                 GitHub Repo: 
        //             </span>
        //         </div>
        //     </div>
        //     <div className="card">
        //         <div className="project-title">

        //         </div>
        //         <div className="img">

        //         </div>
        //         <div className="project-content">
        //             <span>
        //                 Deployed at: <br></br>
        //                 GitHub Repo: 
        //             </span>
        //         </div>
        //     </div>
        //     <div className="card">
        //         <div className="project-title">

        //         </div>
        //         <div className="img">

        //         </div>
        //         <div className="project-content">
        //             <span>
        //                 Deployed at: <br></br>
        //                 GitHub Repo: 
        //             </span>
        //         </div>
        //     </div>
        //     <div className="card">
        //         <div className="project-title">

        //         </div>
        //         <div className="img">

        //         </div>
        //         <div className="project-content">
        //             <span>
        //                 Deployed at: <br></br>
        //                 GitHub Repo: 
        //             </span>
        //         </div>
        //     </div>
        // </section>
    )
}

export default Projects; 
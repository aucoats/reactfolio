import React from "react";

function Resume() {
    const skills = [
        'React', 
        'Express.js',
        'Node.js',
        'MongoDB',
        'NoSQL', 
        'GitHub', 
        'JavaScript',
        'CSS', 
        'Media Queries',
        'Agile Development', 
        'DRY Methods',
        'OOP', 
        'MVC Paradigm',
        'Progressive Web Applications',
    ]

    return(
        <section className="resume">
            <a href={require(`../../assets/files/resume.pdf`)} target="_blank">My resume lives here.</a>
            <div>
                <h1>Skills</h1>
                <ul>
                    {skills.map(skill => {
                        return <li>{skill}</li>
                    })}
                </ul>
            </div>
        </section>
    )
}

export default Resume; 
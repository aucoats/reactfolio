import React from "react";

function Resume() {
    const skills = [
        'React', 
        'Express.js',
        'Node.js',
        'MongoDB',
        'GraphQL',
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
            <a href={require(`../../assets/files/resume.pdf`)} class="bob-on-hover" target="_blank">My resume lives here.</a>
            <div>
                <h1>Skills</h1>
                <ul>
                    {skills.map(skill => {
                        return <li className="grow">{skill}</li>
                    })}
                </ul>
            </div>
        </section>
    )
}

export default Resume; 
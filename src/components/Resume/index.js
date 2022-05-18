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
        <>
            <h1 id="resume" className='resume-header'>Resume & Notable Skills</h1>
            <section id="resume" className="resume">
                <a href={require(`../../assets/files/resume.pdf`)} class="bob-on-hover resume-link" target="_blank">
                    <button>My resume lives here.</button>
                    </a>
                <a href='https://www.credly.com/badges/5c8e109d-7e8b-4769-a691-fd332e48828b' class="bob-on-hover badge-link" target="_blank"><img src={require(`../../assets/img/bootcampbadge.png`)}
                    alt="Austin's Boot Camp Badge">
                </img></a>
                <div>
                    <h1>Skills</h1>
                    <ul>
                        {skills.map(skill => {
                            return <li className="grow">{skill}</li>
                        })}
                    </ul>
                </div>
            </section>
        </>
    )
}

export default Resume; 
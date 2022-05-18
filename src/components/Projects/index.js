import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import LaunchIcon from '@mui/icons-material/Launch';

function Projects() {

    const projects = [
        {
            name: 'Social Rolls', 
            deployed: 'https://socialrolls.herokuapp.com/',
            description: 'Social app in which users can keep track of characters and campaigns! Collaborative effort that utilizes the full MERN stack and GraphQL.',
            repo: 'https://github.com/KrisSmith7/roll-initiative',
            image: 'socialrolls.jpg'
        },
        {
            name: 'Treaddit', 
            deployed: 'https://treaddit.herokuapp.com/',
            description: 'Trail sharing app for users who love to travel and share! Group project using MVC paradigm, handlebars, MySQL and Express.js.',
            repo: 'https://github.com/aucoats/treaddit',
            image: 'treaddit.png'
        },
        {
            name: 'CryptoQuotes', 
            deployed: 'https://krissmith7.github.io/cryptoquotes/',
            description: 'Fun cryptocurrecy group project in which users can generate inspirational quotes based on crypto performance. Third party API calls, Bootstrap, and JavaScript included!',
            repo: 'https://github.com/KrisSmith7/cryptoquotes',
            image: 'cryptoquotes.jpg'
        },
        {
            name: 'Weather Dashboard',
            deployed: 'https://aucoats.github.io/weatherdash-challenge/',
            description: 'Weather app created so that users can search weather by city and receive a 5-day forecast. Utilizes third party API calls, conditional rendering, and saved searches.',
            repo: 'https://github.com/aucoats/weatherdash-challenge',
            image: 'weatherdash.jpg'
        },
        {
            name: 'Workday Planner', 
            deployed: 'https://aucoats.github.io/workscheduler-challenge/', 
            description: 'Planner that allows you to update seemlessly. Time slot colors change depending on current time. JavaScript, jQuery, Moment.js and local storage.',
            repo: 'https://github.com/aucoats/workscheduler-challenge',
            image: 'workday.png'
        }
    ]

    return(
        <>
        <h1 className='projects-header' id="projects-header">Projects</h1>
        <section className="projects">
            {projects.map(project => (
            
            <Card sx={{ maxWidth: 500, 
                minWidth: 350,
                flexBasis: 100,
                marginY: '20px',
                marginX: '70px' }} className="show">
                <CardMedia
                    component="img"
                    height="200"
                    src={require(`../../assets/img/${project.image}`)}
                    alt={project.name}
                />
                <CardContent sx={{
                    bgcolor: 'var(--primary)', 
                    color: 'var(--lean-in)',
                    textAlign: 'left',
                }}> 
                    <Typography variant="h" component="div"> 
                    {project.name}
                    </Typography>
                    <Typography variant="body2" className="hide" component="div">
                        {project.description}
                    </Typography>
                </CardContent>
                <CardActions sx={{
                    textAlign: 'center',
                    display: 'flex', 
                    justifyContent: 'space-around',
                    bgcolor: 'var(--lean-in)', 
                    color: 'var(--peach)'
                }}>
                    <a href={project.repo} target="_blank" rel="noreferrer"><Button size="small"><GitHubIcon sx={{ color: 'var(--peach)'}}></GitHubIcon></Button></a>
                    <a href={project.deployed} target="_blank" rel="noreferrer"><Button size="small"><LaunchIcon sx={{ color: 'var(--peach)'}}></LaunchIcon></Button></a>
                </CardActions>
            </Card>
            ))}
        </section>
        </>
    )
}

export default Projects; 
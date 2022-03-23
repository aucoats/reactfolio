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
            repo: 'https://github.com/KrisSmith7/roll-initiative',
            image: 'socialrolls.jpg'
        },
        {
            name: 'Treaddit', 
            deployed: 'https://treaddit.herokuapp.com/',
            repo: 'https://github.com/aucoats/treaddit',
            image: 'treaddit.png'
        },
        {
            name: 'CryptoQuotes', 
            deployed: 'https://krissmith7.github.io/cryptoquotes/',
            repo: 'https://github.com/KrisSmith7/cryptoquotes',
            image: 'cryptoquotes.jpg'
        },
        {
            name: 'Weather Dashboard',
            deployed: 'https://aucoats.github.io/weatherdash-challenge/',
            repo: 'https://github.com/aucoats/weatherdash-challenge',
            image: 'weatherdash.jpg'
        },
        {
            name: 'Workday Planner', 
            deployed: 'https://aucoats.github.io/workscheduler-challenge/', 
            repo: 'https://github.com/aucoats/workscheduler-challenge',
            image: 'workday.png'
        }
    ]

    return(
        <section className="projects">
            {projects.map(project => (
            <Card sx={{ maxWidth:300, 
                flexBasis: '100%',
                marginY: '20px',
                marginX: '70px' }}>
                <CardMedia
                    component="img"
                    height="150"
                    src={require(`../../assets/img/${project.image}`)}
                    alt={project.name}
                />
                <CardContent sx={{
                    bgcolor: 'var(--primary)', 
                    color: 'var(--lean-in)',
                    textAlign: 'left'
                }}> 
                    <Typography variant="h5" component="div"> 
                    {project.name}
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
    )
}

export default Projects; 
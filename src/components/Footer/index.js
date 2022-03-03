import React from 'react'; 
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn'; 


function Footer() {
    return(
        <footer> 
            <span><a href="https://github.com/aucoats" target="_blank"><div><GitHubIcon /></div>aucoats</a></span>
            <span><a href="https://www.linkedin.com/in/aucoats" target="_blank"><div><LinkedInIcon /></div>Austin Coats</a></span>
        </footer> 
    )
}

export default Footer; 
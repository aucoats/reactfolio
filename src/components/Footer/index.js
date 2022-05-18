import React from 'react'; 

function Footer() {
    return(
        <footer> 
            <p>This page was built with <span>React.js</span>, <span><a href="https://mui.com/" alt="link to materialUI">MaterialUI</a></span>,  
                <span><a href="https://www.npmjs.com/package/react-scroll" alt="react scroll link"> React Scroll</a></span>,  
                and <span><a href="https://kyleamathews.github.io/react-headroom/" alt="react headroom link">React Headroom</a></span>.</p>
            {/* <span><a className="grow" href="https://github.com/aucoats" target="_blank" rel="noreferrer"><div><GitHubIcon sx={{ fontSize: 50 }} /></div></a></span>
            <span><a className="grow" href="https://www.linkedin.com/in/aucoats" target="_blank" rel="noreferrer"><div><LinkedInIcon sx={{ fontSize: 50 }} /></div></a></span> */}
        </footer> 
    )
}

export default Footer; 
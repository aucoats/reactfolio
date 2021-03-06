import React from 'react'; 
// import { Grid } from '@mui/material'; 

function About() {
    return( 
        <section id="about-me" className="about-me">
                <img src={require(`../../assets/img/avatar.jpg`)}
                    alt="Austin and his pup Kashi near a river">
                </img>
                <p>
                    Hi, I'm Austin. Perched next to me there is Kashi. We both like taking long walks on a nice trail, but only one of us is a full-stack web developer (it would probably be Kashi if it weren't for the thumb situation). I have a BA in Psychology and a full stack web development certificate from the University of North Carolina at Chapel Hill. 
                    I am proficient with both front end and back end development. While models, queries, and data management are always a welcome challenge, I also like to build clean, bright, and innovative pages. Creating models with MongoDB or queries with GraphQL can both
                    be just as satisfying as perfecting a CSS transition or utilizing a new and interesting React component library.
                    <br></br><br></br>
                    <i>Currently seeking a professional opportunity as a web developer.</i>
                </p>
        </section>
    )
}


export default About; 
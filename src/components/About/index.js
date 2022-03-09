import React from 'react'; 
// import { Grid } from '@mui/material'; 

function About() {
    return( 
        <section className="about-me">
                <img src={require(`../../assets/img/avatar.jpg`)}
                    alt="Austin and his pup Kashi near a river">
                </img>
                <p>
                    Hi, I'm Austin. Perched next to me there is Kashi. We both like taking long walks on a nice trail, but only one of us is a full-stack web developer (it would probably be Kashi if it weren't for the thumb situation). 
                    I like to build clean, bright, and innovative pages. I love a good challenge but also love to balance work by pursuing interesting goals and projects. My current goal is to be employed as a web developer. 
                    If my portfolio looks interesting, check out the project page to see some of the cool stuff I've built! Thanks for visiting and feel free to check the contact page! 
                </p>
        </section>
    )
}


export default About; 
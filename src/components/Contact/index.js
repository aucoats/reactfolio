import React from 'react'; 
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn'; 

function Contact() {
    return(
        <>
            <h1 id="contact" className='contact-header'>Contact Me</h1>
            <main className="contact">
                <a className="nav-grow" href='mailto:austincoats72@gmail.com'>
                    <button className="email-button">Email me!</button>    
                </a>
            </main>
            <div class="contact">
                    <a className="" href="https://github.com/aucoats" target="_blank" rel="noreferrer"><button className="nav-button nav-grow contact-buttons"><GitHubIcon sx={{ fontSize: 45 }} /></button></a>
                    <a className="" href="https://www.linkedin.com/in/aucoats" target="_blank" rel="noreferrer"><button className="nav-button nav-grow contact-buttons"><LinkedInIcon sx={{ fontSize: 45 }} /></button></a>
            </div>
            
                {/* <form>
                    <div className="form-component">
                        <div>
                            <label for="name">Name: </label>
                            <input type="text" placeholder='Name goes here!'></input>
                        </div>
                        <div>
                            <label for="email">Email: </label>
                            <input type="email" placeholder='Email goes here!'></input>
                        </div>   
                        <div className='message-form'>
                            <label for="message">Leave a message: </label>
                            <textarea 
                                placeholder='Have anything to say?'
                                maxLength={180}></textarea>
                        </div>
                    </div>
                    <div className="contact-buttons">
                        <button type="submit">Submit</button>
                    </div>
                </form> */}
                {/* linked in badge */}
                {/* <div class="badge-base LI-profile-badge" data-locale="en_US" data-size="medium" data-theme="light" data-type="HORIZONTAL" data-vanity="aucoats" data-version="v1"><a class="badge-base__link LI-simple-link" href="https://www.linkedin.com/in/aucoats?trk=profile-badge">Austin Coats</a></div> */}
        </>
    )
}

export default Contact; 
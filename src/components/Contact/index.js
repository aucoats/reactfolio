import React from 'react'; 

function Contact() {
    return(
        <>
            <h1 id="contact" className='contact-header'>Contact Me</h1>
            <main className="contact">
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
                <a href='mailto:austincoats72@gmail.com' class="bob-on-hover">
                    <h3>Email me!</h3>    
                </a>
        </main>
        </>
    )
}

export default Contact; 
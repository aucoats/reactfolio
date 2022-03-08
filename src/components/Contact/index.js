import React from 'react'; 

function Contact() {
    return(
        <main className="contact">
            <form>
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
                    <a href='mailto:austincoats72@gmail.com'>
                        <h3>Email me!</h3>    
                    </a>
                </div>
            </form>
        </main>
    )
}

export default Contact; 
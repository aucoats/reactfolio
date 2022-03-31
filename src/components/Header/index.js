import React, { useState } from 'react'; 
import Navigation from '../Navigation'; 

function Header(props) {
    const {
        page, 
        currentPage, 
        setCurrentPage
    } = props; 

    const [fullName, setFullName] = useState('Austin');


    return( 
        <>
            <header>
                <h2 onMouseEnter={() => setFullName('Austin Coats')}
                    onMouseLeave={() => setFullName('Austin')}>Hi, I'm <span>{fullName}</span>.</h2>
                <h3>I'm a <span>web developer</span>.</h3>
            <Navigation page={page}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                ></Navigation>
            </header> 
        </>
    )
}

export default Header; 
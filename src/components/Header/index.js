import React from 'react'; 
import Navigation from '../Navigation'; 

function Header(props) {
    const {
        page, 
        currentPage, 
        setCurrentPage
    } = props; 

    return( 
        <>
            <header>
                <h2>Austin Coats</h2>
            <Navigation page={page}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                ></Navigation>
            </header> 
        </>
    )
}

export default Header; 
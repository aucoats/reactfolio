import React, { useState } from 'react'; 
import Navigation from '../Navigation'; 
import Headroom from 'react-headroom';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn'; 
import HorizontalSplitIcon from '@mui/icons-material/HorizontalSplit';

function Header(props) {
    const {
        page, 
        currentPage, 
        setCurrentPage
    } = props; 

    const [fullName, setFullName] = useState('Austin');


    return( 
        <>
            <Headroom>
                <header>
                    <div>
                        <h2 onMouseEnter={() => setFullName('Austin Coats')}
                            onMouseLeave={() => setFullName('Austin')}>Hi, I'm <span>{fullName}</span>.</h2>
                        {/* <h3>I'm a <span>web developer</span>.</h3> */}
                        <div className='header-contacts'>
                            <button><a className="grow" href="https://github.com/aucoats" target="_blank" rel="noreferrer"><div className='grow'><GitHubIcon sx={{ fontSize: 35 }} /></div></a></button>
                            <button><a className="grow" href="https://www.linkedin.com/in/aucoats" target="_blank" rel="noreferrer"><div className='grow'><LinkedInIcon sx={{ fontSize: 35 }} /></div></a></button>
                            <button><a className="grow" href="https://stackoverflow.com/users/16932811/aucodes" target="_blank" rel="noreferrer"><div className='grow'><HorizontalSplitIcon sx={{ fontSize: 35 }} /></div></a></button>
                        </div>
                    </div>
                <Navigation page={page}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                    ></Navigation>
                </header> 
            </Headroom>
        </>
    )
}

export default Header; 
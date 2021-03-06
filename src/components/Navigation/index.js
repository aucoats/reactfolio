import React from 'react'; 
import Button from '@mui/material/Button';
import { Link } from 'react-scroll';

function Navigation(props) {

    const {
        currentPage, 
        setCurrentPage
    } = props;

    return( 
        <nav> 
            <Link to="about-me"
            isDynamic={true}
            ignoreCancelEvents={true}
            smooth={true}
            duration={750}
            offset={-50}>                    
                <div className='button-wrapper nav-grow'><button className='nav-button nav-grow'>About</button></div>
            </Link>
            <Link to="projects-header"
            isDynamic={true}
            ignoreCancelEvents={true}
            smooth={true}
            duration={750}
            offset={-50}>                    
               <div className='button-wrapper nav-grow'><button className='nav-button nav-grow'>Projects</button></div>
            </Link>
            <Link to="resume"
            isDynamic={true}
            ignoreCancelEvents={true}
            smooth={true}
            duration={750}
            offset={-50}>                    
                <div className='button-wrapper nav-grow'><button className='nav-button nav-grow'>Resume</button></div>
            </Link>
            <Link to="contact"
            isDynamic={true}
            ignoreCancelEvents={true}
            smooth={true}
            duration={750}
            offset={-50}>                    
                <div className='button-wrapper nav-grow'><button className='nav-button nav-grow'>Contact</button></div>
            </Link>
            
            {/* { currentPage === 'about' ?
                <Link to="about-me"
                isDynamic={true}
                ignoreCancelEvents={true}
                smooth={true}
                duration={500}
                offset={50}><Button variant="contained"
                className='nav-button'
                    sx={{
                        // backgroundColor: 'var(--peach)',
                        // color: 'var(--lean-in)',
                    }}
                    id="about"
                    onClick={(e) => {
                        setCurrentPage(e.target.id)
                    }}>About</Button>
                </Link>
                    :
           <Link to="about-me"
                isDynamic={true}
                ignoreCancelEvents={true}
                smooth={true}
                duration={500}
                offset={50}>
                    <Button variant="contained"
                    sx={{
                        backgroundColor: 'var(--primary)',
                        color: 'var(--lean-in)',
                    }}
                    id="about"
                    onClick={(e) => {
                        setCurrentPage(e.target.id)
                    }}>About</Button>
                </Link>
                }
            { currentPage === "projects" ?
                <Link to="projects-header"
                isDynamic={true}
                ignoreCancelEvents={true}
                smooth={true}
                duration={500}
                offset={50}>
                    <Button variant="contained"
                    sx={{
                        backgroundColor: 'var(--peach)',
                        color: 'var(--lean-in)',
                    }}
                    id="projects"
                    onClick={(e) => {
                        setCurrentPage(e.target.id)
                    }}>Projects</Button>
                </Link>
                    :
                <Link to="projects"
                isDynamic={true}
                ignoreCancelEvents={true}
                smooth={true}
                duration={500}>
                    <Button variant="contained"
                        sx={{
                            backgroundColor: 'var(--primary)',
                            color: 'var(--lean-in)',
                        }}
                        id="projects"
                        onClick={(e) => {
                            setCurrentPage(e.target.id)
                        }}>Projects</Button>
                </Link>
                }
            { currentPage === 'contact' ?
                <Button variant="contained"
                    sx={{
                        backgroundColor: 'var(--peach)',
                        color: 'var(--lean-in)',
                    }}
                    id="contact"
                    onClick={(e) => {
                        setCurrentPage(e.target.id)
                    }}>Contact</Button>
                    :
                <Button variant="contained"
                    sx={{
                        backgroundColor: 'var(--primary)',
                        color: 'var(--lean-in)',
                    }}
                    id="contact"
                    onClick={(e) => {
                        setCurrentPage(e.target.id)
                    }}>Contact</Button>
                }
            { currentPage === 'resume' ?
                <Button variant="contained"
                    sx={{
                        backgroundColor: 'var(--peach)',
                        color: 'var(--lean-in)',
                    }}
                    id="resume"
                    onClick={(e) => {
                        setCurrentPage(e.target.id)
                    }}>Resume</Button>
                    :
                <Button variant="contained"
                    sx={{
                        backgroundColor: 'var(--primary)',
                        color: 'var(--lean-in)',
                    }}
                    id="resume"
                    onClick={(e) => {
                        setCurrentPage(e.target.id)
                    }}>Resume</Button>
                } */}
        </nav> 
    )
}

export default Navigation; 
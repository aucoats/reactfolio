import React from 'react'; 
import Button from '@mui/material/Button';

function Navigation(props) {

    const {
        currentPage, 
        setCurrentPage
    } = props;

    return( 
        <nav> 
            { currentPage === 'about' ?
                <Button variant="contained"
                    sx={{
                        backgroundColor: 'var(--peach)',
                        color: 'var(--lean-in)',
                    }}
                    id="about"
                    onClick={(e) => {
                        setCurrentPage(e.target.id)
                    }}>About</Button>
                    :
                <Button variant="contained"
                    sx={{
                        backgroundColor: 'var(--primary)',
                        color: 'var(--lean-in)',
                    }}
                    id="about"
                    onClick={(e) => {
                        setCurrentPage(e.target.id)
                    }}>About</Button>
                }
            { currentPage === "projects" ?
                <Button variant="contained"
                    sx={{
                        backgroundColor: 'var(--peach)',
                        color: 'var(--lean-in)',
                    }}
                    id="projects"
                    onClick={(e) => {
                        setCurrentPage(e.target.id)
                    }}>Projects</Button>
                    :
                <Button variant="contained"
                    sx={{
                        backgroundColor: 'var(--primary)',
                        color: 'var(--lean-in)',
                    }}
                    id="projects"
                    onClick={(e) => {
                        setCurrentPage(e.target.id)
                    }}>Projects</Button>
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
                }
        </nav> 
    )
}

export default Navigation; 
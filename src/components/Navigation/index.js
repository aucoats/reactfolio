import React from 'react'; 
import Button from '@mui/material/Button';

function Navigation() {
    return( 
        <nav> 
            <Button variant="contained"
                sx={{
                    backgroundColor: 'var(--primary)',
                    color: 'var(--lean-in)',
                }}>About</Button>
            <Button variant="contained"
                sx={{
                    backgroundColor: 'var(--primary)',
                    color: 'var(--lean-in)'
                }}>Portfolio</Button>
            <Button variant="contained"
                sx={{
                    backgroundColor: 'var(--primary)',
                    color: 'var(--lean-in)'
                }}>Contact</Button>
            <Button variant="contained"
                sx={{
                    backgroundColor: 'var(--primary)',
                    color: 'var(--lean-in)'
                }}>Resume</Button>
        </nav> 
    )
}

export default Navigation; 
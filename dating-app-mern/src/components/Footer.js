import React from 'react';
import './Footer.css';
import IconButton from '@mui/material/IconButton';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import OfflineBoltIcon from '@mui/icons-material/OfflineBolt';
import SettingsBackupRestoreRoundedIcon from '@mui/icons-material/SettingsBackupRestoreRounded';


const Footer = () => {
    return (
        <div className='bottomButton'>

            <IconButton>
                <SettingsBackupRestoreRoundedIcon color='success' fontSize="large" className="footer__icon"></SettingsBackupRestoreRoundedIcon>
            </IconButton>
            
            <IconButton>
                <DeleteForeverIcon color='success' fontSize="large" className="footer__icon"></DeleteForeverIcon>
            </IconButton>

            <IconButton>
                <StarHalfIcon color='success' fontSize="large" className="footer__icon"></StarHalfIcon>
            </IconButton>

            <IconButton>
                <VolunteerActivismIcon color='success' fontSize="large" className="footer__icon"></VolunteerActivismIcon>
            </IconButton>
            
            <IconButton>
                <OfflineBoltIcon color='success' fontSize="large" className="footer__icon"></OfflineBoltIcon>
            </IconButton>


        </div>
    )
}

export default Footer
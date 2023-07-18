import React from 'react';
import './Footer.css';
import IconButton from '@mui/material/IconButton';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import OfflineBoltIcon from '@mui/icons-material/OfflineBolt';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import SettingsBackupRestoreRoundedIcon from '@mui/icons-material/SettingsBackupRestoreRounded';


const Footer = () => {
    return (
        <div className='bottomButton'>

            <IconButton>
                <SettingsBackupRestoreRoundedIcon fontSize="large" className="BackupRestore"></SettingsBackupRestoreRoundedIcon>
            </IconButton>
            
            <IconButton>
                <DeleteForeverIcon fontSize="large" className="Delete"></DeleteForeverIcon>
            </IconButton>

            <IconButton>
                <StarHalfIcon fontSize="large" className="Star"></StarHalfIcon>
            </IconButton>

            <IconButton>
                <VolunteerActivismIcon fontSize="large" className="Volunteer"></VolunteerActivismIcon>
            </IconButton>

            <IconButton>
                <OfflineBoltIcon fontSize="large" className="OfflineBolt"></OfflineBoltIcon>
            </IconButton>


        </div>
    )
}

export default Footer
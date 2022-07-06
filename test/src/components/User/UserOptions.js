import React, { useState } from 'react';
import { Button, Menu, MenuItem } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import  { useNavigate }  from 'react-router-dom'

const UserOptions = ({logout, user}) => {
    const navigate = useNavigate()

    const [anchorEl, setAnchorEl] = useState(null)
    const open = Boolean(anchorEl)

    const handleClick = (event) => setAnchorEl(event.currentTarget)
    const handleClose = () => setAnchorEl(null)
    const handleLogout = () => {
        logout()
        navigate('/', {replace: 'true'})
    }
    const handleOrders = () => {
        navigate('/orders', {replace: 'true'})
    }

    return (
        <>
        <div style={{display: 'grid'}}>
            {user.email}
            <Button
                id="basic-button"
                variant='contained'
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            >
                <PersonIcon />
            </Button>
        </div>
        <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
            'aria-labelledby': 'basic-button',
            }}
        >
            <MenuItem onClick={handleClose}>Perfil</MenuItem>
            <MenuItem onClick={handleOrders}>Mis Ordenes</MenuItem>
            <MenuItem onClick={handleLogout}>Logout</MenuItem>
        </Menu>
      </>
    );
};

export default UserOptions;
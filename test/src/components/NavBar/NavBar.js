import React, { useState, useContext, useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { TextField } from '@mui/material';
import LinearProgress from '@mui/material/LinearProgress';
import { Link } from 'react-router-dom';

import UserContext from '../../context/UserContext';
import LoginModal from '../User/LoginModal';
import CartWidget from '../Cart/CartWidget';
import UserOptions from '../User/UserOptions';
import validatorCustom from '../../utils/validator';
import './NavBar.css';

const pages = [
                {
                  name: 'Mesas',
                  path: 'category/mesa'
                },
                {
                  name: 'Barras',
                  path: 'category/barra'
                },
                {
                  name: 'Sentar',
                  path: 'category/sentar'
                },
                {
                  name: 'Colgantes',
                  path: 'category/colgante'
                },
                {
                  name: 'Contacto',
                  path: 'Contact'
                }
              ]

const NavBar = () => {
  
  const {
          login, 
          user, 
          logout,
          authListener
  } = useContext(UserContext);
  
  const isValidErrors = () => Object.values(errors).filter(error => typeof error !== "undefined").length > 0;
  
  const [loginValues, setLoginValues] = useState({
    email: '',
    password: ''
  })
  const [errors, setErrors] = useState({
    email: '',
    password: ''
  })
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isValid, setIsValid] = useState(false);
  
  useEffect(() => {
    authListener();
  }, [])
  useEffect(() => {
    !isValidErrors() ? setIsValid(true) : setIsValid(false) 
  }, [errors])

  const handleModal = () => setOpen(!open);
  const handleSubmit = (e) => {
    setLoading(true)
    e.preventDefault()
    setTimeout(() => {
      login(loginValues)
      setOpen(false)
      setLoading(false)
    }, 3000)
  }
  const handleFormChange = (e) => {
    const {value, name} = e.target
    setLoginValues({...loginValues, [name]: value})
    let result = validatorCustom(value, name);
    setErrors({...errors, [name]: Object.values(result)[0]})
  }
  const handleOpenNavMenu = (event) => setAnchorElNav(event.currentTarget);
  const handleCloseNavMenu = () => setAnchorElNav(null);

  return (
    <>
      <AppBar position="static" className='nav-custom'>
        <Container maxWidth="xl" >
          <Toolbar disableGutters>

            <Link to={'/'}>
              <img src="/aliwenLogoHD.png" alt="logo" className='img-custom'></img>
            </Link>

            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenNavMenu}
                  color="inherit"
                >
                  <MenuIcon />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorElNav}
                  anchorOrigin={{
                      vertical: 'bottom',
                      horizontal: 'left',
                  }}
                  keepMounted
                  transformOrigin={{
                      vertical: 'top',
                      horizontal: 'left',
                  }}
                  open={Boolean(anchorElNav)}
                  onClose={handleCloseNavMenu}
                  sx={{
                      display: { xs: 'block', md: 'none' },
                  }}
                >
                {pages && pages.map((page, i) => (
                    <MenuItem key={i} onClick={handleCloseNavMenu}>
                      <Link to={`${page.path}`}>
                        <Typography textAlign="center" >{page.name}</Typography>
                      </Link>
                    </MenuItem>
                ))}
                </Menu>
            </Box>
            

            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              {pages.map((page, i) => (
                <Button
                  key={i}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  <Link to={`${page.path}`} style={{color: 'white'}}>
                    {page.name}
                  </Link>
                </Button>
              ))}
            </Box>
            
            
            <div style={{display:'flex'}}>
              <CartWidget />
              {
                user === '' ?
                  <Button 
                    variant="contained"
                    onClick={handleModal}
                  >
                    Login
                  </Button>
                :
                  <UserOptions 
                    logout={logout}
                    user={user}
                  />
              }
            </div>
          </Toolbar>
        </Container>
      </AppBar>

      {
        open && (
          <LoginModal 
              handleModal={handleModal} 
              open={open} 
          >
            <form onSubmit={handleSubmit}>
              <TextField
                name="email"
                label="Email"
                variant="outlined"
                margin="normal"
                onChange={handleFormChange}
                error={errors.email ? true : false}
                helperText={errors.email}
                value={loginValues.email}
              />
              <TextField
                name="password"
                label="Password"
                variant="outlined"
                margin="normal"
                type='password'
                onChange={handleFormChange}
                error={errors.password ? true : false}
                helperText={errors.password}
                value={loginValues.password}
              />
              <div className='button-form-login'>
                <Button 
                  type='submit'
                  variant='contained'
                  disabled={!isValid}
                >
                    Login
                </Button>
              </div>
              {
                loading &&
                  <div className='linear-progress' >
                    <LinearProgress color="inherit" />
                  </div>
              }
            </form>
          </LoginModal>
        )
      }
    </>
  
  
  );
};
export default NavBar;

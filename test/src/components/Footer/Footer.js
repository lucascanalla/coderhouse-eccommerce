import { Container, Button } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import './Footer.css'

const Footer = () => {
    return (
        <>
        <div style={{marginTop:'65px', backgroundColor: '#e3d4b7', paddingBottom: '20px'}}>
            <a href='https://instagram.com/aliwen.muebles'>
                <h2 className='p-footer'>
                    <InstagramIcon style={{marginRight: '5px'}}/>
                    <img style={{width: '15%'}} alt='footer_photo' src='/aliwenH1Png.png' />
                </h2>
                <p>Estamos en Instagram</p>
                <Button variant='outlined'>
                    Seguinos
                </Button>
            </a>
        </div>
        <div className='footer-custom'>
            <Container>
                <p style={{color:'white', padding: '25px', margin: '0px'}}>
                    Copyright 2022
                </p>
            </Container>
        </div>
        </>
    );
};

export default Footer;
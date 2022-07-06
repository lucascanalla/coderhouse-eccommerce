import { Button } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import './pages.css'

const Whatsapp = () => {

    return (
        <a href='https://api.whatsapp.com/send?phone=+51987654321' target='_blank' rel="noreferrer" >
            <Button className='btn-wsp'>
                <WhatsAppIcon />
            </Button>
        </a>
    );
};

export default Whatsapp;
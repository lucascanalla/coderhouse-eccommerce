import { Typography } from '@mui/material';
import { Breadcrumbs } from '@mui/material';
import { Link } from '@mui/material';
import  { useNavigate }  from 'react-router-dom'
import React from 'react';


const ItemBreadcrumb = ({title, category, subcategory}) => {

    const navigate = useNavigate()

    const handleBreadcrumbClick = (e) => {
        if(e.target.id){
            navigate((e.target.id).toLowerCase(), {replace: 'true'})
        }
        e.preventDefault()
    }

    return (
        <div className='breadcrumb-custom' role="presentation" onClick={handleBreadcrumbClick}>
            <Breadcrumbs aria-label="breadcrumb">
                <Link underline="hover" color="inherit" id='/'>
                    Inicio
                </Link>
                <Link underline="hover" color="inherit" id={`/category/${category}`}>
                    {category}
                </Link>
                <Typography color="text.primary">{title}</Typography>
            </Breadcrumbs>
      </div>
    );
};

export default ItemBreadcrumb;
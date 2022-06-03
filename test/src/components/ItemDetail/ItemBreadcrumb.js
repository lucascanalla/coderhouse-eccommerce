import { Typography } from '@mui/material';
import { Breadcrumbs } from '@mui/material';
import { Link } from '@mui/material';
import React from 'react';


const ItemBreadcrumb = ({title, category, subcategory}) => {

    const handleBreadcrumbClick = (e) => {
        e.preventDefault()
    }

    return (
        <div className='breadcrumb-custom' role="presentation" onClick={handleBreadcrumbClick}>
            <Breadcrumbs aria-label="breadcrumb">
                <Link underline="hover" color="inherit" href="/">
                    Inicio
                </Link>
                <Link underline="hover" color="inherit" href="/">
                    {category}
                </Link>
                {/* <Link underline="hover" color="inherit" href="/">
                    {subcategory}
                </Link> */}
                <Typography color="text.primary">{title}</Typography>
            </Breadcrumbs>
      </div>
    );
};

export default ItemBreadcrumb;
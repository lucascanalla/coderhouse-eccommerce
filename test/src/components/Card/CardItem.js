import React from 'react'
import { Grid, Typography } from "@mui/material"
import { Button, Card, CardContent, CardActionArea, CardMedia, CardActions } from "@mui/material"
import './Card.css'

const CardItem = ({product}) => {

    return(
        <>
            <Grid item md={3} className="grid-custom">
                <Card>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="140"
                            image={product.img}
                            alt="product"
                            />
                        <CardContent>
                            <p className='p-card-custom'>{product.title}</p>
                            <span>${product.price}</span>
                        </CardContent>
                    </CardActionArea>
                    <CardActions style={{display:'block'}} >
                        <Button size="medium" color="primary" variant="contained">
                            <Typography variant="button" display="block" gutterBottom>
                                Detalle
                            </Typography>
                        </Button>
                    </CardActions>
                </Card>
            </Grid>
        </>
    )
}

export default CardItem
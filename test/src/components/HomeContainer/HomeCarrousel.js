import React from 'react';
import Carousel from 'react-material-ui-carousel'
import HomeCarrouselItem from './HomeCarrouselItem';

const HomeCarrousel = () => {

    const items = [
        {
            name: "EL TALLER",
            description: "Todos nuestros muebles estan ensamblados en el taller.",
            img: 'Carrousel1.png'

        },
        {
            name: "SOLDADURA",
            description: "Fundimos electrodos para amalgamar el acero. Acero SAE1045 de primera calidad. ",
            img: 'Carrousel2.png'
            
        }
    ]

    return (
        <Carousel
            style={{marginBottom: '15px'}}
        >
            {
                items.map( (item, i) => {
                    return(
                        <HomeCarrouselItem key={i} item={item} />
                    )
                })
            }
        </Carousel>
    );
};

export default HomeCarrousel;
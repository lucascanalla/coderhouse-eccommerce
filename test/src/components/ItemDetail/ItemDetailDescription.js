import { Divider } from "@mui/material";

const ItemDetailDescription = ({description}) => {
    return (
        <>
        <h4 style={{marginTop: '10px', marginBottom: '10px'}}>
            Caracteristicas del Producto
        </h4>
        <Divider variant="middle" />
        <p>{description}</p>
        </>
    );
};

export default ItemDetailDescription;
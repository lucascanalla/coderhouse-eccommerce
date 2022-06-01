import React from 'react';
import ItemListContainer from '../Item/ItemListContainer';

const Error = () => {
    return (
        <div>
            <h1>Error 404</h1>
            <p>Pagina no encontrada</p>
            <p>Quiza te interese: </p>
            <ItemListContainer />
        </div>
    );
};

export default Error;
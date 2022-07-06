# Aliwen Ecommerce Project

Ecommerce de muebles de diseño de la ciudad de Cordoba.

## Build

Usar [npm](https://npm.com/) para crear proyecto.

```bash
npm run build
```

## Usage

Una vez instalado el proyecto, con el comando antes mencionado, ejecutar comando 
```bash
npm start
```
El proyecto esta listo para usarse en http://localhost:3000

## Funcionalidades
El proyecto cuenta con un catalogo ordenado por categorias (Mesas, Barras, Sentar, Colgantes)
donde se puede navegar entre los productos y en caso de elegir uno, agregar directamente desde el catalogo o Ver Detalle para ver caracteristicas (colores disponibles, material, etc).

El carrito de compras se accede desd el NavBar y se despliega un Modal con una vista previa y permitiendo al usuario eliminar algun producto.

En caso de continuar con la compra, se redirecciona a la pantalla de Checkout, que contiene un Steper (Wizard) que consta de 3 pasos:

1- Tabla dinamica que permite modificar cantidades y/o eliminar items.
Tambien en el Footer de la tabla se encuentra un campo en el cual se puede validar algun cupon de descuento. Este cupon busca en la coleccion "descuentos" dentro de firebase y en caso de que sea valido, lo aplica. (Probar con aliwen123)

2- Formulario con campos para la entrega y facturacion. Estos campos son validados usando la libreria [validate](https://www.npmjs.com/package/validator). 

3- Metodo de pago implememtado con 3 radio button (Efectivo, Mercado Pago, Transferencia)
La opcion de Mercado Pago esta todavia en construccion.

Tambien la aplicacion permite loguearse y ver que ordenes ha comprado el usuario.
Para loguerse, el boton de login se encuentra en el NavBar
(Probar, aliwen@gmail.com asd123)

## Contribuciones
A todo el equipo de profesores y tutores de [CoderHouse](https://coderhouse.com)
## Licencia
[MIT](https://choosealicense.com/licenses/mit/)

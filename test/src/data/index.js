const initialCards = [
    {
        id: 1,
        img: ['biota1.png', 'biota2.png'],
        title: 'BIOTA',
        description: 'Caño estructural 20x20mm y madera maciza - 40x30x70cm',
        category: 'Mesa',
        subcategory: 'Mesa de Luz',
        price: [{
                    type: 'Eucalipto',
                    price: 12500
                },
                {
                    type: 'Pino sin Nudos',
                    price: 10000
                }],
        stock: 2,
        niu: true
    },
    {
        id: 2,
        img: ['betula1.png', 'betula2.png' ],
        title: 'BETULA',
        description: 'Hierro y madera maciza - 40x30x70cm',
        category: 'Mesa',
        subcategory: 'Mesa de Luz',
        price: [{
                    type: 'Eucalipto',
                    price: 11250
                },
                {
                    type: 'Pino sin Nudos',
                    price: 8750
                }],
        stock: 0,
        niu: false
    },
    {
        id: 3,
        img: ['baoba.png'],
        title: 'BAOBA',
        description: 'Madera maciza - 30x40x15cm',
        category: 'Mesa',
        subcategory: 'Mesa de Luz',
        price: [{
                    type: 'Eucalipto',
                    price: 7500
                },
                {
                    type: 'Pino sin Nudos',
                    price: 4500
                }],
        stock: 2,
        niu: false
    },
    {
        id: 4,
        img: ['albizia1.png', 'albizia2.png' ],
        title: 'ALBIZIA',
        description: 'Caño 20x20mm y madera maciza 60cm de diámetro x 40cm de alto',
        category: 'Mesa',
        subcategory: 'Mesa Ratona',
        price: [{
                    type: 'Eucalipto',
                    price: 14500
                }],
        stock: 5,
        niu: false
    },
    {
        id: 5,
        img: ['araucaria1.png', 'araucaria2.png' ],
        title: 'ARAUCARIA',
        description: 'Caño 20x20mm y madera maciza con regrueso - 90x50x40cm',
        category: 'Mesa',
        subcategory: 'Mesa Auxiliar',
        price: [{
                    type: 'Eucalipto',
                    price: 17500
                },
                {
                    type: 'Pino sin Nudos',
                    price: 13900
                }],
        stock: 5,
        niu: false
    },
    {
        id:6,
        img: ['almez1.png', 'almez2.png' ],
        title: 'ALMEZ',
        description: 'Caño 20x20mm y concreto - 40x30x70cm',
        category: 'Mesa',
        subcategory: 'Mesa Auxiliar',
        price: [{
                    type: 'Concreto',
                    price: 9500
                }],
        stock: 5,
        niu: false
    },
    {
        id: 7,
        img: ['acacia1.png', 'acacia2.png' ],
        title: 'ACACIA',
        description: 'Hierro y madera maciza - 40x30x70cm',
        category: 'Mesa',
        subcategory: 'Mesa Auxiliar',
        price: [{
                    type: 'Eucalipto',
                    price: 7500
                },
                {
                    type: 'Pino sin Nudos',
                    price: 6900
        }],
        stock: 5,
        niu: false
    },
    {
        id: 8,
        img: ['agonis1.png', 'agonis2.png' ],
        title: 'AGONIS',
        description: 'Caño 20x20mm y madera maciza - 30x30x75cm',
        category: 'Mesa',
        subcategory: 'Mesa de Arrime',
        price: [{
                    type: 'Eucalipto',
                    price: 6500
                },
                {
                    type: 'Pino sin Nudos',
                    price: 5900
        }],
        stock: 5,
        niu: false
    },
    {
        id: 9,
        img: ['azahar1.png', 'azahar2.png' ],
        title: 'AZAHAR',
        description: 'Caño 20x20mm y madera maciza - 60x30x70cm',
        category: 'Mesa',
        subcategory: 'Mesa de Arrime',
        price: [{
                    type: 'Eucalipto',
                    price: 9500
                },
                {
                    type: 'Pino sin Nudos',
                    price: 8500
        }],
        stock: 5,
        niu: false
    },
    {
        id: 10,
        img: ['azahar1.png', 'azahar2.png' ],
        title: 'AZAHAR',
        description: 'Caño 20x20mm y madera maciza - 60x30x70cm',
        category: 'Mesa',
        subcategory: 'Mesa de Arrime',
        price: [{
                    type: 'Eucalipto',
                    price: 9500
                },
                {
                    type: 'Pino sin Nudos',
                    price: 8500
        }],
        stock: 5,
        niu: false
    },
    {
        id: 11,
        img: ['ficus.png'],
        title: 'FICUS',
        description: 'Madera maciza - 120x25x90cm',
        category: 'Barra',
        subcategory: 'Recibidor',
        price: [{
                    type: 'Eucalipto',
                    price: 28000
                },
                {
                    type: 'Pino sin Nudos',
                    price: 23000
        }],
        stock: 5,
        niu: false
    },
    {
        id: 12,
        img: ['fotinia.png'],
        title: 'FOTINIA',
        description: 'Madera maciza y concreto - 120x25x90cm',
        category: 'Barra',
        subcategory: 'Recibidor',
        price: [{
                    type: 'Eucalipto',
                    price: 25900
                },
                {
                    type: 'Pino sin Nudos',
                    price: 21900
        }],
        stock: 5,
        niu: false
    },
    {
        id: 13,
        img: ['farolillo.png'],
        title: 'FAROLILLO',
        description: 'Caño estructural 20x20mm y madera maciza - 60x25x90cm',
        category: 'Barra',
        subcategory: 'Recibidor',
        price: [{
                    type: 'Eucalipto',
                    price: 15900
                },
                {
                    type: 'Pino sin Nudos',
                    price: 13900
        }],
        stock: 5,
        niu: false
    },
    {
        id: 14,
        img: ['morera1.png','morera2.png'],
        title: 'MORERA',
        description: 'Caño 20x20mm y madera maciza - Altura de asiento 70cm, altura total 90cm',
        category: 'Sentar',
        subcategory: 'Banqueta',
        price: [{
                    type: 'Eucalipto',
                    price: 9500
                },
                {
                    type: 'Pino sin Nudos',
                    price: 8500
                },
                {
                    type: 'Chapa',
                    price: 8900
                }
                ],
        stock: 5,
        niu: false
    }
];


export { initialCards }
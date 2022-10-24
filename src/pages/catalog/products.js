
const products = {
    1:  {
            name: 'Produto 1 ',
            description: 'Praesent eget commodo ligula. Mauris malesuada in mauris eu porta. Proin aliquet lorem orci, a hendrerit odio sagittis sit amet. Ut tempor in dui nec rutrum. Donec non dui id nunc vulputate cursus vel sed dolor. Donec egestas diam nec condimentum volutpat. Proin at rutrum velit, condimentum tristique arcu.',
            images: ['https://m.media-amazon.com/images/I/51ZaFUlkqeL._AC_SX679_.jpg',
                     'https://m.media-amazon.com/images/I/51GGqZtE7IL._AC_SX679_.jpg',
                     'https://m.media-amazon.com/images/I/416VbNthIhL._AC_SX679_.jpg',
                     'https://m.media-amazon.com/images/I/51d6dzfGROL._AC_SX679_.jpg',
                     'https://m.media-amazon.com/images/I/51Cces8SIoL._AC_SX679_.jpg'
                    ],
            price: 299.99,
            promo_price: 199.90,
            categories:[2]
        }, 
    2:  {
            name: 'Produto 2',
            description: 'Praesent eget commodo ligula. Mauris malesuada in mauris eu porta. Proin aliquet lorem orci, a hendrerit odio sagittis sit amet. Ut tempor in dui nec rutrum. Donec non dui id nunc vulputate cursus vel sed dolor. Donec egestas diam nec condimentum volutpat. Proin at rutrum velit, condimentum tristique arcu.',
            images: ['https://m.media-amazon.com/images/I/51ZaFUlkqeL._AC_SX679_.jpg',],
            price: 542.90,
            categories:[1]
        }, 
    3:  {
        name: 'Produto 3',
        description: 'Praesent eget commodo ligula. Mauris malesuada in mauris eu porta. Proin aliquet lorem orci, a hendrerit odio sagittis sit amet. Ut tempor in dui nec rutrum. Donec non dui id nunc vulputate cursus vel sed dolor. Donec egestas diam nec condimentum volutpat. Proin at rutrum velit, condimentum tristique arcu.',
        images: ['https://m.media-amazon.com/images/I/51ZaFUlkqeL._AC_SX679_.jpg',
                 'https://m.media-amazon.com/images/I/51GGqZtE7IL._AC_SX679_.jpg',
                 'https://m.media-amazon.com/images/I/416VbNthIhL._AC_SX679_.jpg',
                 'https://m.media-amazon.com/images/I/51d6dzfGROL._AC_SX679_.jpg',
                 'https://m.media-amazon.com/images/I/51Cces8SIoL._AC_SX679_.jpg'
                ],
        price: 299.90,
        promo_price: 199.99,
        categories:[2]
    }, 
    4:  {
        name: 'Produto 4',
        description: 'Praesent eget commodo ligula. Mauris malesuada in mauris eu porta. Proin aliquet lorem orci, a hendrerit odio sagittis sit amet. Ut tempor in dui nec rutrum. Donec non dui id nunc vulputate cursus vel sed dolor. Donec egestas diam nec condimentum volutpat. Proin at rutrum velit, condimentum tristique arcu.',
        images: ['https://m.media-amazon.com/images/I/51ZaFUlkqeL._AC_SX679_.jpg',
                 'https://m.media-amazon.com/images/I/51GGqZtE7IL._AC_SX679_.jpg',
                 'https://m.media-amazon.com/images/I/416VbNthIhL._AC_SX679_.jpg',
                 'https://m.media-amazon.com/images/I/51d6dzfGROL._AC_SX679_.jpg',
                 'https://m.media-amazon.com/images/I/51Cces8SIoL._AC_SX679_.jpg'
                ],
        price: 299.99,
        promo_price: 199.99,
        categories:[2]
    },
    5:  {
            name: 'Produto 5',
            description: 'Praesent eget commodo ligula. Mauris malesuada in mauris eu porta. Proin aliquet lorem orci, a hendrerit odio sagittis sit amet. Ut tempor in dui nec rutrum. Donec non dui id nunc vulputate cursus vel sed dolor. Donec egestas diam nec condimentum volutpat. Proin at rutrum velit, condimentum tristique arcu.',
            images: ['https://product-hub-prd.madeiramadeira.com.br/3101889/images/e0cf13fe-da44-4405-b3f9-94e08ffff35a67593139estantearranhadorpetsiamespretoacpretoac53445323381600x600.jpg?width=500&canvas=1:1&bg-color=FFF',],
            price: 299.99,
            categories:[1]
        }, 
    6:  {
            name: 'Produto 6',
            description: 'Praesent eget commodo ligula. Mauris malesuada in mauris eu porta. Proin aliquet lorem orci, a hendrerit odio sagittis sit amet. Ut tempor in dui nec rutrum. Donec non dui id nunc vulputate cursus vel sed dolor. Donec egestas diam nec condimentum volutpat. Proin at rutrum velit, condimentum tristique arcu.',
            images: ['https://product-hub-prd.madeiramadeira.com.br/3101889/images/e0cf13fe-da44-4405-b3f9-94e08ffff35a67593139estantearranhadorpetsiamespretoacpretoac53445323381600x600.jpg?width=500&canvas=1:1&bg-color=FFF'],
            price: 299.99,
            categories:[1]
        }, 
    7:  {
            name: 'Produto 7',
            description: 'Praesent eget commodo ligula. Mauris malesuada in mauris eu porta. Proin aliquet lorem orci, a hendrerit odio sagittis sit amet. Ut tempor in dui nec rutrum. Donec non dui id nunc vulputate cursus vel sed dolor. Donec egestas diam nec condimentum volutpat. Proin at rutrum velit, condimentum tristique arcu.',
            images: ['https://product-hub-prd.madeiramadeira.com.br/3101889/images/e0cf13fe-da44-4405-b3f9-94e08ffff35a67593139estantearranhadorpetsiamespretoacpretoac53445323381600x600.jpg?width=500&canvas=1:1&bg-color=FFF'],
            price: 299.99,
            promo_price: 199.99,
            categories:[1]
        }, 
    8:  {
            name: 'Produto 8',
            description: 'Praesent eget commodo ligula. Mauris malesuada in mauris eu porta. Proin aliquet lorem orci, a hendrerit odio sagittis sit amet. Ut tempor in dui nec rutrum. Donec non dui id nunc vulputate cursus vel sed dolor. Donec egestas diam nec condimentum volutpat. Proin at rutrum velit, condimentum tristique arcu.',
            images: ['https://product-hub-prd.madeiramadeira.com.br/3101889/images/e0cf13fe-da44-4405-b3f9-94e08ffff35a67593139estantearranhadorpetsiamespretoacpretoac53445323381600x600.jpg?width=500&canvas=1:1&bg-color=FFF'],
            price: 265.90,
            categories:[1]
        },
    }
    
const categories = {
    1:{name: 'Gatos'},
    2:{name: 'Cães'},
    3:{name: 'Roedores'},
    4:{name: 'Aves'}
}    

module.exports = {
 products,
 categories
}
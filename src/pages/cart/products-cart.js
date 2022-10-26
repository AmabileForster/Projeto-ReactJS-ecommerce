
const productsCart = {
    1:  {
            name: 'Produto 1 ',
            description: 'Praesent eget commodo ligula. Mauris malesuada in mauris eu porta. Proin aliquet lorem orci, a hendrerit odio sagittis sit amet. Ut tempor in dui nec rutrum. Donec non dui id nunc vulputate cursus vel sed dolor. Donec egestas diam nec condimentum volutpat. Proin at rutrum velit, condimentum tristique arcu.',
            images: ['https://cobasi.vteximg.com.br/arquivos/ids/1004186/image-3541490d04fd41888e081223588e681c.jpg?v=637952127916300000',
                     'https://cobasi.vteximg.com.br/arquivos/ids/1004187/image-ffc69ec883cc44a2be766934de5b2b37.jpg?v=637952127916470000',
                     'https://cobasi.vteximg.com.br/arquivos/ids/1004185/image-1f3d03d0408149eeb70a6c47fa26e1c0.jpg?v=637952127915830000',
                     'https://cobasi.vteximg.com.br/arquivos/ids/1004189/image-6624783c0090407fa7fbe6b12ad2da6e.jpg?v=637952127916630000',
                     'https://cobasi.vteximg.com.br/arquivos/ids/1004190/image-dd2f6c3f1aba422bbfc19b432785e96f.jpg?v=637952127916800000',
                     'https://cobasi.vteximg.com.br/arquivos/ids/1004188/image-4e93ba70d15449f19ca12f56cbea3f19.jpg?v=637952127916630000',
                     'https://cobasi.vteximg.com.br/arquivos/ids/1004191/image-680f8bf1eca1438dadd3aa5f3f0f9f64.jpg?v=637952127917400000'
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
}
    
const categories = {
    1:{name: 'Gatos'},
    2:{name: 'Cães'},
    3:{name: 'Roedores'},
    4:{name: 'Aves'}
}    

module.exports = {
 productsCart,
 categories
}
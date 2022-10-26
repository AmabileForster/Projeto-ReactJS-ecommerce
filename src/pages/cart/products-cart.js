
const productsCart = {
    1:  {
            name: 'Produto 1 ',
            description: 'Praesent eget commodo ligula. Mauris malesuada in mauris eu porta. Proin aliquet lorem orci, a hendrerit odio sagittis sit amet. Ut tempor in dui nec rutrum. Donec non dui id nunc vulputate cursus vel sed dolor. Donec egestas diam nec condimentum volutpat. Proin at rutrum velit, condimentum tristique arcu.',
            images: ['https://cobasi.vteximg.com.br/arquivos/ids/1004186/image-3541490d04fd41888e081223588e681c.jpg?v=637952127916300000',],
            price: 299.99,
            promo_price: 199.90,
            categories:[2],
            quantity: 2
        }, 
    2:  {
            name: 'Produto 2',
            description: 'Praesent eget commodo ligula. Mauris malesuada in mauris eu porta. Proin aliquet lorem orci, a hendrerit odio sagittis sit amet. Ut tempor in dui nec rutrum. Donec non dui id nunc vulputate cursus vel sed dolor. Donec egestas diam nec condimentum volutpat. Proin at rutrum velit, condimentum tristique arcu.',
            images: ['https://m.media-amazon.com/images/I/51ZaFUlkqeL._AC_SX679_.jpg',],
            price: 542.90,
            categories:[1],
            quantity: 2
        }, 
    3:  {
        name: 'Produto 3',
        description: 'Praesent eget commodo ligula. Mauris malesuada in mauris eu porta. Proin aliquet lorem orci, a hendrerit odio sagittis sit amet. Ut tempor in dui nec rutrum. Donec non dui id nunc vulputate cursus vel sed dolor. Donec egestas diam nec condimentum volutpat. Proin at rutrum velit, condimentum tristique arcu.',
        images: ['https://m.media-amazon.com/images/I/51ZaFUlkqeL._AC_SX679_.jpg',],
        price: 299.90,
        promo_price: 199.99,
        categories:[2],
        quantity: 1
    }, 
    4:  {
        name: 'Produto 4',
        description: 'Praesent eget commodo ligula. Mauris malesuada in mauris eu porta. Proin aliquet lorem orci, a hendrerit odio sagittis sit amet. Ut tempor in dui nec rutrum. Donec non dui id nunc vulputate cursus vel sed dolor. Donec egestas diam nec condimentum volutpat. Proin at rutrum velit, condimentum tristique arcu.',
        images: ['https://m.media-amazon.com/images/I/51ZaFUlkqeL._AC_SX679_.jpg',],
        price: 299.99,
        categories:[2],
        quantity: 3
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
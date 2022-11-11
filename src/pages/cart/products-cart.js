
const productsCart = {
    1:  {
        name: 'Toquinha de veludo',
        description: 'Dê ao seu gatinho uma cama própria. Esta confortável cama de dormir para animais de estimação apresenta uma forma de tenda fechada e uma almofada removível, fundo antiderrapante e design dobrável. Proporcionando um lugar aconchegante para os animais de estimação se divertirem e brincarem.',
        images: ['https://m.media-amazon.com/images/I/617Iv4-PNSL._AC_SL1000_.jpg'],
        price: 106.70,
        promo_price: 95.99,
        categories:[1, 2],
        quantity: 2
        }, 
    2:  {
        name: 'Storm Trooper Frisbee',
        description: 'Frisbee para cães que a força esteja com você e seu cachorro! Agora seu cão pode se juntar ao seu amor de Star Wars com seu próprio brinquedo de Frisbee de corda Star Wars Storm Trooper para cães. Feito de um tecido de poliéster durável, porém leve, este frisbee para cães tem alças de corda resistentes para uma maneira divertida e fácil de tornar a hora de brincar no parque ainda melhor. Transforme seu passeio normal à tarde com este frisbee para cães fácil de carregar e você terá instantaneamente um jogo favorito para você e seu amigo peludo.',
        images: ['https://m.media-amazon.com/images/I/71OYwtul8xL._AC_SL1500_.jpg'],
        price: 96.46,
        categories:[2],
        quantity: 1
        }, 
    3:  {
        name: 'Roda de exercício',
        description: 'Feito de material de madeira de qualidade, ecológico, não tóxico e seguro para seu animal de estimação. Com acabamento fino, a superfície é segura e confortável para escalar. Brinquedo de roda de corrida silencioso, fornecendo um lugar engraçado para os animais de estimação brincarem e descansarem. Ajuda seu hamster a se exercitar mais e desenvolver a capacidade de equilíbrio e agilidade. Ótimo para hamster, mouse e outros pequenos animais peludos',
        images: ['https://m.media-amazon.com/images/I/51bJpLUNLHL._AC_SL1001_.jpg'],
        price: 138.17,
        categories:[3],
        quantity: 3
        },
    4:  {
        name: 'Rede para pássaros',
        description: 'Esta rede de madeira para pássaros pode ajudar o pássaro a moer seu bico, o que pode evitar que seu bico seja muito longo para comer corretamente. Também pode exercitar efetivamente o aptidão físico do pássaro. Não é apenas adequada para vários pássaros, mas também perfeita para pequenos animais, como hamster, porquinhos-da-índia, ratos, chinchilas, gerbils etc.',
        images: ['https://m.media-amazon.com/images/I/51cA03sBgyL._AC_SL1001_.jpg'],
        price: 100.45,
        promo_price: 90.38,
        categories:[4, 3],
        quantity: 1
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
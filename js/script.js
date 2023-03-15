const linkApiProdutos = "https://dummyjson.com/products";


// Pegar objetos do DOM

const produtos_oferta_dia = [...document.querySelectorAll(".produtos_oferta_dia")];

// Pegar objetos do DOM

// Funções

const criarProdutosOfertaDia = (linkImg,textImg,divOferta) =>{

    const cardProduto = document.createElement('div');
    cardProduto.classList.add('card');
    cardProduto.style = "min-width: 25vw; height: 30vw;";

    const imgCardProduto = document.createElement('img');
    imgCardProduto.classList.add('card-img-top');
    imgCardProduto.classList.add('img_oferta_dia');
    imgCardProduto.src = linkImg;

    cardProduto.appendChild(imgCardProduto);

    const cardProdutoBody = document.createElement('div');
    cardProdutoBody.classList.add('card-body');

    const pCardProduto = document.createElement('p');
    pCardProduto.classList.add('card-text');
    pCardProduto.innerText = textImg;

    cardProdutoBody.appendChild(pCardProduto);

    cardProduto.appendChild(cardProdutoBody);

    divOferta.appendChild(cardProduto);
}

// Funções


// Eventos

fetch(linkApiProdutos)
    .then(res => res.json())
    .then(dados =>{
        const produtosApi = dados.products;
        let i = 0

        while(i<3){

        produtos_oferta_dia.map((el)=>{

            let produtoAleatorio = produtosApi[Math.floor(Math.random() * 30)];
        
            let linkImg = produtoAleatorio.images[Math.floor(Math.random() * 3)];
            let textImg = produtoAleatorio.title;
        
        
            criarProdutosOfertaDia(linkImg,textImg,el);
        })
        i++;
    }
    });



// Eventos
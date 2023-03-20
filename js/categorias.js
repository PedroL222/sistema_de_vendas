
const criarProdutosOfertaDia = (linkImg,textImg,divOferta,textPreco,textDesc)=>{

    const cardProduto = document.createElement('div');
    cardProduto.classList.add('card');
    cardProduto.style = "min-width: 25vw; max-width: 25vw; min-height: 30vw; max-height: 30vw;";

    const imgCardProduto = document.createElement('img');
    imgCardProduto.classList.add('card-img-top');
    imgCardProduto.classList.add('img_oferta_dia');
    imgCardProduto.src = linkImg;

    cardProduto.appendChild(imgCardProduto);

    const cardProdutoBody = document.createElement('div');
    cardProdutoBody.classList.add('card-body');

    const CardProduto = document.createElement('p');
    CardProduto.classList.add('card-text');
    CardProduto.innerText = textImg;

    cardProdutoBody.appendChild(CardProduto);

    const precoProduto = document.createElement('span');
    precoProduto.classList.add('card-text');
    precoProduto.innerText = textPreco;

    cardProdutoBody.appendChild(precoProduto);

    const descProduto = document.createElement('p');
    precoProduto.classList.add('card-text');
    precoProduto.innerText = textDesc;

    cardProdutoBody.appendChild(descProduto);

    cardProduto.appendChild(cardProdutoBody);

    divOferta.appendChild(cardProduto);
}

const buscarCategoria =()=>{
    const sel_categoria = document.querySelector("#select_categorias");
    const opc_categoria = sel_categoria.options[sel_categoria.selectedIndex].value;
    const produtos_oferta_dia = [...document.querySelectorAll(".produtos_oferta_dia")];


    

if(opc_categoria != "Categorias"){
    linkApiProdutos = `https://dummyjson.com/products/category/${opc_categoria}`;

    
fetch(linkApiProdutos)
.then(res => res.json())
.then(dados =>{
    const produtosApi = dados.products;
    let i = 0
    console.log(produtosApi);

    while(i<3){

    produtos_oferta_dia.map((el)=>{

        let produtoAleatorio = produtosApi[Math.floor(Math.random() * produtosApi.length)];
    
        let linkImg = produtoAleatorio.images[Math.floor(Math.random() * produtoAleatorio.images.length)];
        let textImg = produtoAleatorio.title;
        let textPreco = produtoAleatorio.price;
        let textDesc = produtoAleatorio.description;
    
    
        criarProdutosOfertaDia(linkImg,textImg,el,textPreco,textDesc);
    })
    i++;
}
});

fetch('https://dummyjson.com/products')
.then(res => res.json())
.then(console.log);
}


}

// Funções


// Eventos

setInterval(buscarCategoria,3000);


// Eventos



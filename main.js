const productscontainer  = document.querySelector('.productos-container');

const productList = [];

productList.push(
    {
    imageP: './img/productos/imagen2-1.webp',
    paquete: 'Paquete: Fin de Semana',
    tiempo: '(2 Hrs + 1 Hr)',
    precio: 1500,
    }
);
productList.push(
    {
    imageP: './img/productos/imagen2-2.webp',
    paquete: 'Paquete: Tradicional',
    tiempo: '(2 Hrs)',
    precio: 1050,
    }
);
productList.push(
    {
    imageP: './img/productos/imagen2.webp',
    paquete: 'Paquete: Basico',
    tiempo: '(1 Hr)',
    precio: 550,
    }
);
productList.push(
    {
    imageP: './img/productos/imagen4.jpg',
    paquete: 'Paquete: Cumpleañero',
    tiempo: '(4 Hrs)',
    precio: 1900,
    }
);
productList.push(
    {
    imageP: './img/productos/imagen5.webp',
    paquete: 'Paquete: Isla de las muñecas',
    tiempo: '(6 Hrs)',
    precio: 3000,
    }
);
productList.push(
    {
    imageP: './img/productos/imagen6.webp',
    paquete: 'Paquete: Lun - Vier',
    tiempo: '(2 hrs + 1 hr gratis)',
    precio: 1400,
    }
);

function renderProducts(array){
    for(product of array){
        const ProductContainer = document.createElement('div');
        ProductContainer.classList.add('Producto');

        /*Img */
        const image = document.createElement('img');
        image.setAttribute('src', product.imageP);

        /* paquete-info */
        const productInfo = document.createElement('div');
        productInfo.classList.add('paquete-info');

        
        const Precio = document.createElement('p');
        Precio.innerText = '$' +  product.precio;

        const Tiempo = document.createElement('p');
        Tiempo.innerText = product.tiempo;

        const Paquete = document.createElement('p');
        Paquete.innerText = product.paquete;

        productInfo.appendChild(Paquete);
        productInfo.appendChild(Tiempo);
        productInfo.appendChild(Precio);
        
        /* Button-container */
        const buttonContainer = document.createElement('div');
        buttonContainer.classList.add('button-container');

        const buttonDetails = document.createElement('button');
        buttonDetails.classList.add('details');
        buttonDetails.innerHTML = "Detalles";


        const buttonWhats = document.createElement('button');
        buttonWhats.classList.add('whats-product');
        buttonWhats.innerHTML = "Reserva por Whatsapp";
        const spanWhats = document.createElement('span');
        spanWhats.classList.add('icon-whats');

        buttonWhats.appendChild(spanWhats);

        buttonContainer.appendChild(buttonDetails);
        buttonContainer.appendChild(buttonWhats);

        ProductContainer.appendChild(image);
        ProductContainer.appendChild(productInfo);
        ProductContainer.appendChild(buttonContainer);

        productscontainer.appendChild(ProductContainer);

    }
}

renderProducts(productList);
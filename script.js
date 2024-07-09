// Función para mostrar más imágenes del producto
function mostrarMas(idProducto) {
    const productImages = {
        'producto1': [
            'img/volquete/2.jpeg',
            'img/volquete/1.jpeg'
            
        ],
        'producto2': [
            'img/cargador/2.jpeg',
            'img/cargador/3.jpeg'
        ],
        'producto3': [
            'img/remolcador/1.jpeg',
            'img/remolcador/2.jpeg',
            'img/remolcador/4.jpeg'
            
        ]
    };

    const gallery = document.getElementById('product-image-gallery');
    gallery.innerHTML = '';

    if (productImages[idProducto]) {
        productImages[idProducto].forEach(imgSrc => {
            const img = document.createElement('img');
            img.src = imgSrc;
            img.alt = `Imagen adicional de ${idProducto}`;
            gallery.appendChild(img);
        });
    }

    document.getElementById('product-images').style.display = 'block';

    // Ocultar todos los productos excepto el seleccionado
    hideAllProducts();
}

// Función para ocultar todos los productos
function hideAllProducts() {
    const products = document.querySelectorAll('.producto');
    products.forEach(product => {
        product.style.display = 'none';
    });
}

// Función para cerrar la ventana de imágenes adicionales
function closeProductImages() {
    document.getElementById('product-images').style.display = 'none';
    showAllProducts();
}

// Función para mostrar todos los productos
function showAllProducts() {
    const products = document.querySelectorAll('.producto');
    products.forEach(product => {
        product.style.display = 'block';
    });
}

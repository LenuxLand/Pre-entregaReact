const Productos = [
    { id: 1, nombre: "Producto 1", precio: 20, categoria: "remeras" },
    { id: 2, nombre: "Producto 2", precio: 35, categoria: "remeras" },
    { id: 3, nombre: "Producto 3", precio: 48, categoria: "remeras" },

]

export const getProductos = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(Productos);
        }, 500)
    })
}

export const getUnProducto = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            // Convert idItem to number
            const itemId = parseInt(id, 10);
            const producto = Productos.find((item) => item.id === itemId);
            resolve(producto);
        }, 500);
    });
};


export const getProdByCat = (idCategoria) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const productosCategoria = Productos.filter(item => item.categoria === idCategoria);
            resolve(productosCategoria);
        }, 500)
    })
}
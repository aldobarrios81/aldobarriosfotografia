const Anillos = [

    {
        ringid: 1,
        Nombre: "Anillo Halo",
        Precio: 3500,
        Path: "https://31190.s3.amazonaws.com/Catalogo/1.jpeg",
        Categoria: "Normal",
        Stock: 5
    },
    {
        ringid: 2,
        Nombre: "Anillo trilogy",
        Precio: 5500,
        Path: "https://31190.s3.amazonaws.com/Catalogo/2.jpeg",
        Categoria: "VIP",
        Stock: 9
    },
    {
        ringid: 3,
        Nombre: "Anillo Toi et moi",
        Precio: 7500,
        Path: "https://31190.s3.amazonaws.com/Catalogo/3.jpeg",
        Categoria: "VIP",
        Stock: 2
    }       
]

export const getProducts = () => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve (Anillos)
        }, 2000)
    })
}
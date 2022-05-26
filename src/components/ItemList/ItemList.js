import Item from "../Item/Item"


function ItemList ({products}) {
    return (
        products.map(products => (
            <Item

            key = {products.ringid}
            Nombre ={ products.Nombre}
            Path = {products.Path}
            Precio = {products.Precio}
            Stock = {products.Stock}
            Categoria = {products.Categoria}
            />
        )
    ))
}

export default ItemList
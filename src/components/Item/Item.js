import './Item.css';
// import ItemCount from '../ItemCount/ItemCount'
import Card from 'react-bootstrap/Card'

const Item = ({ringid, Nombre, Precio, Path, Categoria, Stock}) =>{
    
    return (
         <Card className='cardContainer' key={ringid}>
            <Card.Img className='cardImg' variant="top" src={Path} alt={Nombre} />
            <Card.Body>
                <Card.Text>Nombre: {Nombre}</Card.Text>
                <Card.Text>Categoria: {Categoria}</Card.Text>
                <Card.Text>Precio: {Precio}</Card.Text>
            </Card.Body>
            <br></br>
            <button>Ver detalle de producto</button>
            <br></br>
            <Card.Footer>
                  <Card.Text>Disponibles: {Stock}</Card.Text>
           
            </Card.Footer>
        </Card>
    )   
}

export default Item;
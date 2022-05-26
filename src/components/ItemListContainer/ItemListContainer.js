
import './ItemListContainer.css'; 
import { useState, useEffect } from 'react'
import ItemList from '../ItemList/ItemList';
import { getProducts } from '../../AsynMock'
// import { AWSDynamo } from '../../AWSDynamo'

const ItemListContainer = (props) => {
    const [item, setItem] = useState([])

    useEffect (() => {
        // AWSDynamo().then(response => {
         getProducts().then(response => {
            setItem(response)
        })
    }, []);
    
    return (
        <div>
            <h1>{props.greeting}</h1>
            <div className='contenedorCards'>
                <ItemList products = {item}/>
            </div>
        </div>    
    )
}

export default ItemListContainer;
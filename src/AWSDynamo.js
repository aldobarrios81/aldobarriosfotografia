// import ItemCount from '../ItemCount/ItemCount'
import React from "react";
class AWSDynamo extends React.Component {

	// Constructor
	constructor(props) {
		super(props);

		this.state = {
			AWSDynamo: [],
			DataisLoaded: false
		};
	}

	componentDidMount() {
		fetch(
"https://6o3ncndira.execute-api.us-east-1.amazonaws.com/dev/data"
)
			.then((res) => res.json())
			.then((json) => {
				this.setState({
					AWSDynamo: json,
					DataisLoaded: true
				});
			})
	}
	
}
export default AWSDynamo;
// <div className = "ItemListContainer">
// 		 	 {
// 		 		items.Items.map((item) => (
//                     <div     className='Box'>
// 		 		        <div key = { item.ringid } >
// 		 			        <h3>Producto: { item.Name }</h3>
//                             <img src={ item.Path } alt="Anillo" /> 
// 							<button>Ver Detalles</button>
//                                                    {/* <ItemCount /> */}
// 		 		    	</div>
//                     </div>
// 		 		))
// 		 	}   
// 		 </div>


























// import './ItemListContainer.css'
// const ItemListContainer = (props) => {
//     return <h1>{props.greetings}</h1>
            
// }
// export default ItemListContainer

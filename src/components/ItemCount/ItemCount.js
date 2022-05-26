
import { useState } from 'react';

const ItemCount = ({stock}) => {
    const [count, setCount] = useState(0);

    const increment = () => {
        if (count >= 0 && stock>count) {
            setCount(count + 1)
        }
    }
    const decrement = () => {
        if (count > 0) {
            setCount(count - 1)
        }
    }
    return (
               <div>
            <button onClick={decrement}> - </button>
            <p>Comprar {count}</p>
            <button onClick={increment}> +  </button>
        </div>      
    )   
}


export default ItemCount;














// import React from "react";
// import ButtonGroup from "@material-ui/core/ButtonGroup";
// import Badge from "@material-ui/core/Badge";
// import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
// import Button from "@material-ui/core/Button";
// import AddIcon from "@material-ui/icons/Add";
// import RemoveIcon from "@material-ui/icons/Remove";
// const ItemCount = (props) => {
//     const [itemCount, setItemCount] = React.useState(0);
//     return (
//         <div style={{ display: "block", padding: 30 }}>
//           <div>
//             <Badge color="primary" badgeContent={itemCount}>
//               <ShoppingCartIcon />{" "}
//             </Badge>
//             <ButtonGroup>
//               <Button onClick={() => {setItemCount(Math.max(itemCount - 1, 0));}}>{" "}
//                 <RemoveIcon fontSize="small" />
//               </Button>
//               <Button onClick={() => {setItemCount(itemCount + 1);}}>{" "}
//                 <AddIcon fontSize="small" />
//               </Button>
//             </ButtonGroup>
//           </div>
//         </div>
//       );       
// }
// export default ItemCount

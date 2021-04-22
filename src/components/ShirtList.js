import React from 'react';
import Shirt from "./Shirt";

function ShirtList(props){
  return(
    <React.Fragment>
      <h4>shirt list</h4>
      {props.shirtList.map((shirt)=>
        <Shirt
        whenShirtClicked={props.onShirtSelection}

        name={shirt.name}
        description={shirt.description}
        quantity={shirt.quantity}
        price={shirt.price}
        id={shirt.id}
        key={shirt.id}
        />
        )}
    </React.Fragment>
  );
}




export default ShirtList;

//name, description, quantity, price
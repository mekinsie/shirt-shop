import React from 'react';
import Shirt from "./Shirt";

function ShirtList(){
  return(
    <React.Fragment>
      <h4>shirt list</h4>
      <Shirt
        name={"Blouse"}
        description={"Really amazing blouse"}
        quantity={1}
        price={"32.99"}
      />
    </React.Fragment>
  );
}

export default ShirtList;

//name, description, quantity, price
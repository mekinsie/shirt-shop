import React from "react";
import PropTypes from "prop-types";
// import Quantity from "./Quantity";

function ShirtDetail(props){
  const{shirt, onClickingEdit, onClickingDelete, onIncreaseQuantity }= props;

  return (
    <React.Fragment>
      <h3>{shirt.name}</h3>
      <h3>Description: {shirt.description}</h3>
      <h3>Price: {shirt.price}</h3>
      <button onClick={()=>onIncreaseQuantity(shirt)}>+</button>
      {/* <Quantity /> */}
      <h3>Quantity: {shirt.quantity}</h3>
      <button>-</button><br></br>
      <button onClick={ onClickingEdit }>Update Shirt</button>
      <button onClick={()=> onClickingDelete(shirt.id) }>Delete Shirt</button>
    </React.Fragment>
  );
}

ShirtDetail.propTypes = {
  shirt: PropTypes.object,
  onClickingEdit: PropTypes.func,
  onClickingDelete: PropTypes.func
};

export default ShirtDetail;

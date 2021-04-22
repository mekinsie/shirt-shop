import React from "react";
import PropTypes from "prop-types";

function ShirtDetail(props){
  const{shirt, onClickingEdit, onClickingDelete }= props;

  return (
    <React.Fragment>
      <h3>{shirt.name}</h3>
      <h3>Description: {shirt.description}</h3>
      <h3>Quantity Available: {shirt.quantity}</h3>
      <h3>Price: {shirt.price}</h3>
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

import React from "react";
import PropTypes from "prop-types";

//name, description, quantity, price

function Shirt(props){
  return(
    <React.Fragment>
      <div onClick = {() => props.whenShirtClicked(props.id)}>
        <h3>{props.name}</h3>
        <h4>Description: {props.description}</h4>
        <p>Quantity: {props.quantity}</p>
        <p>Price: ${props.price}</p>
      </div>
    </React.Fragment>
  );
}

Shirt.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  quantity: PropTypes.string,
  price: PropTypes.string,
  id: PropTypes.string,
  whenShirtClicked: PropTypes.func.isRequired
}

export default Shirt;
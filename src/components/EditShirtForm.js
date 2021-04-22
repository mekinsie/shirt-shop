import React from "react";
import ReusableForm from "./ReusableForm";
import PropTypes from "prop-types";

function EditShirtForm (props){
  const { shirt } = props;

  function handleEditShirtFormSubmission(event){
    event.preventDefault();
    props.onEditShirt({name: event.target.name.value, description: event.target.description.value, quantity: event.target.quantity.value, price: event.target.price.value, id: shirt.id});
  }

  return (
    <React.Fragment>
      <ReusableForm
        formSubmissionHandler={handleEditShirtFormSubmission}
        buttonText="Update Shirt" />
    </React.Fragment>
  );
}

EditShirtForm.propTypes = {
  shirt: PropTypes.object,
  onEditShirt: PropTypes.func
}

export default EditShirtForm;
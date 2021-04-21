import React from "react";
import { v4 } from 'uuid';
import PropTypes from "prop-types";

function NewShirtForm(props){

  function handleNewShirtFormSubmission(event) {
    event.preventDefault();
    props.onNewShirtCreation({name: event.target.name.value, description: event.target.description.value, quantity: event.target.quantity.value, price: event.target.price.value, id: v4()});
  }

  return (
    <ReusableForm
    formSubmissionHandler={handleNewShirtFormSubmission}
    buttonText="Add new shirt"
    />
  );
}

NewShirtForm.propTypes = {
  onNewShirtCreation: PropTypes.func
};

export default NewShirtForm;
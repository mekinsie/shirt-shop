import React from "react";
import NewShirtForm from "./NewShirtForm";
import ShirtList from "./ShirtList";
import ShirtDetail from "./ShirtDetail";
import EditShirtForm from "./EditShirtForm";
import { connect } from "react-redux";


class ShirtControl extends React.Component {

  constructor(props){
    super(props);
    this.state={
      formVisibleOnPage: false,
      selectedShirt: null,
      editing: false
    };
  }

  handleClick = () => {
    if(this.state.selectedShirt != null){
      this.setState({
        formVisibleOnPage: false,
        selectedShirt: null,
        editing: false
      });
    } else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage
      }));
    }
  }

  handleEditingShirt = (shirtToEdit) => {
    const { dispatch } = this.props;
    const { id, name, description, price, quantity } = shirtToEdit;
    const action = {
      type: "ADD_ITEM",
      id: id,
      name: name,
      description: description,
      price: price,
      quantity: quantity
    }
    dispatch(action);
    this.setState({
      editing: false,
      selectedShirt: null
    });
  }

  handleEditClick = () => {
    console.log("handleEditClick reached!");
    this.setState({editing: true});
  }

  handleDeletingShirt = (id) => {
    const { dispatch } = this.props;
    const action = {
      type: "DELETE_TICKET",
      id: id
    }
    dispatch(action);
    this.setState({
      selectedShirt: null
    });
  }

  handleAddingNewShirt = (newShirt) => {
    const { dispatch } = this.props;
    const { id, name, description, price, quantity } = newShirt;
    const action = {
      type: "ADD_ITEM",
      id: id,
      name: name,
      description: description,
      price: price,
      quantity: quantity
    }
    dispatch(action);
    this.setState({formVisibleOnPage: false});
  }

  handleChangingSelectedShirt = (id) => {
    const selectedShirt = this.state.masterShirtList.filter(shirt => shirt.id === id)[0];
    this.setState({selectedShirt: selectedShirt})
  }

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;
    if(this.state.editing){
      currentlyVisibleState = <EditShirtForm shirt = {this.state.selectedShirt} onEditShirt = {this.handleEditingShirt} />
      buttonText = "Return to list of shirts"
    } else if (this.state.formVisibleOnPage){
      currentlyVisibleState= <NewShirtForm onNewShirtCreation={this.handleAddingNewShirt}/>
      buttonText="Back to All Shirts"
    } else if (this.state.selectedShirt!=null){
      currentlyVisibleState = <ShirtDetail onIncreaseQuantity = {this.handleIncreaseQuantity } onClickingEdit={this.handleEditClick} onClickingDelete={this.handleDeletingShirt} shirt = {this.state.selectedShirt} />
      buttonText="Back to All Shirts"
    }
      else {
      currentlyVisibleState = <ShirtList shirtList={this.state.masterShirtList} onShirtSelection={this.handleChangingSelectedShirt} />;
      buttonText= "Add a new shirt";
    }

    return(
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    )
  }

}

ShirtControl = connect()(ShirtControl);

export default ShirtControl;
import React from "react";
import NewShirtForm from "./NewShirtForm";
import ShirtList from "./ShirtList";
import ShirtDetail from "./ShirtDetail";
import EditShirtForm from "./EditShirtForm";


class ShirtControl extends React.Component {

  constructor(props){
    super(props);
    this.state={
      masterShirtList: [],
      formVisibleOnPage: false,
      selectedShirt: null,
      editing: false
    };
  }

  handleClick = () => {
    if(this.state.selectedShirt != null){
      this.setState({
        formVisibleOnPage: false,
        selectedShirt: null
      });
    } else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage
      }));
    }
  }

  handleEditClick = () => {
    console.log("handleEditClick reached!");
    this.setState({editing: true});
  }

  handleAddingNewShirt = (newShirt) => {
    const newMasterShirtList = this.state.masterShirtList.concat(newShirt);
    this.setState({masterShirtList: newMasterShirtList, formVisibleOnPage: false});
  }

  handleEditingShirt = (shirtToEdit) => {
    const editedMasterShirtList = this.state.masterShirtList
    .filter(shirt => shirt.id !== this.state.selectedShirt.id)
    .concat(shirtToEdit);
    this.setState({
      masterShirtList: editedMasterShirtList,
      editing: false,
      selectedShirt: null
    });
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
      currentlyVisibleState = <ShirtDetail shirt = {this.state.selectedShirt} />
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

export default ShirtControl;
import React from "react";
import ShirtList from "./ShirtList";


class ShirtControl extends React.Component {

  constructor(props){
    super(props);
    this.state={
      formVisibleOnPage: false
    };
  }

  handleClick = () => {
    this.setState(prevState => ({
      formVisibleOnPage: !prevState.formVisibleOnPage
    }));
  }

  render() {
    return(
      <React.Fragment>
        <ShirtList/>
        <button onClick={this.handleClick}>Add a new shirt</button>
      </React.Fragment>
    )
  }

}

export default ShirtControl;
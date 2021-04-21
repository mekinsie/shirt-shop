import React from "react";
import ShirtList from "./ShirtList";


class ShirtControl extends React.Component {

  constructor(props){
    super(props);
    this.state={};
  }

  render() {
    return(
    <ShirtList/>
    )
  }

}

export default ShirtControl;
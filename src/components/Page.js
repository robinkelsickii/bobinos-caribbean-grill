import React, {Component} from "react";

class Page extends Component {
  // this will use jsx syntax
  // Model
  constructor(){
    super()
    // sets restaurant name as a var to be used later
    this.restaurantName = "Bobino's Caribbean Grill"
    // renders Adress 
    this.address = "348 E Main St, Lexington, KY 40507"
  }

  // Controller

  // View
  render() { 
    // renders the restaurant name
    return (
    <div className = "container">
    <h1 className = 'text-center'>{this.restaurantName}</h1>
    <h3 className = 'text-center'>{this.address}</h3>
    </div>
    );
    }
  }


export default Page;
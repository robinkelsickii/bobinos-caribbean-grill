import React, { Component } from "react";
import '../index.css';
import axios from "axios";

class Page extends Component {
  // this will use jsx syntax
  // Model
  const 
  constructor() {
    super()
    this.axios = require('axios')
    this.apiLunch = 'https://port-3000-aincbootcampapi-ianrios529550.codeanyapp.com/api/menu/type_amount/{type_id}/{amount_id}'
    // sets restaurant name as a var to be used later
    this.restaurantName = "Bobino's Caribbean Grill"
    // sets Address 
    this.address = "348 E Main St, Lexington, KY 40507"
    // sets hours
    this.hours = "Monday-Friday 9am-8pm"
    this.lunch = "Lunch Menu"
  }

  // Controller
  FetchApiLunch(){
    axios.get(this.apiLunch)
    .then(function (response) {
  
    console.log(response);
  })
  .catch(function (error) {

    console.log(error);
  })
  .then(function () {
  
  });
  }



  // View
  render() {
    return (
      <div className='mainPage'>
        <h1 id='restaurant' className='mt-5'>{this.restaurantName}</h1>
        <h3 id='addy' className='d-flex justify-content-end'>{this.address}</h3>
        <h3 id='open' className='d-flex justify-content-end'>{this.hours}</h3>
        <div className = 'container px-4'>
          <div className = 'row mt-5'>
            <div className = "col-12 text-center">
            <h3>{this.lunch}</h3>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


export default Page;
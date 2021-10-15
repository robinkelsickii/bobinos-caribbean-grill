import React, { Component } from "react";
import '../index.css';
import axios from "axios";

class Page extends Component {
  // this will use jsx syntax
  // Model
  constructor() {
    super()
    this.state = {
      food: []
    }
    this.url = 'https://port-3000-aincbootcampapi-ianrios529550.codeanyapp.com/api/menu/type/3';
    this.restaurantName = "Bobino's Caribbean Grill"
  }

  // Controller
  componentDidMount() {
    axios.get(this.url)
      .then((result) => {
        this.setState({
          food: result.data
        })
      }
      );
    }

  



    // View
    render() {

      // console.log(this.state.food);

      return (
        <div className='mainPage' >
          <h1 id='restaurant' className='mt-5'>{this.restaurantName}</h1>
          <h3 id='addy' className='d-flex justify-content-end'>348 E Main St, Lexington, KY 40507</h3>
          <h3 id='open' className='d-flex justify-content-end'>Monday-Saturday 9am-8pm</h3>
          <div className='container px-4'>
            <div className='row mt-5'>
              <div className="col-12 col-lg-12 text-center">
                <h3 id='lunchMenu' className="border bg-light">Lunch Menu</h3>
                <div className='container'>
                  <div className='row'>
                    <div className='col text-warning shadow-lg'>
                      <h4 className = 'text-center'>{this.state.food.length > 0 && this.state.food[0].name + "\n" + this.state.food[0].description}</h4>
                      <h4 className = 'text-center'>{this.state.food.length > 0 && this.state.food[1].name + "\n" + this.state.food[1].description}</h4>
                      <h4 className = 'text-center'>{this.state.food.length > 0 && this.state.food[2].name + "\n" + this.state.food[2].description}</h4>
                      <h4 className = 'text-center'>{this.state.food.length > 0 && this.state.food[3].name + "\n" + this.state.food[3].description}</h4>
                      <h4 className = 'text-center'>{this.state.food.length > 0 && this.state.food[4].name + "\n" + this.state.food[4].description}</h4>
                      <h4 className = 'text-center'>{this.state.food.length > 0 && this.state.food[5].name + "\n" + this.state.food[5].description}</h4>
                      <h4 className = 'text-center'>{this.state.food.length > 0 && this.state.food[6].name + "\n" + this.state.food[6].description}</h4>
                      <h4 className = 'text-center'>{this.state.food.length > 0 && this.state.food[7].name + "\n" + this.state.food[7].description}</h4>
                      <h4 className = 'text-center'>{this.state.food.length > 0 && this.state.food[8].name + "\n" + this.state.food[8].description}</h4>
                      <h4 className = 'text-center'>{this.state.food.length > 0 && this.state.food[9].name + "\n" + this.state.food[9].description}</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
export default Page;
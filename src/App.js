import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BusinessList from './components/BusinessList/BusinessList.js';
import SearchBar from './components/SearchBar/SearchBar.js';
import Yelp from './util/Yelp.js';


const business = {     
	
};

//const businesses = [
//];

//const yelpedBusinesses = [];

class App extends Component {
    constructor(props){
      super(props);
      this.state = {
        yelpedBusinesses: []
      };

      this.searchYelp = this.searchYelp.bind(this);
    }

    searchYelp(term, location, sortBy){
          
      Yelp.search(term, location, sortBy).then(businesses => {
        
       console.log('retreieved: ' + businesses);
       console.log('as' + businesses[0].id);


        
        this.setState({
          yelpedBusinesses: businesses
        });
        
     console.log('this.state.dd: ' + this.state.yelpedBusinesses[1].name);
      });
    }

    render() {
      return (
        <div className='App'>
          <h1>ravenous</h1>
          <SearchBar searchYelp = {this.searchYelp}/>
          <BusinessList businesses= {this.state.yelpedBusinesses} /> 
        </div>
      );
    }
}



export default App;

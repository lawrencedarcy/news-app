import React, { Component } from 'react';
import './NewsStoryMedium.css'

class NewsStoryMedium extends Component {
  render() {
    return (
      
       <div className="card">
  
  <div className="logo-container" >
    {this.props.source}
</div>
     <img src={this.props.image} className="main" />

     

    <h1 className="headline">{this.props.headline}</h1>

<div>
<button className="category"> Politics</button>
<button className="category"> US News</button>
<button className="more"> More coverage</button>
  
</div>

    <p className="standfirst">{this.props.standfirst} </p> 


<span className="full">FULL STORY </span> 
      </div>
     
    );
  }
}

export default NewsStoryMedium;
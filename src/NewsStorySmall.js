import React, { Component } from 'react';
import './NewsStorySmall.css';

class NewsStorySmall extends Component {
  render() {
    return (
      
      <div className="long-card">
        <a 
        href={this.props.url}
        className="external-link"
        target="_blank">
          
         <div className="main-long-body"> 
 

   

    
    <div className='logo-container'>{this.props.source}</div>
    <img src={this.props.image} className="long-card-img" alt="illustrating"/>
   <h1 className="long-card-headline">{this.props.headline}</h1>



   <p className="long-card-text">
     {(this.props.standfirst.split('.')[0].length > 10) ? 
     this.props.standfirst.split('.')[0] 
     : this.props.standfirst.split('.')[1] } </p> 


<span className="full">FULL STORY </span> 
     </div>
     </a>
     </div>
    
   );
  }
}

export default NewsStorySmall;
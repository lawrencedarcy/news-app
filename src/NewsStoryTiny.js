import React, { Component } from 'react';
import './NewsStorySmall.css';

class NewsStoryTiny extends Component {
  render() {
    return (
      
      <div className="long-card">
        <a 
        href={this.props.url}
        className="external-link"
        target="_blank">
          
         <div className="main-long-body"> 
    
   

   <h1 className="long-card-headline"><span id='kicker'>{this.props.source} /</span> {this.props.headline}</h1>



<span className="full">FULL STORY </span> 
     </div>
     </a>
     </div>
    
   );
  }
}

export default NewsStoryTiny;
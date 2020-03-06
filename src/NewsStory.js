import React, { Component } from 'react';
import './NewsStory.css';

class NewsStory extends Component {


  constructor (props){
    super(props);


    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler() {
    
  }

  render() {



    return (
      
      <div className='double-card' ><a 
      href={this.props.url} 
      className="external-link"
      target="_blank"> 
      
        <div className='logo-container'>{this.props.source}</div>
        
        <img
          alt={this.props.headline}
          src={
            this.props.image
              ? this.props.image
              : 'https://uploads.guim.co.uk/2020/02/27/harley-davidson-02tt7EvQKhw-unsplash.jpg'
          }
          className='double-main'
        />

        <h1 id='headline-double'>{this.props.headline}</h1>

     {/*    <div class="more-coverage">
          <button className='category'> Politics</button>
          <button className='category'> US News</button>
          <button className='more'> More coverage</button>
        </div> */}

        <p className='standfirst'>
          {this.props.standfirst && this.props.standfirst.split('.')[0]}{' '}
        </p>
        
     {/*    <span className='full'>FULL STORY </span> */}</a>
      </div>
      
    );
  }
}

export default NewsStory;

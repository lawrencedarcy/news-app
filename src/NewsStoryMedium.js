import React, { Component } from 'react';
import './NewsStoryMedium.css';

class NewsStoryMedium extends Component {
  render() {
    return (
      <div className='card'>
        <a href={this.props.url} className='external-link' target='_blank'>
          <div className='logo-container'>{this.props.source}</div>
          <img
            src={
              this.props.image
                ? this.props.image
                : 'https://uploads.guim.co.uk/2020/02/27/harley-davidson-02tt7EvQKhw-unsplash.jpg'
            }
            className='main'
          />
          <h1>{this.props.headline}</h1>
          <div>
            <button className='category'> Politics</button>
            <button className='category'> US News</button>
            <button className='more'> More coverage</button>
          </div>
          <p className='standfirst'>
            {this.props.standfirst && this.props.standfirst.split('.')[0]}{' '}
          </p>
          <span className='full'>FULL STORY </span>{' '}
        </a>
      </div>
    );
  }
}

export default NewsStoryMedium;

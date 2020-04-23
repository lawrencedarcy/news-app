import React, { Component } from "react";
import axios from "axios";
import NewsStory from "./NewsStory";
import "./NewsContainer.css";
import NewsStorySmall from "./NewsStorySmall";
import NewsStoryMedium from "./NewsStoryMedium";
import NewsStoryTiny from './NewsStoryTiny';


const category = "business"

const TOP_NEWS_URL =
  "https://newsapi.org/v2/top-headlines?" +
  "country=gb&" +
  "apiKey=0dc27b8b03d146529a79da477d2aaa48";

const TEST_STORIES =
  `https://newsapi.org/v2/top-headlines?` +
   `country=gb&category=${category}` +
   `&apiKey=0dc27b8b03d146529a79da477d2aaa48`;

const ALL_STORIES =
`https://newsapi.org/v2/everything?` +
"sources=axios,mtv-news-uk,national-geographic,new-scientist,independent,mashable, associated-press&" +
"apiKey=0dc27b8b03d146529a79da477d2aaa48";


class NewsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      topStories: [],
      allStories: [],
      testStories: [],
      
    };
  }

  componentDidMount() {
    axios.get(TOP_NEWS_URL).then(res => {
      console.log(res.data.articles);
      const topStories = res.data.articles;
      this.setState({ topStories });
    });
    axios.get(ALL_STORIES).then(res => {
      console.log(res.data.articles);
      const allStories = res.data.articles;
      this.setState({ allStories });
    });
    axios.get(TEST_STORIES).then(res => {
      console.log(res.data.articles);
      const testStories = res.data.articles;
      this.setState({ testStories });
    });


  }

  render() {

    
    return (
      <div className="container">

      <div className="stories">
                 
          {this.state.topStories.slice(0, 2).map(story => (
         
            <NewsStory
              className="card"
              headline={story.title.split('-')[0] }
              standfirst={story.description}
              url={story.url}
              author={story.author}
              source={story.source.name}
              image={story.urlToImage}
              content={story.content}
            />
          ))}

          {this.state.topStories.slice(3, 6).map(story => (
            
            <NewsStoryMedium
              
              className="stories"
              headline={story.title.split('-')[0] }
              standfirst={story.description}
              url={story.url}
              author={story.author}
              source={story.source.name}
              image={story.urlToImage}
              content={story.content}
            />
          ))}

          {this.state.allStories.slice(0, 8).map(story => (
            <NewsStorySmall
              className="long-card"
              headline={story.title}
              standfirst={story.description}
              url={story.url}
              author={story.author}
              source={story.source.name}
              image={story.urlToImage}
              content={story.content}
            />
          ))}
          {this.state.topStories.slice(7, 17).map(story => (
            <NewsStoryTiny
              className="long-card"
              headline={story.title}
              
              url={story.url}
              author={story.author}
              source={story.source.name}
              
              content={story.content}
            />
          ))}
        </div>
        
      </div>
    );
  }
}

export default NewsContainer;

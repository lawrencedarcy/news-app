import React, { Component } from "react";
import axios from "axios";
import NewsStory from "./NewsStory";
import "./NewsContainer.css";
import NewsStorySmall from "./NewsStorySmall";
import NewsStoryMedium from "./NewsStoryMedium";

const TOP_NEWS_URL =
  "http://newsapi.org/v2/top-headlines?" +
  "country=gb&" +
  "apiKey=0dc27b8b03d146529a79da477d2aaa48";

const ALL_STORIES =
"http://newsapi.org/v2/everything?" +
"sources=bbc-news,axios,mtv-news-uk,national-geographic,new-scientist,independent,mashable&" +
"apiKey=0dc27b8b03d146529a79da477d2aaa48";


class NewsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      topStories: [],
      allStories: []
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
  }

  render() {

    
    return (
      <div className="container">
        <h1 className="masthead">NewsCycle</h1>

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
            />
          ))}

          {this.state.allStories.slice(0, 10).map(story => (
            <NewsStorySmall
              className="long-card"
              headline={story.title}
              standfirst={story.description}
              url={story.url}
              author={story.author}
              source={story.source.name}
              image={story.urlToImage}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default NewsContainer;

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import $ from 'jquery';

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      news: []
    };
  }

  componentDidMount() {
    this.getNews();
    setInterval(() => {
      this.getNews();
    }, 60000);
  }

  getNews() {
    const url = "https://newsapi.org/v2/top-headlines";
    const data = {
      country: "us",
      apiKey: "YOURAPICODE"
    };
    $.get(url, data)
      .done(res => {
        const news = res.articles.slice(0, 5);
        this.setState({ news });
      })
      .fail(err => console.log(err));
  }

  
  render() {
    const { news } = this.state;
    return (
      <nav className="Navigation">
        <ul>
          
          <li>
            <div>
              <h3>Latest News</h3>
              {news.map((article, index) => (
                <div key={index}>
                  <h4><a href={article.url} target="_blank" rel="noopener noreferrer">{article.title}</a></h4>
                  <p>{article.description}</p>
                </div>
              ))}
            </div>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navigation;

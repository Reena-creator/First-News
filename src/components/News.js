import React, { Component } from "react";
import NewsItem from "./NewsItem";

export default class News extends Component {
  constructor() {
    super();
    console.log("Hii!!! ");
    this.state = {
      articles: [],
      loading: false,
      page: 1
    }
  }

  async componentDidMount(){
    // console.log("cdm");
    let url = "https://newsapi.org/v2/top-headlines?country=us&apiKey=58a6a8b8bf524b3aa9f365e3b36a3ddd&page=1&pagesize=5";
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
        articles: parsedData.articles,
        totalResults: parsedData.totalResults
    })
  }

  handlePrevClick = async() =>{
    let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=58a6a8b8bf524b3aa9f365e3b36a3ddd&page=${this.state.page - 1}&pagesize=5`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
        articles: parsedData.articles,
        page: this.state.page - 1
    })
  }

  handleNextClick = async() =>{
    if(this.state.page+1 > Math.ceil(this.state.totalresults/5)){

    }else{
        let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=58a6a8b8bf524b3aa9f365e3b36a3ddd&page=${this.state.page + 1}&pagesize=5`;
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            articles: parsedData.articles,
            page: this.state.page + 1
        })
    }  
  }

  render() {
    return (
      <div>
        <div className="container my-3 ">
          <h1 style={{textAlign : "center"}}>NewsFirst - Top Headlines</h1>
          <div className="row">
            {this.state.articles.map((element) => {
                return <div className="col-md-4 my-3" key={element.url}>
                  <NewsItem title={element.title? element.title.slice(0, 68) : "No Title"} description={element.description? element.description.slice(0, 95) : "No Description"} imageUrl={element.urlToImage} Url={element.url} />
                </div>
          })}
          </div>
        </div>
        <div className="d-flex justify-content-between">
        <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}>&larr;Previous</button>
        <button type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next&rarr;</button>
        </div>
      </div>
    );
  }
}

import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from 'prop-types';

export default class News extends Component {
  static defaultProps = {
    country: 'in',
    pagesize: 10,
    category: 'general'
  }

  static propTypes = {
    country: PropTypes.string,
    pagesize: PropTypes.number,
    category: PropTypes.string
  }

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
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=58a6a8b8bf524b3aa9f365e3b36a3ddd&page=1&pagesize=${this.props.pagesize}`;
    this.setState({loading: true});
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
        articles: parsedData.articles,
        totalResults: parsedData.totalResults,
        loading: false
    })
  }

  handlePrevClick = async() =>{
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=58a6a8b8bf524b3aa9f365e3b36a3ddd&page=${this.state.page - 1}&pagesize=${this.props.pagesize-1}`;
    this.setState({loading: true});
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
        articles: parsedData.articles,
        page: this.state.page - 1,
        loading: false
    })
  }

  handleNextClick = async() =>{
    if(this.state.page+1 > Math.ceil(this.state.totalresults/this.props.pagesize)){

    }else{
        let url = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=58a6a8b8bf524b3aa9f365e3b36a3ddd&page=${this.state.page + 1}&pagesize=${this.props.pagesize+1}`;
        this.setState({loading: true});
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            articles: parsedData.articles,
            page: this.state.page + 1,
            loading: false
        })
    }  
  }

  render() {
    return (
      <div>
        <div className="container my-3 ">
          <h1 style={{textAlign : "center"}}>NewsFirst - Top Headlines</h1>
          {this.state.loading && <Spinner/>}
          <div className="row">
            {!this.state.loading && this.state.articles.map((element) => {
                return <div className="col-md-4 my-3" key={element.url}>
                  <NewsItem title={element.title? element.title.slice(0, 68) : "No Title"} description={element.description? element.description.slice(0, 95) : "No Description"} imageUrl={element.urlToImage} Url={element.url} author={element.author} date={element.publishedAt} />
                </div>
          })}
          </div>
        </div>
        <div className=" d-flex justify-content-between">
        <button style={{margin: '10px'}} disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}>&larr;Previous</button>
        <button style={{margin: '10px'}} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next&rarr;</button>
        </div>
      </div>
    );
  }
}

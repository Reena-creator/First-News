import React, { Component } from 'react'

export default class NewsItem extends Component {
    render() {
    let {title, description, imageUrl, Url}= this.props;
    return (
      <div>
        <div className="card">
            <img src={!imageUrl?"https://media.sciencephoto.com/image/c0564551/800wm/C0564551-Science_and_technology,_illustration.jpg":imageUrl} className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">{title}...</h5>
              <p className="card-text">{description}...</p>
              <a href={Url} className="btn btn-info">Know More</a>
            </div>
        </div>
      </div>
    )
  }
}

import React, { Component } from 'react'

export default class NewsItem extends Component {
    render() {
    let {title, description, imageUrl, Url, author, date}= this.props;
    const defaultImage = "https://media.sciencephoto.com/image/c0564551/800wm/C0564551-Science_and_technology,_illustration.jpg";
    const image = (imageUrl && imageUrl.trim())? imageUrl: defaultImage;
    return (
      <div>
        <div className="card">
            <img src={image} onError={(e) => {e.target.src = defaultImage;}} className="card-img-top" alt="news"/>
            <div className="card-body">
              <h5 className="card-title">{title}...</h5>
              <p className="card-text">{description}...</p>
              <p class="card-text"><small class="text-body-secondary">By {author?author:"Unknown"} on {new Date(date).toGMTString()}</small></p>
              <a href={Url} className="btn btn-info">Know More</a>
            </div>
        </div>
      </div>
    )
  }
}

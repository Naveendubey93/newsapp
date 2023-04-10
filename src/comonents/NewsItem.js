import React, { Component } from 'react'

export default class NewsItem extends Component {
  render() {
    let {title, description, imageUrl, newsUrl, author, publishedAt, source} = this.props;
    return (
      <div>
        <div className="card">
        <span class="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left:'90%', zIndex: '1'}}>{source}</span>
          <img src={imageUrl} className="card-img-top"  width="45" height="130" alt="..."/>
          <div className="card-body">
            <h5 className="card-title"  width="45" height="130">{title}</h5>
            <p className="card-text">{description}.</p>
            <p className="card-text"><small className="text-muted">
              Published By: {author || 'Unlnown'} | Date: {new Date(publishedAt).toGMTString()}</small>
            </p>
            <a href={newsUrl} rel="noreferrer" target="_blank" className="btn btn-primary">Read More</a>
          </div>
        </div>
       </div>
    )
  }
}

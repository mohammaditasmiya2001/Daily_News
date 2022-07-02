import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let {title,description,imageUrl,newsUrl,author,date}=this.props;
    return (
      <div>
         <div className="card">
                <img src={!imageUrl?"https://gaadiwaadi.com/wp-content/uploads/2020/07/2020-hyundai-creta-1-2.jpg":imageUrl} className="card-img-top" alt="..."/>
                <div className="card-body">
                  <h5 className="card-title">{title}</h5>
                  <p className="card-text">{description}</p>
                  <p className="card-text"><small className ="text-muted">By{!author?"Unknown":author} on {new Date(date).toGMTString()}</small> </p>
                  <a  rel="noreferrer"  href={newsUrl} target="_blank" className="btn btn-sm  btn-dark">Go somewhere</a>
                </div>
          </div>
      </div>

    )
  }
}

export default NewsItem
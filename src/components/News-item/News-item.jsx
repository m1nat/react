import classes from './News-item.module.scss';
import React, { Component } from 'react';
export default class NewsItem extends Component {



  render() {
    const { el } = this.props
    console.log(el);
    return (
      <div className={classes.news_item} onClick={this.show_news}>
        <img src={el.urlToImage} alt="" width='200px' height='130px'/>
        <div className={classes.news}>
          <h4 >
            {el.title}
          </h4>
          <p>
            {el.description}
          </p>
          <div className={classes.communicate}>
            <div className={classes.like}></div>
            <div className={classes.comment}></div>
            <div className={classes.shared}></div>
          </div>
        </div>
      </div>
    )
  }
}

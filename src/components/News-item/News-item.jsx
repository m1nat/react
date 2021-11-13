import classes from './News-item.module.scss';
import React, { Component } from 'react';
export default class NewsItem extends Component {

  render() {
    const { news_title, news_body } = this.props;
    return (
      <div className={classes.news_item} onClick={this.show_news}>
        <div className={classes.img_news}></div>
        <div className={classes.news}>
          <h4 style={this.style}>{news_title}</h4>
          <p>
            {news_body}
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

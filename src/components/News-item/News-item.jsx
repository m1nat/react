import classes from './News-item.module.scss';
import React, { Component } from 'react';
export default class NewsItem extends Component {

  transformDate(el) {
    const arr = el.publishedAt.split('T').join(' / ').split('Z').join('');
    return arr;
  }

  render() {

    const { el } = this.props;
    const date = this.transformDate(el);
    
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
          <div className={classes.info}>
          <div className={classes.communicate}>
            <div className={classes.like}></div>
            <div className={classes.comment}></div>
            <div className={classes.shared}></div>
          </div>
          <div className={classes.date}><p>{date}</p></div>
          </div>
        </div>
      </div>
    )
    
  }
}

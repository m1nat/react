import React, { Component } from 'react';

import NewsItem from '../News-item/News-item';
import classes from './News.Module.scss';


export default class News extends Component {

  render() {
    const { news } = this.props;

    const renderingNews = news.map((newsItem) =>
      <NewsItem  { ...newsItem } key={ newsItem.id } />
    )

    return (
      <div className={classes.wrapper}>
        { renderingNews }
      </div>
    )
  }
}


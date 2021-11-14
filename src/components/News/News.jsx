import { Component } from 'react';

import NewsItem from '../News-item/News-item';
import { getNews } from '../../API/Api-handlers';

import classes from './News.Module.scss';

export default class News extends Component {

  state = {}

  componentDidMount()  {

    getNews()
     .then( response => {
       this.setState({newsRes: response})
     })
    }
    
    render() {
      const { news } = this.props;
      const { newsRes } = this.state;
      let renderingNews
      newsRes ? renderingNews = newsRes.map( el => <NewsItem el={el}/>) : console.log('error');

      return (
      <div className={classes.wrapper}>
        { renderingNews }
      </div>
    )
  }
}
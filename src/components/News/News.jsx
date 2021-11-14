import { Component } from 'react';

import NewsItem from '../News-item/News-item';
import { getNews } from '../../API/Api-handlers';

import classes from './News.Module.scss';
import Spinner from '../../UI/spinner/Spinner';

export default class News extends Component {

  state = {
    loader: true
  };

  componentDidMount()  {
    getNews()
     .then( response => {
        if(response) {
          this.setState({newsRes: response, loader: false})
        }
     })
    };
    
    render() {

      const { newsRes, loader } = this.state;
      let renderingNews;
      let spinner;
      loader ? spinner = <Spinner /> : spinner = null;
      newsRes ? renderingNews = newsRes.map( el => <NewsItem el={el}/>) : renderingNews = null;

      return (
      <div className={classes.wrapper}>
        { spinner }
        { renderingNews }
      </div>
    )
    
  };
}
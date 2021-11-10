import News_item from '../News-item/News-item';
import classes from './News.Module.scss';

const News = () => {
  return(
    <div className={classes.wrapper}>
      <News_item />
      <News_item />
      <News_item />
      <News_item />
      <News_item />
      <News_item />
      <News_item />
    </div>
  )
};


export default News;
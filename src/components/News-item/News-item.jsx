import classes from './News-item.module.scss';

const News_item = () => {
  return (
    <div className={classes.news_item}>
      <div className={classes.img_news}></div>
      <div className={classes.news}>
        <h3>News</h3>
        <p>Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. Dolor recusandae ea
          corrupti blanditiisvoluptas aut expedita
          totam eaque fugiat ut officia voluptates
          aliquid ipsam rem voluptate ducimus, vero
          alias magni? orem ipsum dolor sit amet consectetur,
          adipisicing elit. Dolor recusandae ea
          corrupti blanditiisvoluptas aut expedita
          totam eaque fugiat ut officia voluptates
          aliquid ipsam rem voluptate ducimus, vero
          alias magni?
        </p>
        <div className={classes.communicate}>
          <div className={classes.like}></div>
          <div className={classes.comment}></div>
          <div className={classes.shared}></div>
        </div>
      </div>
    </div>
  )
};

export default News_item;
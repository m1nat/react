import { Link } from 'react-router-dom';
import classes from './Aside.module.scss';

const Aside = () => {
  return (
    <aside>
      <div className={classes.scroll}></div>
      <nav>
        <div className={classes.nav__item}>
          <div className={classes.mypage}></div>
          <div className={classes.item__text}>My page</div>
        </div>
        <div className={classes.nav__item}>
          <div className={classes.news}></div>
          <div className={classes.item__text}>
            <Link to='/'>News</Link>
          </div>
        </div>
        <div className={classes.nav__item}>
          <div className={classes.messager}></div>
          <div className={classes.item__text}>
            <Link to='/messages'>Messanger</Link>
          </div>
        </div>
        <div className={classes.nav__item}>
          <div className={classes.friends}></div>
          <div className={classes.item__text}>Friends</div>
        </div>
        <div className={classes.nav__item}>
          <div className={classes.communities}></div>
          <div className={classes.item__text}>Communities</div>
        </div>
        <div className={classes.nav__item}>
          <div className={classes.photo}></div>
          <div className={classes.item__text}>Photos</div>
        </div>
        <div className={classes.nav__item}>
          <div className={classes.music}></div>
          <div className={classes.item__text}>Music</div>
        </div>
        <div className={classes.nav__item}>
          <div className={classes.video}></div>
          <div className={classes.item__text}>Video</div>
        </div>
      </nav>
    </aside>
  )
}

export default Aside;
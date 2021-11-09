import Search from '../../UI/search';
import classes from './Header.module.scss';

const Header = () => {
  return(
    <div className={classes.header}>
      <div className={classes.logo}></div>
      <div className={classes.search}>
        <Search />
      </div>
      <div className={classes.notification}></div>
      <div className={classes.info}>
        <div className={classes.user}>User_Name</div>
        <div className={classes.avatar}></div>
      </div>
    </div>
  )
}

export default Header;
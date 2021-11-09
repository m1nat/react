import classes from './UI.module.scss';

const Search = () => {
  return(
    <input type="text" placeholder='search...' className={classes.search}/>
  )
}

export default Search;
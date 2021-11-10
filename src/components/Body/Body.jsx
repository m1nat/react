import { Route, Routes } from 'react-router';

import Messanger from '../Masseger/Masseger';
import News from '../News/News';
import classes from './Body.module.scss';

const Body = () => {
  return (
    <div className={classes.main}>
      <div className={classes.header}></div>
      <div className={classes.length}>
        <Routes>
          <Route path='/'  element={<News />}/>
          <Route path='/messages' element={<Messanger />} />
        </Routes>
      </div>
    </div >
  )
}

export default Body;
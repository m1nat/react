import Header from '../../Header/Header';
import Aside from '../../Aside/Aside';
import Body from '../../Body/Body';

import './style.scss';

const MainPage = () => {
  return(
    <div className='wrapper'>
    <Header />
    <main>
      <Aside />
      <Body  />
    </main>
  </div>
  )
};

export default MainPage;
import Aside from './components/Aside/Aside';
import Body from './components/Body/Body';
import Header from './components/Header/Header';
import './style.scss';

function App() {
  return (
    <div className='wrapper'>
      <Header />
      <main>
        <Aside />
        <Body />
      </main>
    </div>
  );
}


export default App;

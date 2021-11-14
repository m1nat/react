import React from 'react';
import { Route, Routes } from 'react-router';

import MainPage from './components/Pages/Main-page/Main-page';
import SignInPage from './components/Pages/Sign-in/Sign-in';

function App() {
  return (
    <div>
      <Routes>
        <Route  element={ <MainPage /> } exact path='/*'/>
        <Route element={ <SignInPage /> }  path='/sign-in'/>
      </Routes>
    </div>
  );
}

export default App;

import React, { useState } from 'react';
import { signIn } from '../../../API/Api-handlers';
import { setIdLS } from '../../../LocalStorage-services/ls-services';

import classes from './Sign-in.module.scss';

const SignInPage = () => {
  const [credantions, setCred] = useState({
    email: '',
    password: ''
  });

  const login = async event => {
    event.preventDefault();

    await signIn(credantions)
      .then(response => {
        if (response.data.idToken) {
          setIdLS(response.data.idToken);
          window.location.pathname = '/';
        }
      })

    setCred({
      email: '',
      password: ''
    })

  };


  return (
    <div className={classes.wrapper_signIn}>
      <div className={classes.board}>
        <form onSubmit={login}>
          <h3>Sign in</h3>
          <input type="text" placeholder='Enter your email' autoComplete='true' onChange={e => setCred({ ...credantions, email: e.target.value })} />
          <input type="password" placeholder='Enter your password' onChange={e => setCred({ ...credantions, password: e.target.value })} />
          <button>
            Enter
          </button>
        </form>
      </div>
    </div>
  )

}

export default SignInPage;
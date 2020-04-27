import { signInWithGoogle } from '../../src/firebase.utils';
import React, { useContext } from 'react';
import Button from '@material-ui/core/Button';
import { auth } from '../../src/firebase.utils';
import UserContext from '../../src/context/userContext.context';
const SignIn = () => {
  const { userGlobal } = useContext(UserContext);
  return (
    <>
      {userGlobal === null ? (
        <>
          <Button onClick={signInWithGoogle}>Login</Button>
        </>
      ) : (
        <>
          <Button
            className='red'
            onClick={() => {
              auth.signOut();
            }}
          >
            Logout
          </Button>
          <h3>Hello, {userGlobal.displayName}</h3>
        </>
      )}
    </>
  );
};

export default SignIn;

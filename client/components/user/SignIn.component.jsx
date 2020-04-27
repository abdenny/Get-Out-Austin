import { signInWithGoogle } from '../../src/firebase.utils';
import React from 'react';
import Button from '@material-ui/core/Button';
import { auth } from '../../src/firebase.utils';
const SignIn = (props) => {
  console.log(props);
  return (
    <>
      {props.currentUser !== null ? (
        <>
          <div>Hello, {props.currentUser.displayName}!</div>
          <Button
            onClick={() => {
              auth.signOut();
            }}
          >
            Sign Out
          </Button>
        </>
      ) : (
        <Button onClick={signInWithGoogle}>Sign In</Button>
      )}
    </>
  );
};

export default SignIn;

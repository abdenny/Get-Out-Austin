import { signInWithGoogle } from '../../src/firebase.utils';
import React from 'react';
import Button from '@material-ui/core/Button';

const SignIn = () => {
  return (
    <>
      <Button onClick={signInWithGoogle}>Sign In</Button>
    </>
  );
};

export default SignIn;

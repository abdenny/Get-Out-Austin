import { signInWithGoogle } from '../../src/firebase.utils';
import React, { useContext } from 'react';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import { auth } from '../../src/firebase.utils';
import UserContext from '../../src/context/userContext.context';
import Link from 'next/link';
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
          <Avatar alt='User Image' src={userGlobal.photoURL} />
          <h3>Hello, {userGlobal.displayName}</h3>
          <Link href='/user'>
            <Button>Account</Button>
          </Link>
          <Button
            onClick={() => {
              auth.signOut();
            }}
          >
            Logout
          </Button>
        </>
      )}
    </>
  );
};

export default SignIn;

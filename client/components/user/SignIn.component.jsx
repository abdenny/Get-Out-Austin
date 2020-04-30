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
        <div
          style={{
            position: 'absolute',
            right: '16px',
            display: 'flex',
            flexDirection: 'row',
          }}
        >
          <Link href='/posts'>
            <Button>View Posts</Button>
          </Link>
          <Button onClick={signInWithGoogle}>Login</Button>
        </div>
      ) : (
        <div
          style={{
            position: 'absolute',
            right: '16px',
            display: 'flex',
            flexDirection: 'row',
          }}
        >
          <Link href='/posts'>
            <Button>View Posts</Button>
          </Link>
          <Link href='/createpost'>
            <Button>Create A Post</Button>
          </Link>
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
          <Avatar alt='User Image' src={userGlobal.photoURL} />
        </div>
      )}
    </>
  );
};

export default SignIn;

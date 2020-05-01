import { signInWithGoogle } from '../../src/firebase.utils';
import React, { useContext } from 'react';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import { auth } from '../../src/firebase.utils';
import UserContext from '../../src/context/userContext.context';
import Link from 'next/link';
import { makeStyles } from '@material-ui/core/styles';
import { display } from '@material-ui/system';
import Hidden from '@material-ui/core/Hidden';
const useStyles = makeStyles((theme) => ({
  layout: {
    [theme.breakpoints.up('sm')]: {
      position: 'absolute',
      right: '16px',
      top: '12px',
      display: 'flex',
      flexDirection: 'row',
    },
    [theme.breakpoints.down('xs')]: {
      // position: "absolute",
      // right: "16px",
      // top: "12px",
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
    },
  },
}));
const SignIn = () => {
  const { userGlobal } = useContext(UserContext);
  const classes = useStyles();
  return (
    <>
      {userGlobal === null ? (
        <div className={classes.layout}>
          <Link href='/posts'>
            <Button>View Posts</Button>
          </Link>
          <Button onClick={signInWithGoogle}>Login</Button>
        </div>
      ) : (
        <div className={classes.layout}>
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
          {/* <h3>Hello, {userGlobal.displayName}</h3> */}
          <Hidden xsDown implementation='css'>
            <Avatar alt='User Image' src={userGlobal.photoURL} />
          </Hidden>
        </div>
      )}
    </>
  );
};
export default SignIn;

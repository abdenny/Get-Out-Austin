import React, { useEffect, useContext, useState } from 'react';
import { useRouter } from 'next/router';
import UserContext from '../../src/context/userContext.context';

let UsersPostings = (props) => {
  const router = useRouter();
  console.log(props);
  const [postData, setData] = useState([]);
  const { userGlobal } = useContext(UserContext);

  useEffect(() => {
    if (router) {
      postToAdd();
    }
  }, [userGlobal]);

  let postToAdd = () => {
    if (userGlobal) {
      let mappedPosts = props.props.props.posts.map((post) => {
        if (post.uid === userGlobal.uid) {
          return post;
        }
      });
      console.log(mappedPosts);
      setData(mappedPosts);
    }
  };

  return (
    <>
      <h1>Your Postings</h1>
      <span>{JSON.stringify(postData)}</span>
    </>
  );
};
export default UsersPostings;

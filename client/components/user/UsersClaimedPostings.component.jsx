import React, { useEffect, useContext, useState } from 'react';
import { useRouter } from 'next/router';
import UserContext from '../../src/context/userContext.context';

let UsersClaimedPostings = (props) => {
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
      let mappedPosts = props.props.filter((post) => {
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
      <h1>Postings Attending</h1>
      <span>{JSON.stringify(postData)}</span>
    </>
  );
};
export default UsersClaimedPostings;

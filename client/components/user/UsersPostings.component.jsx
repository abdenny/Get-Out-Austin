import React, { useEffect, useContext, useState } from 'react';
import { useRouter } from 'next/router';
import UserContext from '../../src/context/userContext.context';
import UsersPostsCards from './UsersPostsCards.component';

let UsersPostings = (props) => {
  const router = useRouter();
  const [postData, setData] = useState([]);
  const { userGlobal } = useContext(UserContext);

  useEffect(() => {
    if (router) {
      postToAdd();
    }
  }, [userGlobal]);

  let postToAdd = () => {
    if (userGlobal) {
      let mappedPosts = props.props.props.posts.filter((post) => {
        if (post.uid === userGlobal.uid) {
          return post;
        }
      });
      setData(mappedPosts);
    }
  };

  return (
    <>
      <h2>Your Postings</h2>
      {postData.length > 0 ? (
        <UsersPostsCards filteredItems={postData} />
      ) : (
        <span> You have no posts</span>
      )}
    </>
  );
};
export default UsersPostings;

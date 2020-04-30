import React, { useEffect, useContext, useState } from 'react';
import { useRouter } from 'next/router';
import UserContext from '../../src/context/userContext.context';
import UsersPostsCards from './UsersPostsCards.component';

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
    let listOfIndex = [];
    let displayedPostings = [];
    if (userGlobal) {
      let mappedPosts = props.props.props.postGuests.filter((post) => {
        if (post.uid === userGlobal.uid) {
          return post.post_id;
        }
      });
      mappedPosts.forEach((post) => {
        listOfIndex.push(post.post_id);
      });

      let postsToDisplay = props.props.props.posts.filter((postings) => {
        listOfIndex.forEach((index) => {
          if (index == postings.id) {
            displayedPostings.push(postings);
          }
        });
      });
      setData(displayedPostings);
    }
  };

  return (
    <>
      <h1>Postings Attending</h1>
      {postData.length > 0 ? (
        // <span>{JSON.stringify(postData)}</span>
        <UsersPostsCards filteredItems={postData} />
      ) : (
        <span> You are attending no posts</span>
      )}
    </>
  );
};
export default UsersClaimedPostings;

import React, { useEffect, useContext, useState } from "react";
import { useRouter } from "next/router";
import UserContext from "../../src/context/userContext.context";
import UsersPostsCards from "./UsersPostsCards.component";

let UsersClaimedPostings = (props) => {
  const router = useRouter();
  const [postData, setData] = useState([]);
  const { userGlobal } = useContext(UserContext);

  useEffect(() => {
    if (router) {
      postToAdd();
      console.log(userGlobal);
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
      <h2>Posts Attending</h2>
      {postData.length > 0 ? (
        <UsersPostsCards filteredItems={postData} />
      ) : (
        <span> You are attending no posts</span>
      )}
    </>
  );
};
export default UsersClaimedPostings;

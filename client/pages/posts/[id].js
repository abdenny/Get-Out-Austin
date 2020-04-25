import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

export default (props) => {
  const router = useRouter();
  console.log(props);
  const [postData, setData] = useState([]);

  useEffect(() => {
    if (router) {
      findPost();
    }
  }, []);

  let findPost = () => {
    props.posts.forEach((post) => {
      console.log(post.id);
      if (post.id == router.query.id) {
        setData(post);
      }
    });
  };

  return (
    <>
      <h1>Get out post</h1>
      <span>{JSON.stringify(postData)}</span>
      <p>Post id: {router.query.id}</p>
    </>
  );
};

export async function getServerSideProps() {
  // Call an external API endpoint to get posts.
  const res = await fetch('http://localhost:3001/api/v1/posts');
  const posts = await res.json();

  // By returning { props: posts }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      posts,
    },
  };
}

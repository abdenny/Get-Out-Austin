import React from 'react';
import Postings from '../components/postings/Postings.component';
import 'isomorphic-unfetch';

const Posts = (props) => {
  return (
    <>
      <Postings props={props} />
    </>
  );
};
export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  const res = await fetch('http://localhost:3001/api/v1/posts');
  const posts = await res.json();
  // console.log(posts);

  // By returning { props: posts }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      posts,
    },
  };
}
export default Posts;

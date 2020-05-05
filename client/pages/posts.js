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
export async function getServerSideProps() {
  const res = await fetch(
    'http://ec2-18-223-99-203.us-east-2.compute.amazonaws.com/api/v1/posts'
  );
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

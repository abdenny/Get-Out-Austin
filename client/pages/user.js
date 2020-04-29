import React from 'react';
import UsersPostingsContainer from '../components/user/UsersPostingsContainer.component';

const user = (props) => {
  return (
    <>
      <UsersPostingsContainer props={props} />
    </>
  );
};
export default user;

export async function getServerSideProps() {
  // Call an external API endpoint to get posts.
  const res = await fetch('http://localhost:3001/api/v1/posts');
  const posts = await res.json();
  const res2 = await fetch('http://localhost:3001/api/v1/posts/guests');
  const postGuests = await res2.json();

  // By returning { props: posts }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      posts,
      postGuests,
    },
  };
}

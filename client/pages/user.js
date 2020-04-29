import React from 'react';
import UsersPostings from '../components/user/UsersPostings.component';
import UsersClaimedPostings from '../components/user/UsersClaimedPostings.component';
const user = (props) => {
  return (
    <>
      <UsersPostings props={props} />
      <UsersClaimedPostings props={props.postGuests} />
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

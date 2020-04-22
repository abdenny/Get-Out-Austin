import "isomorphic-unfetch";

import React from "react";
import Link from "next/link";
import Layout from "../components/Layout";

const Display: React.FunctionComponent = (props: any) => (
  <Layout title="About | Next.js + TypeScript Example">
    <h1>Display</h1>
    <p>This is the display</p>
    <ul>
      {props.posts.map((post: any, index: number) => {
        return (
          <li key={index}>
            {post.post_title} {post.post_description}
          </li>
        );
      })}
    </ul>

    <p>
      <Link href="/">
        <a>Go home</a>
      </Link>
    </p>
  </Layout>
);

export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  const res = await fetch("http://localhost:3001/posts");
  const posts = await res.json();
  console.log(posts);

  // By returning { props: posts }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      posts,
    },
  };
}

export default Display;

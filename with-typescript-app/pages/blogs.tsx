import React from "react";
import Link from "next/link";
import Layout from "../components/Layout";

const Blogs: React.FunctionComponent = () => (
  <Layout title="Blogs | Next.js + TypeScript Example">
    <h1>Blog</h1>
    <p>This is the blogs page</p>
    <p>
      <Link href="/">
        <a>Go home</a>
      </Link>
    </p>
  </Layout>
);

export default Blogs;

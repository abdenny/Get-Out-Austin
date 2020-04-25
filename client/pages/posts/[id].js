import React from 'react';

import { useRouter } from 'next/router';

export default () => {
  const router = useRouter();

  return (
    <>
      <h1>Get out post</h1>
      <p>Post id: {router.query.id}</p>
    </>
  );
};

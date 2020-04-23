import React from 'react';
import PostGrid from '../components/posts/PostGrid.component';
import PostContainer from '../components/posts/PostContainer.component';
import PostMap from '../components/posts/PostMap.component';
import MapContainer from '../components/posts/MapContainer.component';
import moduleName from '../components/posts/PostPageContainer.component';
import PostPageContainer from '../components/posts/PostPageContainer.component';

const Posts = () => {
  return (
    <PostPageContainer>
      <PostContainer>
        <PostGrid />
      </PostContainer>
      <MapContainer>
        <PostMap />
      </MapContainer>
    </PostPageContainer>
  );
};

export default Posts;

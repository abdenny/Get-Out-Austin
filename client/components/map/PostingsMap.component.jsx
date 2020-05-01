import { Component } from 'react';
import ReactMapGL, { Marker } from 'react-map-gl';

class PostMap extends Component {
  state = {
    viewport: {
      width: '600px',
      height: '100vh',
      latitude: 30.266666,
      longitude: -97.7431,
      zoom: 11,
    },
  };

  render() {
    return (
      <ReactMapGL
        mapStyle='mapbox://styles/mapbox/streets-v9'
        mapboxApiAccessToken='pk.eyJ1IjoiYWJkZW5ueSIsImEiOiJjazlkNjNrMmUwMGRkM21sZTB0OXdseWl2In0.iQVMKfidmj4BKLbJxAot6w'
        onViewportChange={(viewport) => this.setState({ viewport })}
        {...this.state.viewport}
      >
        {/* mapt through marker here */}
      </ReactMapGL>
    );
  }
}

export default PostMap;

import { Component } from 'react';
import ReactMapGL, { Marker, Popup } from 'react-map-gl';
import RoomIcon from '@material-ui/icons/Room';
import IconButton from '@material-ui/core/IconButton';

class PostMap extends Component {
  state = {
    viewport: {
      width: '600px',
      height: '100vh',
      latitude: 30.266666,
      longitude: -97.7431,
      zoom: 11,
    },
    selectedPost: null,
  };

  render() {
    let locations = this.props.props;
    return (
      // <></>
      <ReactMapGL
        mapStyle='mapbox://styles/mapbox/streets-v9'
        mapboxApiAccessToken='pk.eyJ1IjoiYWJkZW5ueSIsImEiOiJjazlkNjNrMmUwMGRkM21sZTB0OXdseWl2In0.iQVMKfidmj4BKLbJxAot6w'
        onViewportChange={(viewport) => this.setState({ viewport })}
        mapStyle='mapbox://styles/abdenny/ck9okzsce0kzf1iqtaqm9ddsq'
        {...this.state.viewport}
      >
        <Marker
          latitude={parseFloat(locations.Lat)}
          longitude={parseFloat(locations.Lon)}
        >
          <IconButton
            onClick={(e) => {
              e.preventDefault();
              this.setState(
                {
                  selectedPost: locations,
                },
                () => {
                  console.log(this.state.selectedPost.Lat);
                }
              );
            }}
          >
            <RoomIcon />
          </IconButton>
        </Marker>
        {this.state.selectedPost ? (
          <Popup
            latitude={parseFloat(this.state.selectedPost.Lat)}
            longitude={parseFloat(this.state.selectedPost.Lon)}
            onClose={() => {
              this.setState({ selectedPost: null });
            }}
          >
            <div>
              <h3>{this.state.selectedPost.post_title}</h3>
              <p>{this.state.selectedPost.post_description}</p>
              <p>{this.state.selectedPost.mapbox_description}</p>
            </div>
          </Popup>
        ) : null}
      </ReactMapGL>
    );
  }
}

export default PostMap;

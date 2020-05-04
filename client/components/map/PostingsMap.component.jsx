
import { Component } from 'react';
import ReactMapGL, { Marker, Popup } from 'react-map-gl';
import RoomIcon from '@material-ui/icons/Room';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import Link from 'next/link';


class PostMap extends Component {
  state = {
    viewport: {
      width: "600px",
      height: "100vh",
      latitude: 30.266666,
      longitude: -97.7431,
      zoom: 11,
    },
    selectedPost: null,
  };

  render() {
    let locations = this.props.locations;
    console.log(locations);
    return (
      // <></>
      <ReactMapGL
        mapStyle="mapbox://styles/mapbox/streets-v9"
        mapboxApiAccessToken="pk.eyJ1IjoiYWJkZW5ueSIsImEiOiJjazlkNjNrMmUwMGRkM21sZTB0OXdseWl2In0.iQVMKfidmj4BKLbJxAot6w"
        onViewportChange={(viewport) => this.setState({ viewport })}
        mapStyle="mapbox://styles/abdenny/ck9okzsce0kzf1iqtaqm9ddsq"
        {...this.state.viewport}
      >
        {locations.map((post, index) => {
          return (
            <Marker
              key={index}
              latitude={parseFloat(post.Lat)}
              longitude={parseFloat(post.Lon)}
            >
              <IconButton
                onClick={(e) => {
                  e.preventDefault();
                  this.setState(
                    {
                      selectedPost: post,
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
          );
        })}
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
              <Link href={`/posts/${this.state.selectedPost.id}`}>
                <Button color='secondary' size='small'>
                  View Posting
                </Button>
              </Link>
            </div>
          </Popup>
        ) : null}
      </ReactMapGL>
    );
  }
}

export default PostMap;

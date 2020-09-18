import React from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';


export class Maps extends React.Component {
    render() {
      const mapStyles = {
        width: "100%",
        height: "100%",
      };
      return (
        <Map
          google={this.props.google}
          zoom={15}
          style={mapStyles}
          initialCenter={{ lat: 21.4272, lng:  92.0058 }}
        />
      );
    }
  }

  export default GoogleApiWrapper({
    apiKey: 'AIzaSyDXzxQjiPYcZDPyTdy6dIAQ0zRUxN_PkQ4'
  })(Maps);
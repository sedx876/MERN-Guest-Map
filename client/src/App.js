import React, { Component } from 'react';
import { TileLayer, Marker, Popup, MapContainer } from 'react-leaflet'
import './styles/App.css'
import userLocationURL from './user_location.svg';
//import messageLocationURL from './message_location.svg';
import L from 'leaflet';
//import { Card, CardText, Button } from 'reactstrap';

const myIcon = L.icon({
  iconUrl: userLocationURL,
  iconSize: [50, 82],
  iconAnchor: [22, 94],
  popupAnchor: [0, -75],
});

// const messageIcon = L.icon({
//   iconUrl: messageLocationURL,
//   iconSize: [50, 82]
// });




class App extends Component {

  state = {
    location: {
      lat: 51.505,
      lng: -0.09,
    },
    haveUsersLocation: false,
    zoom: 13,
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition((position) => {
      this.setState({
        location: {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        }
      });
    });
  }

  render(){
    const position = [this.state.location.lat, this.state.location.lng]
  return (
    <MapContainer 
    className="map" 
    center={position} 
    zoom={13} 
    scrollWheelZoom={false}>
    <TileLayer
      attribution='&copy; 
      <a href="http://osm.org/copyright">Guest Map</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    { this.state.haveUsersLocation ? 
            <Marker
              position={position}
              icon={myIcon}>
            </Marker> : '' }
    <Marker 
    position={position}
    icon={myIcon}>
      <Popup>
        A pretty CSS3 popup. <br /> Easily customizable.
      </Popup>
    </Marker>
  </MapContainer>
  );
 }
}

export default App;

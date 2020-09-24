import React, { Component } from 'react';
import { Map, TileLayer as Basemap } from 'react-leaflet';
import carto from '@carto/carto.js/carto';
import Logo from './components/Logo';
import Layer from './components/Layer';
import Description from './components/Description';
import border_banten from './data/border_banten';
import merged from './data/merged';
import border from './data/border';
import './App.css';

const CARTO_BASEMAP = 'https://{s}.basemaps.cartocdn.com/rastertiles/dark_all/{z}/{x}/{y}.png';

class App extends Component {
  // Defines Map basic info
  state = {
    map: undefined,
    center: [-1.605328, 117.451067],
    zoom: 5,
  }

  // Defines the entry point to communicate with Carto
  cartoClient = new carto.Client({
    apiKey: process.env.REACT_APP_CARTO_API_KEY,
    username: process.env.REACT_APP_CARTO_USER_NAME
  });

  componentDidMount() {
    this.setState({ map: this.map });
  }

  render() {
    const { map, center, zoom } = this.state;

    return (
      <main>
        <Logo/>
        <Map center={center} zoom={zoom} ref={node => { this.map = node && node.leafletElement }}>
          <Basemap attribution="" url={CARTO_BASEMAP} />
          <Layer
            map={map}
            source={border.source}
            style={border.style}
            client={this.cartoClient}
            hidden={false}
          />
          <Layer
            map={map}
            source={merged.source}
            style={merged.style}
            client={this.cartoClient}
            hidden={false}
          />
          <Layer
            map={map}
            source={border_banten.source}
            style={border_banten.style}
            client={this.cartoClient}
            hidden={false}
          />
        </Map>
        <Description/>
      </main>
    );
  }
}

export default App;

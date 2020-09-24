import { Component } from 'react';
import carto from '@carto/carto.js/carto';

class Layer extends Component {

  componentDidMount() {
    const { client, map, source, style } = this.props;

    // Craete source, styles and layer with the given props
    const cartoSource = new carto.source.SQL(source);
    const cartoCSS = new carto.style.CartoCSS(style);
    const layer = new carto.layer.Layer(cartoSource, cartoCSS);

    // Add them to the client and to the map
    client.addLayer(layer);
    client.getLeafletLayer().addTo(map);
  }

  // ... missing methods to handle styles/source updates

  render() {
    return null;
  }
}

export default Layer;

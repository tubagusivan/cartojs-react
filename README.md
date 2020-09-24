# Description

This simple app is intended to showcase the integration of the funcionalities of Carto in a React application.

The following one are the main actors involved:
- [React](https://reactjs.org/)
- [React-Leaflet](https://react-leaflet.js.org/)
- [Leaflet](https://leafletjs.com/)
- [Carto.js](https://carto.com/developers/carto-js/)

The app itself is made of nothing more than a leaflet map with one layer both powered by carto.js. 

Let's say that leaflet if the pillar on top of which carto acts in order to provide data visualization capabilities to the user.
- The base map tiles are provided by __[Carto basemaps data service](https://carto.com/location-data-services/basemaps/)__
- The layer data source is hosted in Carto and retrieved using __[carto.source.SQL](https://carto.com/developers/carto-js/reference/#cartosourcesql)__
- The layer visualization styling is defined using __[CartoCss](https://carto.com/developers/styling/cartocss/)__

You can access the app __[here](https://MatteoDiPaolo.github.io/cartojs-react/)__

![README_1.png](https://github.com/MatteoDiPaolo/cartojs-react/raw/master/README_1.png)


# How to run

- `npm i`
- Set en variables:
    - `REACT_APP_CARTO_API_KEY`
    - `REACT_APP_CARTO_USER_NAME`
- `npm start`


# Notes

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

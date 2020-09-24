export default {
  style:
    `
    #layer {
      marker-width: 7;
      marker-fill: #EE4D5A;
      marker-fill-opacity: 0.9;
      marker-allow-overlap: true;
      marker-line-width: 1;
      marker-line-color: #FFFFFF;
      marker-line-opacity: 1;
      marker-comp-op: multiply;
    }
    `,
  source:
    `
    SELECT * FROM flight_routes_points WHERE orig = 'CGK'
    `
};

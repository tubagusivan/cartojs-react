export default {
  style:
    `
      #layer {
        marker-width: 5;
        marker-fill: ramp([id], (#ffe119, #4363d8, #3cb44b, #e6beff, #e6194b), ("mr-blonde", "mr-blue", "mr-green", "mr-pink", "mr-red"), "=");
        marker-fill-opacity: 1;
        marker-line-width: 0.5;
        marker-line-color: #FFFFFF;
        marker-line-opacity: 1;
      }
    `,
  source:
    `
      SELECT * FROM merged
    `
};
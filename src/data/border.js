export default {
  style:
    `
    #layer {
      polygon-fill: ramp([nama_kabup], (#7F3C8D, #11A579, #3969AC, #F2B701, #E73F74, #80BA5A, #E68310, #008695, #CF1C90, #f97b72, #A5AA99), ("PANDEGLANG", "SERANG", "TANGERANG", "LEBAK", "KOTA TANGERANG", "CILEGON", "TANGERANG SELATAN", "KOTA SERANG"), "=");
    }
    #layer::outline {
      line-width: 1;
      line-color: #FFFFFF;
      line-opacity: 0.5;
    }
    `,
  source:
    `
      SELECT * FROM indonesia_districts_integrasi WHERE id_provins = 36
    `
};

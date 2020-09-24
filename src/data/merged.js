export default {
  style:
    `
    #layer {
      marker-width: 23;
      marker-fill-opacity: 0.9;
      marker-allow-overlap: true;
      marker-line-width: 1;
      marker-line-color: #FFFFFF;
      marker-line-opacity: 1;
    }

    #layer [ nilai_kepercayaan >= 80] {
      marker-fill: #EE4D5A;
      marker-file: url('https://s3.amazonaws.com/com.cartodb.users-assets.production/maki-icons/fire-station-18.svg');
    }

    #layer [ nilai_kepercayaan <= 29] {
      marker-fill: #29990f;
      marker-file: url('https://s3.amazonaws.com/com.cartodb.users-assets.production/maki-icons/fire-station-18.svg');
    }

    #layer [ nilai_kepercayaan >= 30] [ nilai_kepercayaan <= 79] {
      marker-fill: #e7900d;
      marker-file: url('https://s3.amazonaws.com/com.cartodb.users-assets.production/maki-icons/fire-station-18.svg');
    }
    `,
  source:
    `
    SELECT
*,
substring(tingkat_kepercayaan FROM '[0-9]+')::numeric as nilai_kepercayaan
FROM
lngkajklwpgnrgglqnzueq
    `
};

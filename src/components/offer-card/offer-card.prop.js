import PropTypes from "prop-types";

export default PropTypes.shape({
  picture: PropTypes.string,
  isPremium: PropTypes.bool,
  costPerNight: PropTypes.number,
  title: PropTypes.string,
  type: PropTypes.string,
  rating: PropTypes.number
}).isRequired;


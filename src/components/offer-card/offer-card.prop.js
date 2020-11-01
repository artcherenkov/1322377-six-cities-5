import PropTypes from "prop-types";

export default PropTypes.shape({
  images: PropTypes.arrayOf(PropTypes.string),
  isPremium: PropTypes.bool,
  price: PropTypes.number,
  title: PropTypes.string,
  type: PropTypes.string,
  rating: PropTypes.number
}).isRequired;


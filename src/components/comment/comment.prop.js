import PropTypes from "prop-types";

export default PropTypes.shape({
  name: PropTypes.string,
  avatar: PropTypes.string,
  rating: PropTypes.number,
  date: PropTypes.string,
  content: PropTypes.string,
  id: PropTypes.string
}).isRequired;


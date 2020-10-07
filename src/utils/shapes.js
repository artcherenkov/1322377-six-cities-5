import PropTypes from "prop-types";

export const Shapes = {
  offer: {
    picture: PropTypes.string,
    isPremium: PropTypes.bool,
    costPerNight: PropTypes.number,
    title: PropTypes.string,
    type: PropTypes.string,
    rating: PropTypes.number
  }
};

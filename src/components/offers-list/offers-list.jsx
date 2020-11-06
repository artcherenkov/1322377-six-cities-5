import React from 'react';
import PropTypes from 'prop-types';

import OfferCard from "../offer-card/offer-card.jsx";
import OfferCardProp from '../offer-card/offer-card.prop';
import {sort} from "../../utils/sort";
import {SortType} from "../../const";
import {changeActiveOffer} from "../../store/action";
import {connect} from "react-redux";
import withOfferCardHover from "../../hocs/with-offer-card-hover/with-offer-card-hover";

const OfferCardWrapped = withOfferCardHover(OfferCard);

const OffersList = (props) => {
  const {offers, offersListType, onCardHover} = props;
  const sortType = props.sortType || SortType.DEFAULT;

  return (
    <div className={offersListType + ` places__list`}>
      {sort[sortType](offers).map((offer) => (
        <OfferCardWrapped offer={offer} offers={offers} key={offer.id} onCardHover={onCardHover} />
      ))}
    </div>
  );
};


OffersList.propTypes = {
  offers: PropTypes.arrayOf(OfferCardProp).isRequired,
  offersListType: PropTypes.string.isRequired,
  sortType: PropTypes.string,
  onCardHover: PropTypes.func.isRequired
};

const mapDispatchToProps = (dispatch) => ({
  onCardHover(newActiveType) {
    dispatch(changeActiveOffer(newActiveType));
  }
});

export {OffersList};
export default connect(() => ({}), mapDispatchToProps)(OffersList);

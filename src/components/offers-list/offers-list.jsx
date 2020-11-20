import React from 'react';
import PropTypes from 'prop-types';

import OfferCardView from "../offer-card-view/offer-card-view.jsx";
import OfferCardProp from '../offer-card-view/offer-card.prop';
import {sort} from "../../utils/sort";
import {SortType} from "../../const";
import {changeActiveOffer} from "../../store/action";
import {useDispatch} from "react-redux";
import withOfferCardHover from "../../hocs/with-offer-card-hover/with-offer-card-hover";

const OfferCardWrapped = withOfferCardHover(OfferCardView);

const OffersList = (props) => {
  const {offers, offersListType} = props;
  const sortType = props.sortType || SortType.DEFAULT;

  const dispatch = useDispatch();
  const onCardHover = (newActiveType) => {
    dispatch(changeActiveOffer(newActiveType));
  };

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
  sortType: PropTypes.string
};

export default OffersList;

import React from 'react';
import PropTypes from 'prop-types';

import {toCamelCase} from "../../utils/common.js";
import {Link} from "react-router-dom";
import OfferCardProp from "./offer-card.prop";

const OfferCard = (props) => {
  const {pictures, isPremium, costPerNight, title, type, rating, id} = props.offer;

  return (
    <article className="cities__place-card place-card"
      onMouseEnter={(evt) => {
        evt.preventDefault();
        props.onCardHover(id);
      }}
      onMouseLeave={(evt) => {
        evt.preventDefault();
        props.onCardHover(``);
      }}>
      {isPremium
        ? <div className="place-card__mark">
          <span>Premium</span>
        </div>
        : ``}
      <Link to={{
        pathname: `/offer/${id}`,
        state: {
          offers: props.offers
        }
      }} >
        <div className="cities__image-wrapper place-card__image-wrapper">
          <img className="place-card__image" src={pictures[0]} width="260" height="200" alt="Place image" />

        </div>
        <div className="place-card__info">
          <div className="place-card__price-wrapper">
            <div className="place-card__price">
              <b className="place-card__price-value">&euro;{costPerNight}</b>
              <span className="place-card__price-text">&#47;&nbsp;night</span>
            </div>
            <button className="place-card__bookmark-button button" type="button">
              <svg className="place-card__bookmark-icon" width="18" height="19">
                <use xlinkHref="#icon-bookmark" />
              </svg>
              <span className="visually-hidden">To bookmarks</span>
            </button>
          </div>
          <div className="place-card__rating rating">
            <div className="place-card__stars rating__stars">
              <span style={{width: Math.round(rating) * 20 + `%`}} />
              <span className="visually-hidden">Rating</span>
            </div>
          </div>
          <h2 className="place-card__name">{title}</h2>
          <p className="place-card__type">{toCamelCase(type)}</p>
        </div>
      </Link>
    </article>
  );
};

OfferCard.propTypes = {
  offer: OfferCardProp,
  offers: PropTypes.arrayOf(OfferCardProp),
  onCardHover: PropTypes.func.isRequired
};

export default OfferCard;

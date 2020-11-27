import React from 'react';
import PropTypes from 'prop-types';

import {toCamelCase} from "../../utils/common.js";
import {Link} from "react-router-dom";
import OfferCardProp from "./offer-card.prop";
import {useDispatch} from "react-redux";
import {toggleToFavorite} from "../../store/api-action";
import classNames from "classnames";

const OfferCardView = (props) => {
  const {images, isPremium, price, title, type, rating, id, isFavorite} = props.offer;
  let {onMouseEnter, onMouseLeave, onToFavoriteClick} = props;

  const dispatch = useDispatch();

  if (!onToFavoriteClick) {
    onToFavoriteClick = () => {
      dispatch(toggleToFavorite(id, +!isFavorite));
    };
  }

  const setPremiumMark = () => {
    if (isPremium) {
      return (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      );
    }
    return ``;
  };
  const getBtnClassNames = () => classNames(`place-card__bookmark-button button`, {'place-card__bookmark-button--active': isFavorite});

  return (
    <article className="cities__place-card place-card" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      {setPremiumMark()}
      <Link to={`/offer/${id}`}>
        <div className="cities__image-wrapper place-card__image-wrapper">
          <img className="place-card__image" src={images[0]} width="260" height="200" alt="Place image"/>
        </div>
      </Link>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className={getBtnClassNames()} type="button" onClick={onToFavoriteClick}>
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"/>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: Math.round(rating) * 20 + `%`}}/>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <Link to={`/offer/${id}`}>
          <h2 className="place-card__name">{title}</h2>
        </Link>
        <p className="place-card__type">{toCamelCase(type)}</p>
      </div>
    </article>
  );
};

OfferCardView.propTypes = {
  offer: OfferCardProp,
  onToFavoriteClick: PropTypes.func,
  onMouseEnter: PropTypes.func.isRequired,
  onMouseLeave: PropTypes.func.isRequired,
};

export default OfferCardView;

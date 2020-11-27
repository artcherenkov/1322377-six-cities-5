import React from 'react';
import PropTypes from 'prop-types';

import {toCamelCase} from "../../utils/common.js";
import {Link} from "react-router-dom";
import OfferCardProp from "../offer-card-view/offer-card.prop";
import {useDispatch} from "react-redux";
import {toggleToFavorite} from "../../store/api-action";

const OfferListView = (props) => {
  const {images, price, title, type, rating, id, isFavorite} = props.offer;
  let {onToFavoriteClick} = props;

  const dispatch = useDispatch();

  if (!onToFavoriteClick) {
    onToFavoriteClick = () => {
      dispatch(toggleToFavorite(id, +!isFavorite));
    };
  }

  return (
    <article className="favorites__card place-card">
      <div className="favorites__image-wrapper place-card__image-wrapper">
        <Link to={`/offer/${id}`}>
          <img className="place-card__image" src={images[0]} width="150" height="110" alt="Place image" />
        </Link>
      </div>
      <div className="favorites__card-info place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button
            className="place-card__bookmark-button place-card__bookmark-button--active button"
            type="button"
            onClick={onToFavoriteClick}
          >
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark" />
            </svg>
            <span className="visually-hidden">In bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: 20 * rating + `%`}}/>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`/offer/${id}`}>
            {title}
          </Link>
        </h2>
        <p className="place-card__type">{toCamelCase(type)}</p>
      </div>
    </article>
  );
};

OfferListView.propTypes = {
  offer: OfferCardProp,
  onToFavoriteClick: PropTypes.func
};

export default OfferListView;

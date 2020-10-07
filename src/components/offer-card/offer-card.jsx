import React from 'react';
import PropTypes from 'prop-types';
import {toCamelCase} from "../../utils.js";

export default class OfferCard extends React.PureComponent {
  constructor(props) {
    super(props);

    this.handleHover = this.handleHover.bind(this);
  }

  handleHover() {
    this.props.onCardHover(this);
  }

  render() {
    const {picture, isPremium, costPerNight, title, type, rating} = this.props.offer;

    return (
      <article className="cities__place-card place-card" onMouseOver={this.handleHover}>
        {isPremium
          ? <div className="place-card__mark">
            <span>Premium</span>
          </div>
          : ``}
        <div className="cities__image-wrapper place-card__image-wrapper">
          <a href="#">
            <img className="place-card__image" src={picture} width="260" height="200" alt="Place image" />
          </a>
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
          <h2 className="place-card__name">
            <a href="#">{title}</a>
          </h2>
          <p className="place-card__type">{toCamelCase(type)}</p>
        </div>
      </article>
    );
  }
}

OfferCard.propTypes = {
  offer: PropTypes.shape({
    picture: PropTypes.string,
    isPremium: PropTypes.bool,
    costPerNight: PropTypes.number,
    title: PropTypes.string,
    type: PropTypes.string,
    rating: PropTypes.number
  }),
  onCardHover: PropTypes.func.isRequired
};

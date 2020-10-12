import React from 'react';
import PropTypes from 'prop-types';

import {toCamelCase} from "../../utils/common.js";
import {Shapes} from "../../utils/shapes.js";
import {Link} from "react-router-dom";

export default class OfferCard extends React.PureComponent {
  constructor(props) {
    super(props);

    this.handleHover = this.handleHover.bind(this);
  }

  handleHover() {
    this.props.onCardHover(this);
  }

  render() {
    const {pictures, isPremium, costPerNight, title, type, rating, id} = this.props.offer;

    return (
      <article className="cities__place-card place-card" onMouseEnter={this.handleHover}>
        {isPremium
          ? <div className="place-card__mark">
            <span>Premium</span>
          </div>
          : ``}
        <div className="cities__image-wrapper place-card__image-wrapper">
          // todo обратить внимание
          <Link to={{
            pathname: `/offer/${id}`,
            state: {offer: this.props.offer}
          }} >
            <img className="place-card__image" src={pictures[0]} width="260" height="200" alt="Place image" />
          </Link>
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
  offer: PropTypes.shape(Shapes.offer),
  onCardHover: PropTypes.func.isRequired
};

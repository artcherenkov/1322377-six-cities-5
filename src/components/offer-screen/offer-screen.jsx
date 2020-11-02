import React from 'react';
import PropTypes from 'prop-types';
import {nanoid} from "nanoid";

import CommentForm from "../comment-form/comment-form.jsx";
import CommentsList from "../comment-list/comments-list";
import Map from "../map/map";
import {MapType, OffersListType} from "../../const";
import OffersList from "../offers-list/offers-list";
import withUserInput from "../../hocs/with-user-input/with-user-input";
import Features from "./components/features/features";
import Goods from "./components/goods/goods";
import Host from "./components/host/host";
import Header from "./components/header/header";
import PremiumMark from "./components/premium-mark/premium-mark";

const CommentFormWrapped = withUserInput(CommentForm);

export default class OfferScreen extends React.PureComponent {
  constructor(props) {
    super(props);

    this._offers = props.location.state.offers;
  }

  componentDidUpdate() {
    window.scrollTo(0, 0);
  }

  render() {
    const offer = this._offers.find((_offer) => _offer.id.toString() === this.props.match.params.id);
    const offers = this._offers;
    const {images, isPremium, price, title, type, rating, bedrooms, maxAdults, goods, host, description} = offer;

    return (
      <div className="page">
        <Header />
        <main className="page__main page__main--property">
          <section className="property">
            <div className="property__gallery-container container">
              <div className="property__gallery">
                {images.map((picture) => (
                  <div key={nanoid()} className="property__image-wrapper">
                    <img className="property__image" src={picture} alt="Photo studio" />
                  </div>
                ))}
              </div>
            </div>
            <div className="property__container container">
              <div className="property__wrapper">
                {isPremium && <PremiumMark />}
                <div className="property__name-wrapper">
                  <h1 className="property__name">{title}</h1>
                  <button className="property__bookmark-button button" type="button">
                    <svg className="property__bookmark-icon" width="31" height="33">
                      <use xlinkHref="#icon-bookmark" />
                    </svg>
                    <span className="visually-hidden">To bookmarks</span>
                  </button>
                </div>
                <div className="property__rating rating">
                  <div className="property__stars rating__stars">
                    <span style={{width: Math.round(rating) * 20 + `%`}} />
                    <span className="visually-hidden">Rating</span>
                  </div>
                  <span className="property__rating-value rating__value">{rating}</span>
                </div>
                <Features type={type} bedrooms={bedrooms} maxAdults={maxAdults} />
                <div className="property__price">
                  <b className="property__price-value">&euro;{price}</b>
                  <span className="property__price-text">&nbsp;night</span>
                </div>
                <Goods goods={goods} />
                <Host host={host} description={description} />
                {/*<section className="property__reviews reviews">*/}
                {/* <h2 className="reviews__title">Reviews &middot;*/}
                {/*   <span className="reviews__amount">{offer.comments.length}</span>*/}
                {/* </h2>*/}
                {/* <CommentsList comments={offer.comments} />*/}
                {/* <CommentFormWrapped />*/}
                {/*</section>*/}
              </div>
            </div>
            <Map offers={offers} cardType={MapType.PROPERTY} />
          </section>
          <div className="container">
            <section className="near-places places">
              <h2 className="near-places__title">Other places in the neighbourhood</h2>
              <OffersList offers={offers} offersListType={OffersListType.NEAR} />
            </section>
          </div>
        </main>
      </div>
    );
  }
}

OfferScreen.propTypes = {
  location: PropTypes.any,
  match: PropTypes.any
};

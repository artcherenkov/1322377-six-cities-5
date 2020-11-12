import React, {useCallback, useEffect} from 'react';
import PropTypes from 'prop-types';
import {nanoid} from "nanoid";

import CommentForm from "../comment-form/comment-form.jsx";
import CommentsList from "../comment-list/comments-list";
import Map from "../map/map";
import {AuthStatus, MapType, OffersListType} from "../../const";
import OffersList from "../offers-list/offers-list";
import withUserInput from "../../hocs/with-user-input/with-user-input";
import Features from "./components/features/features";
import Goods from "./components/goods/goods";
import Host from "./components/host/host";
import Header from "../header/header";
import PremiumMark from "./components/premium-mark/premium-mark";
import {useDispatch, useSelector} from "react-redux";
import {fetchCommentsList} from "../../store/api-action";
import {getCityOffers, getComments} from "../../store/reducers/app-data/selectors";

import {getAuthStatus, getUsername} from "../../store/reducers/app-user/selectors";
import {pushRouteToRedirect, redirectToRoute} from "../../store/action";
import browserHistory from "../../browser-history";

const CommentFormWrapped = withUserInput(CommentForm);

const getDataFromStore = ({activeOfferId}) => {
  const offers = useSelector(getCityOffers);
  const activeOffer = offers.find((_offer) => _offer.id.toString() === activeOfferId);
  return {
    offers,
    activeOffer,
    comments: useSelector(getComments),
    isLoggedIn: useSelector(getAuthStatus),
    username: useSelector(getUsername),
  };
};

const OfferScreen = React.memo(function OfferScreen(props) {
  const offerId = props.match.params.id;
  const {offers, activeOffer, comments, isLoggedIn, username} = getDataFromStore({activeOfferId: offerId});
  const {images, isPremium, price, title, type, rating, bedrooms, maxAdults, goods, host, description} = activeOffer;

  const dispatch = useDispatch();

  const currentPath = browserHistory.location.pathname;
  const onToBookmarkClick = useCallback(
      () => {
        dispatch(pushRouteToRedirect(currentPath));
        if (isLoggedIn === AuthStatus.AUTH) {
          dispatch(redirectToRoute(`/favorites`));
        } else {
          dispatch(redirectToRoute(`/login`));
        }
      },
      [dispatch, isLoggedIn, AuthStatus, redirectToRoute, currentPath]
  );

  const loadComments = useCallback(
      (id) => {
        dispatch(fetchCommentsList(id));
      },
      [dispatch, offerId]
  );

  useEffect(() => {
    window.scrollTo(0, 0);

    loadComments(offerId);
  }, [offerId]);

  return (
    <div className="page">
      <Header isLoggedIn={isLoggedIn} username={username}/>
      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery">
              {images.map((picture) => (
                <div key={nanoid()} className="property__image-wrapper">
                  <img className="property__image" src={picture} alt="Photo studio"/>
                </div>
              ))}
            </div>
          </div>
          <div className="property__container container">
            <div className="property__wrapper">
              {isPremium && <PremiumMark/>}
              <div className="property__name-wrapper">
                <h1 className="property__name">{title}</h1>
                <button className="property__bookmark-button button" type="button" onClick={onToBookmarkClick}>
                  <svg className="property__bookmark-icon" width="31" height="33">
                    <use xlinkHref="#icon-bookmark"/>
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={{width: Math.round(rating) * 20 + `%`}}/>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">{rating}</span>
              </div>
              <Features type={type} bedrooms={bedrooms} maxAdults={maxAdults}/>
              <div className="property__price">
                <b className="property__price-value">&euro;{price}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <Goods goods={goods}/>
              <Host host={host} description={description}/>
              <section className="property__reviews reviews">
                <h2 className="reviews__title">Reviews &middot;
                  <span className="reviews__amount">{comments.length}</span>
                </h2>
                <CommentsList comments={comments}/>
                {isLoggedIn === AuthStatus.AUTH && <CommentFormWrapped offerId={offerId}/>}
              </section>
            </div>
          </div>
          <Map offers={offers} cardType={MapType.PROPERTY}/>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <OffersList offers={offers} offersListType={OffersListType.NEAR}/>
          </section>
        </div>
      </main>
    </div>
  );
});

OfferScreen.propTypes = {
  match: PropTypes.any
};

export default OfferScreen;

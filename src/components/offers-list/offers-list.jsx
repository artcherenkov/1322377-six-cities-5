import React from 'react';
import PropTypes from 'prop-types';
import OfferCard from "../offer-card/offer-card.jsx";
import {nanoid} from "nanoid";

export default class OffersList extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {activeCard: {}};
    this.handleCardHover = this.handleCardHover.bind(this);
  }

  handleCardHover(activeCard) {
    this.setState({activeCard});
  }

  render() {
    const offers = this.props.offers;
    const offerCards = [];
    for (let offer of offers) {
      offerCards.push(<OfferCard offer={offer} key={nanoid(3)} onCardHover={this.handleCardHover}/>);
    }
    return (
      <div className="cities__places-list places__list tabs__content">
        {offerCards}
      </div>
    );
  }
}

OffersList.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.shape({
    picture: PropTypes.string,
    isPremium: PropTypes.bool,
    costPerNight: PropTypes.number,
    title: PropTypes.string,
    type: PropTypes.string,
    rating: PropTypes.number
  }))
};

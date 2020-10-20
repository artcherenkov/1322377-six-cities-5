import React from 'react';
import PropTypes from 'prop-types';

import OfferCard from "../offer-card/offer-card.jsx";
import OfferCardProp from '../offer-card/offer-card.prop';

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
      offerCards.push(<OfferCard offer={offer} offers={offers} key={offer.id} onCardHover={this.handleCardHover}/>);
    }
    return (
      <div className={this.props.offersListType + ` places__list`}>
        {offerCards}
      </div>
    );
  }
}

OffersList.propTypes = {
  offers: PropTypes.arrayOf(OfferCardProp),
  offersListType: PropTypes.string
};

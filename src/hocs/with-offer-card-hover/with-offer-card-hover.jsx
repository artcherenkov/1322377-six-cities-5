import React, {PureComponent} from "react";
import PropTypes from 'prop-types';

import OfferCardProp from '../../components/offer-card/offer-card.prop';

const withOfferCardHover = (Component) => {
  class WithOfferCardHover extends PureComponent {
    constructor(props) {
      super(props);

      this._onCardHover = this.props.onCardHover;
      this._onCardHover = this._onCardHover.bind(this);
      this.handleMouseEnter = this.handleMouseEnter.bind(this);
      this.handleMouseLeave = this.handleMouseLeave.bind(this);
    }

    handleMouseEnter(evt) {
      evt.preventDefault();

      const {id} = this.props.offer;
      this._onCardHover(id);
    }

    handleMouseLeave(evt) {
      evt.preventDefault();
      this._onCardHover(``);
    }

    render() {
      return (
        <Component
          {...this.props}
          onMouseEnter={this.handleMouseEnter}
          onMouseLeave={this.handleMouseLeave}
        />
      );
    }
  }

  WithOfferCardHover.propTypes = {
    onCardHover: PropTypes.func.isRequired,
    offer: OfferCardProp
  };

  return WithOfferCardHover;
};

export default withOfferCardHover;

import React from "react";
import PropTypes from 'prop-types';

import {SortOptionsList} from "../sort-options-list/sort-options-list";

export default class Sort extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isOpened: false
    };

    this.toggleSortList = this.toggleSortList.bind(this);
  }

  toggleSortList(evt) {
    evt.preventDefault();
    this.setState({
      isOpened: !this.state.isOpened
    });
  }

  render() {
    const {currentSortType, onSortTypeChange} = this.props;
    return (
      <form className="places__sorting" action="#" method="get">
        <span className="places__sorting-caption">Sort by</span>
        <span className="places__sorting-type" tabIndex="0" onClick={this.toggleSortList}>{currentSortType}
          <svg className="places__sorting-arrow" width="7" height="4">
            <use xlinkHref="#icon-arrow-select" />
          </svg>
        </span>
        <SortOptionsList
          currentSortType={currentSortType}
          onSortTypeChange={onSortTypeChange}
          isOpened={this.state.isOpened}
          toggleSortList={this.toggleSortList}
        />
      </form>
    );
  }
}

Sort.propTypes = {
  currentSortType: PropTypes.string.isRequired,
  onSortTypeChange: PropTypes.func.isRequired
};

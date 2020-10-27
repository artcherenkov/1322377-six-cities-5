import React from "react";
import PropTypes from 'prop-types';

import {SortOptionsList} from "../sort-options-list/sort-options-list";

const Sort = (props) => {
  const {currentSortType, onSortTypeChange, isOpened, onRollupToggle} = props;
  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex="0" onClick={onRollupToggle}>{currentSortType}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"/>
        </svg>
      </span>
      <SortOptionsList
        currentSortType={currentSortType}
        onSortTypeChange={onSortTypeChange}
        isOpened={isOpened}
        onRollupToggle={onRollupToggle}
      />
    </form>
  );
};

Sort.propTypes = {
  currentSortType: PropTypes.string.isRequired,
  onSortTypeChange: PropTypes.func.isRequired,
  isOpened: PropTypes.bool.isRequired,
  onRollupToggle: PropTypes.func.isRequired
};

export default Sort;

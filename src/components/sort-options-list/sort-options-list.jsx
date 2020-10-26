import React from "react";
import PropTypes from 'prop-types';
import {nanoid} from "nanoid";
import classNames from 'classnames';

import {SortType} from "../../const";

export const SortOptionsList = (props) => {
  const {currentSortType, onSortTypeChange, isOpened, onRollupToggle} = props;

  const getListClassNames = () => {
    return classNames({
      'places__options places__options--custom': true,
      'places__options--opened': isOpened
    });
  };

  const getOptionClassNames = (sortType) => {
    return classNames({
      'places__option': true,
      'places__option--active': sortType === currentSortType
    });
  };

  return (
    <ul className={getListClassNames()} onClick={onRollupToggle}>
      {Object.values(SortType).map((sortType) => {
        if (sortType !== SortType.DEFAULT) {
          return (
            <li className={getOptionClassNames(sortType)}
              tabIndex="0"
              key={nanoid()}
              onClick={(evt) => {
                evt.preventDefault();
                onSortTypeChange(sortType);
              }}
            >{sortType}</li>
          );
        }
        return ``;
      })}
    </ul>
  );
};

SortOptionsList.propTypes = {
  currentSortType: PropTypes.string.isRequired,
  onSortTypeChange: PropTypes.func.isRequired,
  isOpened: PropTypes.bool.isRequired,
  onRollupToggle: PropTypes.func.isRequired
};

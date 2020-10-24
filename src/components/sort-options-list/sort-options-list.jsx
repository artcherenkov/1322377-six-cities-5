import React from "react";
import PropTypes from 'prop-types';
import {nanoid} from "nanoid";

import {SortType} from "../../const";

export const SortOptionsList = (props) => {
  const {currentSortType, onSortTypeChange, isOpened, toggleSortList} = props;
  return (
    <ul className={`places__options places__options--custom ${isOpened ? `places__options--opened` : ``}`} onClick={toggleSortList}>
      {Object.values(SortType).map((sortType) => {
        if (sortType !== SortType.DEFAULT) {
          return (
            <li className={`places__option ${sortType === currentSortType ? `places__option--active` : ``}`}
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
  toggleSortList: PropTypes.func.isRequired
};

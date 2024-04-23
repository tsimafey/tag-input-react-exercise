import React from 'react';
import PropTypes from 'prop-types';
import styles from './TextInput.module.css';

import searchIcon from '../../assets/search.svg';

TextInput.propTypes = {
  searchValue: PropTypes.string.isRequired,
  handleSearchReset: PropTypes.func.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  textInputStyles: PropTypes.objectOf(PropTypes.string),
};

export function TextInput({
  placeholder = 'Enter Tag name',
  searchValue,
  handleSearchReset,
  handleInputChange,
  textInputStyles,
}) {
  return (
    <div className={styles.textInputContainer}>
      <div className={styles.searchIconWrapper}>
        <img src={searchIcon} alt="Search Icon" />
      </div>
      <input
        type="text"
        placeholder={placeholder}
        aria-label={placeholder}
        value={searchValue}
        onChange={handleInputChange}
        className={styles.textInput}
        style={textInputStyles}
      />
      {searchValue && (
        <div className={styles.clearButtonWrapper}>
          <button
            className={styles.clearButton}
            onClick={handleSearchReset}
            aria-label="Reset button"
          />
        </div>
      )}
    </div>
  );
}

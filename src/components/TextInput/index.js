import React from 'react';
import PropTypes from 'prop-types';
import styles from './TextInput.module.css';

// import { ReactComponent as SearchIcon } from '../../assets/search.svg';
import searchIcon from '../../assets/search.svg';

TextInput.propTypes = {
  searchValue: PropTypes.string.isRequired,
  setSearchValue: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  textInputStyles: PropTypes.shape(),
};

export function TextInput({
  placeholder = 'Enter Tag name',
  searchValue,
  setSearchValue,
  textInputStyles,
}) {
  const handleSearchReset = () => {
    setSearchValue('');
  };

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
        onChange={(e) => setSearchValue(e.target.value)}
        className={styles.textInput}
        style={textInputStyles}
      />
      {searchValue ? (
        <div className={styles.clearButtonWrapper}>
          <button
            className={styles.clearButton}
            onClick={handleSearchReset}
            aria-label="Reset button"
          />
        </div>
      ) : (
        false
      )}
    </div>
  );
}

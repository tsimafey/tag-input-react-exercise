import React from 'react';
import PropTypes from 'prop-types';
import styles from './TextInput.module.css';

TextInput.propTypes = {
  searchValue: PropTypes.string.isRequired,
  setSearchValue: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  textInputStyles: PropTypes.shape(),
};

export function TextInput({
  placeholder,
  searchValue,
  setSearchValue,
  textInputStyles,
}) {
  const handleSearchReset = () => {
    setSearchValue('');
  };

  return (
    <div className={styles.textInputContainer}>
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
          <button className={styles.clearButton} onClick={handleSearchReset} />
        </div>
      ) : (
        false
      )}
    </div>
  );
}

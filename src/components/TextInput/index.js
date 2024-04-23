import React from 'react';
import styles from './TextInput.module.css';

export function TextInput({
  placeholder,
  searchValue,
  setSearchValue,
  textInputStyles,
}) {
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
          <button className={styles.clearButton} onClick={() => null} />
        </div>
      ) : (
        false
      )}
    </div>
  );
}

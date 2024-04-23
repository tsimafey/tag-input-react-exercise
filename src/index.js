import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './index.module.css';

import { TextInput } from './components/TextInput';
import { Suggestions } from './components/Suggestions';
import { Tags } from './components/Tags';

import { sortSuggestionsBySearchValue } from './utils/sortSuggestionsBySearchValue';

TagInput.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.string),
  suggestions: PropTypes.arrayOf(
    PropTypes.shape({ title: PropTypes.string, score: PropTypes.number }),
  ),
  handleSaveButtonClick: PropTypes.func.isRequired,
  handleRemoveTagClick: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  textInputStyles: PropTypes.shape(),
};

export function TagInput({
  tags = [],
  suggestions = [],
  handleSaveButtonClick,
  handleRemoveTagClick,
  placeholder = '',
  textInputStyles = {},
}) {
  const [searchValue, setSearchValue] = useState('');
  const [sortedSuggestions, setSortedSuggestions] = useState(suggestions);

  useEffect(() => {
    if (searchValue) {
      setSortedSuggestions([
        ...sortSuggestionsBySearchValue(searchValue, suggestions),
      ]);
    }
  }, [searchValue]);

  return (
    <div className={styles.tagInputContainer} data-testid="tag-input">
      <TextInput
        placeholder={placeholder}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        textInputStyles={textInputStyles}
      />
      <div className={styles.tagInputBottomContainer}>
        {searchValue ? (
          <Suggestions
            list={sortedSuggestions}
            chosenTags={tags}
            handleSaveButtonClick={handleSaveButtonClick}
            setSearchValue={setSearchValue}
          />
        ) : (
          <Tags tags={tags} handleRemoveTagClick={handleRemoveTagClick} />
        )}
      </div>
    </div>
  );
}

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './index.module.css';

import { TextInput } from './components/TextInput';
import { Suggestions } from './components/Suggestions';
import { Tags } from './components/Tags';

import { sortSuggestionsBySearchValue } from './utils/sortSuggestionsBySearchValue';

TagInput.propTypes = {
  tags: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      score: PropTypes.number.isRequired,
    }),
  ),
  suggestions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      score: PropTypes.number.isRequired,
    }),
  ),
  handleSaveButtonClick: PropTypes.func.isRequired,
  handleRemoveTagClick: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  textInputStyles: PropTypes.shape(),
  saveButtonStyles: PropTypes.shape(),
};

export function TagInput({
  tags = [],
  suggestions = [],
  handleSaveButtonClick,
  handleRemoveTagClick,
  placeholder = '',
  textInputStyles = {},
  saveButtonStyles = {},
}) {
  const [searchValue, setSearchValue] = useState('');
  const [sortedSuggestions, setSortedSuggestions] = useState(suggestions);

  const handleSearchReset = () => {
    setSearchValue('');
  };

  const handleInputChange = (e) => {
    setSearchValue(e.target.value);
    setSortedSuggestions(
      sortSuggestionsBySearchValue(e.target.value, suggestions),
    );
  };

  return (
    <div className={styles.tagInputContainer} data-testid="tag-input">
      <TextInput
        placeholder={placeholder}
        searchValue={searchValue}
        handleSearchReset={handleSearchReset}
        handleInputChange={handleInputChange}
        textInputStyles={textInputStyles}
      />
      <div className={styles.tagInputBottomContainer}>
        {searchValue ? (
          <Suggestions
            list={sortedSuggestions}
            chosenTags={tags}
            handleSaveButtonClick={handleSaveButtonClick}
            setSearchValue={setSearchValue}
            saveButtonStyles={saveButtonStyles}
          />
        ) : (
          <Tags tags={tags} handleRemoveTagClick={handleRemoveTagClick} />
        )}
      </div>
    </div>
  );
}

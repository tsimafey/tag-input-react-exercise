import React, { useState, useEffect } from 'react';
import styles from './index.module.css';

import { TextInput } from './components/TextInput';
import { Suggestions } from './components/Suggestions';
import { Tags } from './components/Tags';

import { sortSuggestionsBySearchValue } from './utils/sortSuggestionsBySearchValue';

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
    <div className={styles.tagInputContainer}>
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

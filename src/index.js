import React, { useState, useEffect } from 'react';
import styles from './index.module.css';

import { TextInput } from './components/TextInput';
import { Suggestions } from './components/Suggestions';
import { Tags } from './components/Tags';

import { sortTagsBySearchValue } from './utils/sortTagsBySearchValue';

export function TagInput({ allTags, placeholder, textInputStyles }) {
  const [searchValue, setSearchValue] = useState('');
  const [chosenTags, setChosenTags] = useState([]);
  const [sortedTags, setSortedTags] = useState(allTags);

  useEffect(() => {
    if (searchValue) {
      setSortedTags([...sortTagsBySearchValue(searchValue, allTags)]);
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
            allTags={sortedTags}
            chosenTags={chosenTags}
            setChosenTags={setChosenTags}
            setSearchValue={setSearchValue}
          />
        ) : (
          <Tags tags={chosenTags} setChosenTags={setChosenTags} />
        )}
      </div>
    </div>
  );
}

import React, { useState, useEffect } from 'react';
import styles from './index.module.css';

import { TextInput } from './components/TextInput/TextInput';
import { Suggestions } from './components/Suggestions';
import { Tag } from './components/Tag';

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
      <div>
        {searchValue ? (
          <Suggestions
            allTags={sortedTags}
            chosenTags={chosenTags}
            setChosenTags={setChosenTags}
            setSearchValue={setSearchValue}
          />
        ) : (
          chosenTags.map((tag) => (
            <Tag title={tag} key={tag} setChosenTags={setChosenTags} />
          ))
        )}
      </div>
    </div>
  );
}

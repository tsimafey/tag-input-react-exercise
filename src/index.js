import React, { useState } from 'react';
import styles from './index.module.css';

import { TextInput } from './components/TextInput';
import { Suggestions } from './components/Suggestions';

export function TagInput({ allTags, placeholder }) {
  const [searchValue, setSearchValue] = useState('');

  return (
    <div className={styles.tagInputContainer}>
      <TextInput
        placeholder={placeholder}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
      <div>
        {searchValue ? (
          <Suggestions allTags={allTags} setSearchValue={setSearchValue} />
        ) : (
          false
        )}
      </div>
    </div>
  );
}

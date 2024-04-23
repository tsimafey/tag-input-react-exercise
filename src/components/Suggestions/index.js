import React, { useState } from 'react';
import styles from './Suggestions.module.css';

import { SuggestionItem } from '../SuggestionItem';

Suggestions.propTypes = {
  list: PropTypes.arrayOf(shape({ title: string, score: number })),
  chosenTags: PropTypes.arrayOf(string),
  setSearchValue: PropTypes.func.isRequired,
  handleSaveButtonClick: PropTypes.func.isRequired,
};

export function Suggestions({
  list,
  chosenTags,
  setSearchValue,
  handleSaveButtonClick,
}) {
  const [newChosenTags, setNewChosenTags] = useState(chosenTags);

  const handleButtonClick = () => {
    handleSaveButtonClick(newChosenTags);
    setSearchValue('');
  };

  return (
    <div>
      {list.map((suggestion) => (
        <SuggestionItem
          key={suggestion.title}
          title={suggestion.title}
          score={suggestion.score}
          chosenTags={newChosenTags}
          setChosenTags={setNewChosenTags}
        />
      ))}
      <button
        onClick={handleButtonClick}
        className={styles.suggestionsSaveButton}
      >
        Zapisz
      </button>
    </div>
  );
}

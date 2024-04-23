import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './Suggestions.module.css';

import { SuggestionItem } from '../SuggestionItem';

Suggestions.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({ title: PropTypes.string, score: PropTypes.number }),
  ),
  chosenTags: PropTypes.arrayOf(PropTypes.string),
  setSearchValue: PropTypes.func.isRequired,
  handleSaveButtonClick: PropTypes.func.isRequired,
};

export function Suggestions({
  list = [],
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
    <div data-testid='suggestions-container'>
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
        Save
      </button>
    </div>
  );
}

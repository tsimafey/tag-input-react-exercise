import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './Suggestions.module.css';

import { SuggestionItem } from '../SuggestionItem';

Suggestions.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.string, title: PropTypes.string, score: PropTypes.number }),
  ),
  chosenTags: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.string, title: PropTypes.string, score: PropTypes.number }),
  ),
  setSearchValue: PropTypes.func.isRequired,
  handleSaveButtonClick: PropTypes.func.isRequired,
  saveButtonStyles: PropTypes.objectOf(PropTypes.string),
};

export function Suggestions({
  list = [],
  chosenTags,
  setSearchValue,
  handleSaveButtonClick,
  saveButtonStyles = {},
}) {
  const [newChosenTags, setNewChosenTags] = useState(chosenTags);

  const handleButtonClick = () => {
    handleSaveButtonClick(newChosenTags);
    setSearchValue('');
  };

  return (
    <div data-testid="suggestions-container">
      {list.map((suggestion) => (
        <SuggestionItem
          key={suggestion.id}
          suggestion={suggestion}
          chosenTags={newChosenTags}
          setChosenTags={setNewChosenTags}
        />
      ))}
      <button
        onClick={handleButtonClick}
        className={styles.suggestionsSaveButton}
        style={saveButtonStyles}
      >
        Save
      </button>
    </div>
  );
}

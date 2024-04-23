import React from 'react';
import PropTypes from 'prop-types';
import styles from './SuggestionItem.module.css';

SuggestionItem.propTypes = {
  suggestion: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    score: PropTypes.number.isRequired,
  }),
  chosenTags: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      score: PropTypes.number.isRequired,
    }),
  ),
  setChosenTags: PropTypes.func.isRequired,
};

export function SuggestionItem({ suggestion, chosenTags = [], setChosenTags }) {
  const isChecked = chosenTags.some((tag) => tag.id === suggestion.id) || false;

  const handleCheckboxChange = () => {
    if (isChecked) {
      removeTag(suggestion.id);
    } else {
      addTag(suggestion);
    }
  };

  const removeTag = (tagToRemove) => {
    const newTags = chosenTags.filter((tag) => tag.id !== tagToRemove);
    setChosenTags(newTags);
  };

  const addTag = (tagToAdd) => {
    const newTags = [...chosenTags, tagToAdd];
    setChosenTags(newTags);
  };

  return (
    <div
      className={styles.suggestionItem}
      data-testid={`suggestion-item-${suggestion.id}`}
    >
      <input
        type="checkbox"
        id={suggestion.id}
        checked={isChecked}
        onChange={handleCheckboxChange}
      />
      <label htmlFor={suggestion.id} className={styles.suggestionItemTitle}>
        {suggestion.title}
      </label>
      <span>+{suggestion.score}</span>
    </div>
  );
}

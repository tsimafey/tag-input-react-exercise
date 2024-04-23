import React from 'react';
import PropTypes from 'prop-types';
import styles from './SuggestionItem.module.css';

SuggestionItem.propTypes = {
  title: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
  chosenTags: PropTypes.arrayOf(PropTypes.string),
  setChosenTags: PropTypes.func.isRequired,
};

export function SuggestionItem({
  title,
  score,
  chosenTags = [],
  setChosenTags,
}) {
  const checked = chosenTags.includes(title);

  const handleCheckboxChange = () => {
    if (checked) {
      removeTag(title);
    } else {
      addTag(title);
    }
  };

  const removeTag = (tagToRemove) => {
    const newTags = chosenTags.filter((tag) => tag !== tagToRemove);
    setChosenTags(newTags);
  };

  const addTag = (tagToAdd) => {
    const newTags = [...chosenTags, tagToAdd];
    setChosenTags(newTags);
  };

  return (
    <div
      className={styles.suggestionItem}
      data-testid={`suggestion-item-${title}`}
    >
      <input
        type="checkbox"
        id={title}
        checked={checked}
        onChange={handleCheckboxChange}
      />
      <label htmlFor={title} className={styles.suggestionItemTitle}>
        {title}
      </label>
      <span>+{score}</span>
    </div>
  );
}

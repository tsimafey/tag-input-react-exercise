import React from 'react';
import styles from './SuggestionItem.module.css';

export function SuggestionItem({ title, score, chosenTags, setChosenTags }) {
  const checked = chosenTags.includes(title);

  const removeTag = () => {
    setChosenTags(chosenTags.filter((tag) => tag !== title));
  };

  const addTag = () => {
    setChosenTags([...chosenTags, title]);
  };

  const handleCheckboxChange = () => (checked ? removeTag() : addTag());

  return (
    <div className={styles.suggestionItem}>
      <input
        type="checkbox"
        checked={checked}
        onChange={handleCheckboxChange}
      />
      <span className={styles.suggestionItemTitle}>{title}</span>
      <span>+{score}</span>
    </div>
  );
}
import React from 'react';

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
    <div>
      <input
        type="checkbox"
        checked={checked}
        onChange={handleCheckboxChange}
      />
      <span>{title}</span>
      <span>+{score}</span>
    </div>
  );
}

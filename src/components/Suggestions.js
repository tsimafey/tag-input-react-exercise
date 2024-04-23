import React, { useState } from 'react';
import { SuggestionItem } from './SuggestionItem';

export function Suggestions({
  allTags,
  chosenTags,
  setChosenTags,
  setSearchValue,
}) {
  const [newChosenTags, setNewChosenTags] = useState(chosenTags);

  const handleButtonClick = () => {
    setChosenTags(newChosenTags);
    setSearchValue('');
  };

  return (
    <div>
      {allTags.map((tag) => (
        <SuggestionItem
          key={tag.title}
          title={tag.title}
          score={tag.score}
          chosenTags={newChosenTags}
          setChosenTags={setNewChosenTags}
        />
      ))}
      <button onClick={handleButtonClick}>Zapisz</button>
    </div>
  );
}

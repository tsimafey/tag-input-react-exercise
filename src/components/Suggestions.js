import React from 'react';
import { SuggestionItem } from './SuggestionItem';

export function Suggestions({ allTags }) {
  return (
    <div>
      {allTags.map((tag) => (
        <SuggestionItem key={tag.title} title={tag.title} score={tag.score} />
      ))}
      <button onClick={() => null}>Zapisz</button>
    </div>
  );
}

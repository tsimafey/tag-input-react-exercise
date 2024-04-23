import React from 'react';

export function SuggestionItem({ title, score }) {
  return (
    <div>
      <input type="checkbox" />
      <span>{title}</span>
      <span>+{score}</span>
    </div>
  );
}

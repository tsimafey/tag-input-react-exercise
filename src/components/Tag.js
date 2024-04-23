import React from 'react';

export function Tag({ title, setChosenTags }) {
  const handleXClick = () => {
    setChosenTags((prev) => prev.filter((tag) => tag !== title));
  };

  return (
    <div>
      <span>{title}</span>
      <span onClick={handleXClick}>X</span>
    </div>
  );
}

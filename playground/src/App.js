import React, { TagInput } from 'tag-input-react-exercise';
import './App.css';
import { useState } from 'react';

const TAGS = [
  {
    id: '1',
    title: 'Maryla Rodowicz',
    score: 40,
  },
  {
    id: '2',
    title: 'Odmrażanie trupa',
    score: 35,
  },
  {
    id: '3',
    title: 'Festiwal w Opolu',
    score: 32,
  },
  {
    id: '4',
    title: 'Legendy polskiej sceny muzycznej',
    score: 30,
  },
  {
    id: '5',
    title: 'Przeboje lat 70',
    score: 26,
  },
  {
    id: '6',
    title: 'Ikonka popkultury',
    score: 25,
  },
  {
    id: '7',
    title: 'Polska muzyka',
    score: 17,
  },
  {
    id: '8',
    title: 'Kabaret',
    score: 12,
  },
];

function App() {
  const [tags, setTags] = useState([]);

  const handleSaveButtonClick = (tags) => {
    setTags(tags);
  };

  const handleRemoveTagClick = (id) => {
    setTags((prev) => prev.filter((tag) => tag.id !== id));
  };

  return (
    <div className="App">
      <TagInput
        suggestions={TAGS}
        tags={tags}
        handleSaveButtonClick={handleSaveButtonClick}
        handleRemoveTagClick={handleRemoveTagClick}
      />
    </div>
  );
}

export default App;

import React, { TagInput } from 'tag-input-react-exercise';
import './App.css';

const TAGS = [
  {
    title: 'Maryla Rodowicz',
    score: 40,
  },
  {
    title: 'Odmrażanie trupa',
    score: 35,
  },
  {
    title: 'Festiwal w Opolu',
    score: 32,
  },
  {
    title: 'Legendy polskiej sceny muzycznej',
    score: 30,
  },
  {
    title: 'Przeboje lat 70',
    score: 26,
  },
  {
    title: 'Ikonka popkultury',
    score: 25,
  },
  {
    title: 'Polska muzyka',
    score: 17,
  },
  {
    title: 'Kabaret',
    score: 12,
  },
];

function App() {
  return (
    <div className="App">
      <TagInput allTags={TAGS} />
    </div>
  );
}

export default App;

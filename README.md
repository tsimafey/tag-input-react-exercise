# Tag Input

## Usage

Here's a sample implementation that initializes the component with a list of initial `tags` list. Apart from this, there are multiple events, handlers for which need to be set. For more details, go through the [API](#Options).

```javascript
import React, { useState } from 'react';
import { TagInput } from 'tag-input-react-exercise';
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
];

function App() {
  const [tags, setTags] = useState([]);

  return (
    <div>
      <TagInput suggestions={TAGS} tags={tags} setTags={setTags} />
    </div>
  );
}

render(<App />, document.getElementById('root'));
```

## Options

| Option                                            | Type            | Default     | Description                                                                         |
| ------------------------------------------------- | --------------- | ----------- | ----------------------------------------------------------------------------------- |
| [`tags`](#tags)                                   | `Array`         | `[]`        | An array of tags that are displayed as pre-selected.                                |
| [`suggestions`](#suggestions)                     | `Array`         | `[]`        | An array of suggestions that are used as basis for showing suggestions.             |
| [`handleSaveButtonClick`](#handleSaveButtonClick) | `Function`      | `undefined` | Function called when the user clicks to Save Button after he chose tags (required). |
| [`handleRemoveTagClick`](#handleRemoveTagClick)   | `Function`      | `undefined` | Function called when the user clicks to Close icon of a Tag item (required).        |
| [`placeholder`](#placeholder)                     | `String`        | `''`        | The placeholder shown for the input.                                                |
| [`textInputStyles`](#textInputStyles)             | `Styles Object` | `{}`        | The object which rewrites the default text input styles.                            |
| [`saveButtonStyles`](#saveButtonStyles)           | `Styles Object` | `{}`        | The object which rewrites the default Save button styles.                           |

### tags

An array of tags that are displayed as pre-selected. Each tag should be a unique `string`.

### suggestions

An array of suggestions that are used as basis for showing suggestions. These objects should follow the following structure:

const suggestions = [
{ title: "Apples", score: 10 },
{ title: "Oranges", score: 20 },
]

### handleSaveButtonClick

Function called when the user clicks to Save Button after he chose tags (required).

```js
function(tags) {
    // save new array of chosen tags
}
```

### handleRemoveTagClick

Function called when the user clicks to Close icon of a Tag item (required).

```js
function(tag) {
    // remove tag from array of chosen tags
}
```

### placeholder

The placeholder shown for the input.

```js
let placeholder = 'Add new tag';
```

### textInputStyles

The object which rewrites the default text input styles.

```js
let textInputStyles = {
  border: '1px solid blue',
  width: '50%',
};
```

### saveButtonStyles

The object which rewrites the default Save button styles.

```js
let saveButtonStyles = {
  border: '1px solid yellow',
  backgroundColor: 'red'
  borderRadius: '3px',
};
```

## Dev

The component is written in ES6 and uses [Rollup](https://rollupjs.org/) as its build tool.

## Playground

These are the steps to get the component and try it in playground:

```
git clone git@github.com:tsimafey/tag-input-react-exercise.git
cd tag-input-react-exercise
npm install
cd playground
npm install
cd ..
npm run dev
```

open [http://localhost:3000](http://localhost:3000)

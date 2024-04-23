import React from 'react';
import styles from './Tags.module.css';

import { Tag } from '../Tag';

export function Tags({ tags, setChosenTags }) {
  return (
    <div className={styles.tagsContainer}>
      {tags.map((tag) => (
        <Tag title={tag} key={tag} setChosenTags={setChosenTags} />
      ))}
    </div>
  );
}

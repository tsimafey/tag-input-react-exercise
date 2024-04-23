import React from 'react';
import styles from './Tags.module.css';

import { Tag } from '../Tag';

export function Tags({ tags, handleRemoveTagClick }) {
  return (
    <div className={styles.tagsContainer}>
      {tags.map((tag) => (
        <Tag
          title={tag}
          key={tag}
          handleRemoveTagClick={handleRemoveTagClick}
        />
      ))}
    </div>
  );
}

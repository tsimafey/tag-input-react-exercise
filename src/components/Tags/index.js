import React from 'react';
import styles from './Tags.module.css';

import { TagItem } from '../TagItem';

Tags.propTypes = {
  tags: PropTypes.arrayOf(string),
  handleRemoveTagClick: PropTypes.func.isRequired,
};

export function Tags({ tags, handleRemoveTagClick }) {
  return (
    <div className={styles.tagsContainer}>
      {tags.map((tag) => (
        <TagItem
          title={tag}
          key={tag}
          handleRemoveTagClick={handleRemoveTagClick}
        />
      ))}
    </div>
  );
}

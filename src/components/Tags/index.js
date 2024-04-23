import React from 'react';
import PropTypes from 'prop-types';
import styles from './Tags.module.css';

import { TagItem } from '../TagItem';

Tags.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.string),
  handleRemoveTagClick: PropTypes.func.isRequired,
};

export function Tags({ tags = [], handleRemoveTagClick }) {
  return (
    <div className={styles.tagsContainer} data-testid='tags-container'>
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

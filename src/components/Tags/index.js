import React from 'react';
import PropTypes from 'prop-types';
import styles from './Tags.module.css';

import { TagItem } from '../TagItem';

Tags.propTypes = {
  tags: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.string, title: PropTypes.string, score: PropTypes.number }),
  ),
  handleRemoveTagClick: PropTypes.func.isRequired,
};

export function Tags({ tags = [], handleRemoveTagClick }) {
  return (
    <div className={styles.tagsContainer} data-testid="tags-container">
      {tags.map((tag) => (
        <TagItem
          tag={tag}
          key={tag.id}
          handleRemoveTagClick={handleRemoveTagClick}
        />
      ))}
    </div>
  );
}

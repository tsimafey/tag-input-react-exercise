import React from 'react';
import PropTypes from 'prop-types';
import styles from './TagItem.module.css';

TagItem.propTypes = {
  tag: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    score: PropTypes.number.isRequired,
  }),
  handleRemoveTagClick: PropTypes.func.isRequired,
};

export function TagItem({ tag, handleRemoveTagClick }) {
  const handleXClick = () => {
    handleRemoveTagClick(tag.id);
  };

  return (
    <div className={styles.tag} data-testid="tag-item">
      <span className={styles.tagTitle}>{tag.title}</span>
      <button
        className={styles.tagXButton}
        onClick={handleXClick}
        aria-label="Remove tag"
      />
    </div>
  );
}

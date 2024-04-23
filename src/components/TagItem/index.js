import React from 'react';
import styles from './TagItem.module.css';

TagItem.propTypes = {
  title: PropTypes.string.isRequired,
  handleRemoveTagClick: PropTypes.func.isRequired,
};

export function TagItem({ title, handleRemoveTagClick }) {
  const handleXClick = () => {
    handleRemoveTagClick(title);
  };

  return (
    <div className={styles.tag}>
      <span className={styles.tagTitle}>{title}</span>
      <button className={styles.tagXButton} onClick={handleXClick} />
    </div>
  );
}

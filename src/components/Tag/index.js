import React from 'react';
import styles from './Tag.module.css';

export function Tag({ title, handleRemoveTagClick }) {
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

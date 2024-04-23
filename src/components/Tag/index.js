import React from 'react';
import styles from './Tag.module.css';

export function Tag({ title, setChosenTags }) {
  const handleXClick = () => {
    setChosenTags((prev) => prev.filter((tag) => tag !== title));
  };

  return (
    <div className={styles.tag}>
      <span className={styles.tagTitle}>{title}</span>
      <button className={styles.tagXButton} onClick={handleXClick} />
    </div>
  );
}

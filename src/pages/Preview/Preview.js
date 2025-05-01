import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Preview.module.css';

export default function Preview() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/main');
  };

  return (
    <div
      className={styles.container}
      onClick={handleClick}
      onTouchStart={handleClick}
    >
      <video
        className={styles.video}
        src="/path/to/your/video.mp4" // укажите путь к вашему видео
        autoPlay
        loop
        muted
        playsInline
      />

      <div className={styles.overlay}>
        <h1 className={styles.title}>Современное вооружение</h1>
        <p className={styles.subtitle}>
          Коснитесь экрана, чтобы узнать подробнее
        </p>
      </div>
    </div>
  );
}

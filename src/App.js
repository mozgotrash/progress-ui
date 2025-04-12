import React, { useState, useEffect, useRef } from 'react';
import ProgressBar from './components/ProgressBar';
import BookImage from './components/BookImage';
import axios from 'axios'


const App = () => {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const intervalRef = useRef(null); 

  useEffect(() => {
    const fetchProgress = async () => {
      try {
        
        const { data } = await axios.get("http://localhost:8080/api/progress/current");
        
        const targetProgress = data;

        if (intervalRef.current) clearInterval(intervalRef.current);

        intervalRef.current = setInterval(() => {
          setProgress((prevProgress) => {
            // Останавливаем, если достигли цели
            if (prevProgress >= targetProgress) {
              clearInterval(intervalRef.current);
              return targetProgress;
            }
            return prevProgress + 2;
          });
        }, 100);


      } catch (err) {
        setError(err.message);
      }
    };

    fetchProgress();
    

    // Очистка при размонтировании
    return () => {
      if (intervalRef.current) {
        console.log("Компонент размонтирован - интервал очищен");
        clearInterval(intervalRef.current);
      }
    };
  }, []);
  
  if (error) return <div>Ошибка: {error}</div>;

  return (
    <div>
      <div style={{ padding: '20px', maxWidth: '1800px', margin: '0 auto' }}>
        <h2>Прогресс: {progress.toFixed(3)}%</h2>
        <ProgressBar progress={progress.toFixed(3)} />
      </div>
      <div>
        <h3 style={{ textAlign: 'center', marginBottom: '20px' }}>Обложка книги</h3>
        <BookImage />
      </div>
    </div>
  );
};

export default App;

import React, { useState, useEffect, useRef } from 'react';
import ProgressBar from './components/ProgressBar';
import BooksComponent from './components/BooksComponent';
import axios from 'axios'


const App = () => {
  const [progress, setProgress] = useState(0);
  const [loading, setLoading] = useState(true);
  const [books, setBooks] = useState([]);
  const [error, setError] = useState(null);
  const [hoveredBookId, setHoveredBookId] = useState(null);
  const intervalRef = useRef(null);

  useEffect(() => {
    const fetchProgress = async () => {
      //Прогресс бар
      try {
        const { data } = await axios.get("http://localhost:8080/api/progress/current");
        const targetProgress = data.progressPercentage;
        setBooks(data.goal.books)
        if (intervalRef.current) clearInterval(intervalRef.current);
        intervalRef.current = setInterval(() => {
          setProgress((prevProgress) => {
            // Останавливаем, если достигли цели
            if (prevProgress >= targetProgress) {
              clearInterval(intervalRef.current);
              setLoading(false);
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
    <div style={{ padding: '20px', maxWidth: '1800px', margin: '0 auto' }}>
      <h2>Прогресс: {progress.toFixed(3)}%</h2>
      <ProgressBar
        loading={loading}
        progress={progress.toFixed(3)}
        books={books}
        hoveredBookId={hoveredBookId}
        onHover={setHoveredBookId}
      />

      <BooksComponent
        books={books}
        hoveredBookId={hoveredBookId}
      />

      <style>{`
        ::-webkit-scrollbar {
          display: none; /* Для Chrome, Safari и Opera */
        }
      `}</style>
    </div>
  );
};

export default App;

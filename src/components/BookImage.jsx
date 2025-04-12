import axios from 'axios';
import React, { useState, useEffect } from 'react';

function BookImage() {
  const [imageBase64, setImageBase64] = useState('');

  useEffect(() => {
    const fetchImage = async () => {
        const book = await axios.get('http://localhost:8080/api/book/1');
        setImageBase64(book.data.base64Image)
    }
    fetchImage();
  }, []);

  return (
    <div style={{ textAlign: 'center', margin: '20px' }}>
      {imageBase64 && (
        <img 
          src={`data:image/png;base64,${imageBase64}`} 
          alt="Обложка книги"
          style={{ 
            maxWidth: '100%',
            maxHeight: '350px',
            boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
            borderRadius: '4px'
          }} 
        />
      )}
    </div>
  );
}

export default BookImage;
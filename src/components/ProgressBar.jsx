import React from 'react';

const ProgressBar = ({ loading, progress, books, onHover, hoveredBookId }) => {
  return (
    <div>
      {loading ? (
        <div style={styles.loadingContainer}>
          <div style={{...styles.progressBar, width: `${progress}%`}}/>
        </div>
      ) : (
        <div style={styles.booksContainer}>
          {books.map((book) => (
            <div
              key={book.id}
              style={{
                ...styles.bookItem,
                width: `${book.percentageOfGoal}%`,
                backgroundColor: hoveredBookId === book.id ? '#f0f0f0' : '#e0e0e0',
              }}
              onMouseEnter={() => onHover(book.id)}
              onMouseLeave={() => onHover(null)}
            >
              <div style={{
                ...styles.progressFill,
                width: `${book.percentRead}%`,
                backgroundColor: hoveredBookId === book.id ? '#388E3C' : '#4CAF50',
              }}></div>
              <span style={{
                ...styles.bookTitle,
                color: hoveredBookId === book.id ? '#333' : '#333', 
                fontWeight: hoveredBookId === book.id ? '600' : '400'
              }}>
                {book.title}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

const styles = {
  loadingContainer: {
    width: '100%',
    backgroundColor: '#e0e0e0',
    margin: '10px 0',
    overflow: 'hidden'
  },
  progressBar: {
    height: '40px',
    backgroundColor: '#4CAF50',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    fontSize: '16px',
    fontWeight: '500',
    transition: 'width 0.3s ease'
  },
  booksContainer: {
    display: 'flex',
    overflowX: 'auto',
    margin: '10px 0',
    padding: '1px',
    gap: '1px'
  },
  bookItem: {
    height: '40px',
    textAlign: 'center',
    position: 'relative',
    borderRight: '1px solid white',
    ':last-child': {
      borderRight: 'none'
    },
    overflow: 'hidden'
  },
  progressFill: {
    height: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    transition: 'all 0.2s ease'
  },
  bookTitle: {
    position: 'relative',
    zIndex: 1,
    lineHeight: '40px',
    padding: '0 8px',
    fontSize: '14px',
    whiteSpace: 'nowrap',
    display: 'inline-block',
    transition: 'all 0.2s ease'
  }
};

export default ProgressBar;
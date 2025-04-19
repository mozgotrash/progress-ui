import React from 'react';

function BooksComponent({ books, hoveredBookId }) {
    return (

        <div style={{
                display: 'flex',
                overflowX: 'auto',
                gap: '20px',
                padding: '20px 0',
                scrollbarWidth: 'none' /* Для Firefox */,
                msOverflowStyle: 'none' /* Для IE и Edge */
              }}>
                {books.map((book) => (
                  <div style={{
                    flex: '0 0 auto',
                    width: '300px',
                    background: '#fff',
                    borderRadius: '8px',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                    overflow: 'hidden',
                    filter: book.status === 'IN_PROGRESS'  ? 'none' : 'brightness(0.85)',
                    ':hover': {
                        transform: 'translateY(-4px)',
                        filter: book.status === 'IN_PROGRESS' ? 'none' : 'brightness(0.9)'
                    },
                    transform: hoveredBookId === book.id ? 'scale(1.1)' : 'scale(1)'
                }}>
                    {book.base64Image && (
                        <img
                            src={`data:image/png;base64,${book.base64Image}`}
                            alt="Обложка книги"
                            style={{
                                width: '100%',
                                height: '450px',
                                objectFit: 'cover',
                                borderBottom: '1px solid #f0f0f0'
                            }}
                        />
                    )}
                    <div style={{ padding: '12px' }}>
                        <h3 style={{
                            margin: '0 0 4px 0',
                            fontSize: '16px',
                            whiteSpace: 'nowrap',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis'
                        }}>{book.title}</h3>
                        <p style={{
                            margin: '0 0 4px 0',
                            fontSize: '14px',
                            color: '#666',
                            whiteSpace: 'nowrap',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis'
                        }}>{book.author}</p>
                        <p style={{
                            margin: '0',
                            fontSize: '12px',
                            color: (() => {
                                switch (book.status) {
                                    case 'COMPLETED': return '#2ECC71';
                                    case 'IN_PROGRESS': return '#FFA500';
                                    case 'HOLD': return '#95A5A6';
                                    default: return '#CCCCCC';
                                }
                            })(),
                            fontWeight: '500'
                        }}>{book.status}</p>
                    </div>
                </div>
                ))}
              </div>
    );
}

export default BooksComponent;
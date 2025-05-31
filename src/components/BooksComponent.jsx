import React from 'react';

function BooksComponent({ books, hoveredBookId }) {
    return (
        <div style={{
            display: 'flex',
            overflowX: 'auto',
            gap: '20px',
            padding: '20px 0',
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            '&::-webkit-scrollbar': { display: 'none' }
        }}>
            {books
                .filter((book) => {
                    if (hoveredBookId) {
                        return book.id === hoveredBookId;
                    }
                    return book.status === 'IN_PROGRESS';
                })
                .map((book) => (
                    <div 
                        key={book.id}
                        style={{
                            flex: '0 0 70%',
                            display: 'flex',
                            background: '#fff',
                            borderRadius: '8px',
                            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                            overflow: 'hidden',
                            transition: 'transform 0.2s, filter 0.2s',
                            ':hover': {
                                transform: 'translateY(-4px)',
                                filter: book.status === 'IN_PROGRESS' ? 'none' : 'brightness(0.9)'
                            },
                        }}
                    >
                        <div style={{
                            flex: 1,
                            padding: '20px',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center'
                        }}>
                            <h3 style={{
                                margin: '0 0 12px 0',
                                fontSize: '24px',
                                fontWeight: '600'
                            }}>{book.title}</h3>
                            <p style={{
                                margin: '0 0 12px 0',
                                fontSize: '18px',
                                color: '#666'
                            }}>{book.author}</p>
                            <p style={{
                                margin: '0',
                                fontSize: '16px',
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

                        {book.base64Image && (
                            <div style={{
                                flex: '0 0 40%',
                                maxWidth: '500px'
                            }}>
                                <img
                                    src={`data:image/png;base64,${book.base64Image}`}
                                    alt="Обложка книги"
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover',
                                        display: 'block'
                                    }}
                                />
                            </div>
                        )}
                    </div>
                ))}
        </div>
    );
}

export default BooksComponent;
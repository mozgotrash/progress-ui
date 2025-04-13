import React from 'react';

function BookImage({ title, author, bookStatus, imageBase64 }) {
    const isInProgress = bookStatus === 'IN_PROGRESS';
    return (
        <div style={{
            flex: '0 0 auto',
            width: '300px',
            background: '#fff',
            borderRadius: '8px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
            overflow: 'hidden',
            filter: isInProgress ? 'none' : 'brightness(0.85)',
            ':hover': {
                transform: 'translateY(-4px)',
                filter: isInProgress ? 'none' : 'brightness(0.9)'
            }
        }}>
            {imageBase64 && (
                <img
                    src={`data:image/png;base64,${imageBase64}`}
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
                }}>{title}</h3>
                <p style={{
                    margin: '0 0 4px 0',
                    fontSize: '14px',
                    color: '#666',
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis'
                }}>{author}</p>
                <p style={{
                    margin: '0',
                    fontSize: '12px',
                    color: (() => {
                        switch (bookStatus) {
                            case 'COMPLETED': return '#2ECC71';
                            case 'IN_PROGRESS': return '#FFA500';
                            case 'HOLD': return '#95A5A6';
                            default: return '#CCCCCC';
                        }
                    })(),
                    fontWeight: '500'
                }}>{bookStatus}</p>
            </div>
        </div>
    );
}

export default BookImage;
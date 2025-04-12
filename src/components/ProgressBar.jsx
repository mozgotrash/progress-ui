import React from 'react';

const ProgressBar = ({progress}) => {
    return (
        <div style={{ 
          width: '100%', 
          backgroundColor: '#e0e0e0', 
          borderRadius: '2px', 
          margin: '10px 0' 
        }}>
          <div
            style={{
              width: `${progress}%`,
              height: '40px',
              backgroundColor: '#4CAF50' ,
              borderRadius: '2px',
              transition: 'width 0.3s ease',
              textAlign: 'center',
              color: 'white',
              lineHeight: '40px',
              fontSize: '20px',
            }}
          >
            {progress}%
          </div>
        </div>
      );
}

export default ProgressBar;

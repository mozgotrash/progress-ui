import React from 'react';

const ProgressBar = ({progress}) => {
    return (
        <div style={{ 
          width: '100%', 
          backgroundColor: '#e0e0e0', 
          borderRadius: '5px', 
          margin: '10px 0' 
        }}>
          <div
            style={{
              width: `${progress}%`,
              height: '20px',
              backgroundColor: '#4CAF50' , // Зеленый до 70%, красный после
              borderRadius: '5px',
              transition: 'width 0.3s ease',
              textAlign: 'center',
              color: 'white',
              lineHeight: '20px',
              fontSize: '12px',
            }}
          >
            {progress}%
          </div>
        </div>
      );
}

export default ProgressBar;

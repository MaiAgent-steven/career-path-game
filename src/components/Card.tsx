import React from 'react';

interface CardProps {
  text: string;
  onClick: () => void;
}

const Card: React.FC<CardProps> = ({ text, onClick }) => {
  return (
    <div 
      className="card" 
      onClick={onClick}
      style={{
        backgroundColor: '#ffffff',
        border: '1px solid #ddd',
        borderRadius: '12px',
        padding: '22px 25px',
        margin: '12px 0',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.08)',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        position: 'relative',
        overflow: 'hidden'
      }}
      onMouseOver={(e) => {
        const target = e.currentTarget;
        target.style.transform = 'translateY(-5px)';
        target.style.boxShadow = '0 8px 16px rgba(66, 133, 244, 0.15)';
        target.style.borderColor = '#4285f4';
      }}
      onMouseOut={(e) => {
        const target = e.currentTarget;
        target.style.transform = 'translateY(0)';
        target.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.08)';
        target.style.borderColor = '#ddd';
      }}
    >
      {/* 左側裝飾 */}
      <div style={{
        position: 'absolute',
        left: 0,
        top: 0,
        bottom: 0,
        width: '5px',
        backgroundColor: '#4285f4',
        borderRadius: '4px 0 0 4px'
      }} />
      
      <p style={{ 
        fontSize: '16px', 
        lineHeight: '1.5',
        margin: 0,
        paddingLeft: '10px',
        color: '#333'
      }}>{text}</p>
      
      {/* 右側箭頭 */}
      <div style={{
        position: 'absolute',
        right: '15px',
        top: '50%',
        transform: 'translateY(-50%)',
        color: '#4285f4',
        fontSize: '18px',
        opacity: 0.7
      }}>
        ›
      </div>
    </div>
  );
};

export default Card; 
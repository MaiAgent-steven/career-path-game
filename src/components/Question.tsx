import React from 'react';
import Card from './Card';
import { Question as QuestionType, Option } from '../data/questions';

interface QuestionProps {
  question: QuestionType;
  onSelectOption: (option: Option) => void;
}

const Question: React.FC<QuestionProps> = ({ question, onSelectOption }) => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      maxWidth: '800px',
      margin: '0 auto',
      padding: '30px',
      backgroundColor: 'white',
      borderRadius: '16px',
      boxShadow: '0 5px 15px rgba(0, 0, 0, 0.05)'
    }}>
      <div style={{
        position: 'relative',
        marginBottom: '35px',
        width: '100%',
        textAlign: 'center'
      }}>
        {/* 上方小圖示 */}
        <div style={{
          margin: '0 auto 15px auto',
          width: '50px',
          height: '50px',
          borderRadius: '50%',
          backgroundColor: 'rgba(66, 133, 244, 0.1)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          color: '#4285f4',
          fontSize: '24px'
        }}>
          ?
        </div>
        
        <h2 style={{
          fontSize: '26px',
          fontWeight: '600',
          marginBottom: '15px',
          color: '#2c3e50',
          position: 'relative',
          display: 'inline-block'
        }}>
          {question.text}
          <span style={{
            position: 'absolute',
            bottom: '-8px',
            left: '50%',
            transform: 'translateX(-50%)',
            height: '3px',
            width: '60%',
            backgroundColor: '#4285f4',
            borderRadius: '2px'
          }}></span>
        </h2>
        
        <p style={{
          fontSize: '16px',
          color: '#666',
          marginTop: '10px',
          maxWidth: '600px',
          margin: '0 auto'
        }}>
          選擇最符合你想法的選項
        </p>
      </div>
      
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        maxWidth: '600px'
      }}>
        {question.options.map((option) => (
          <Card
            key={option.id}
            text={option.text}
            onClick={() => onSelectOption(option)}
          />
        ))}
      </div>
    </div>
  );
};

export default Question; 
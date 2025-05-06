import React, { useState } from 'react';
import { questions, Question as QuestionType, Option } from '../data/questions';
import Question from './Question';
import Result from './Result';

const CareerGame: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState<QuestionType>(questions[0]);
  const [result, setResult] = useState<string | null>(null);
  const [progressStep, setProgressStep] = useState<number>(1);
  const totalSteps = 5; // 總共5個問題階段
  
  const handleSelectOption = (option: Option) => {
    if (option.result) {
      // 如果選項有結果，表示遊戲結束
      setResult(option.result);
    } else if (option.nextQuestion) {
      // 否則跳轉到下一個問題
      const nextQuestion = questions.find(q => q.id === option.nextQuestion);
      if (nextQuestion) {
        setCurrentQuestion(nextQuestion);
        // 更新進度
        const step = getStepFromQuestionId(option.nextQuestion);
        if (step > 0) {
          setProgressStep(step);
        }
      }
    }
  };
  
  // 從問題ID獲取當前步驟
  const getStepFromQuestionId = (questionId: string): number => {
    if (questionId.startsWith('q1')) return 1;
    if (questionId.startsWith('q2')) return 2;
    if (questionId.startsWith('q3')) return 3;
    if (questionId.startsWith('q4')) return 4;
    if (questionId.startsWith('q5')) return 5;
    if (questionId.startsWith('result')) return 5;
    return 1;
  };
  
  const handleRestart = () => {
    setCurrentQuestion(questions[0]);
    setResult(null);
    setProgressStep(1);
  };
  
  // 進度條元件
  const ProgressBar = () => {
    return (
      <div style={{
        width: '100%',
        maxWidth: '600px',
        margin: '0 auto 30px auto',
        display: 'flex',
        justifyContent: 'space-between',
        position: 'relative',
      }}>
        {/* 背景線 */}
        <div style={{
          position: 'absolute',
          height: '4px',
          width: '100%',
          backgroundColor: '#e0e0e0',
          top: '50%',
          transform: 'translateY(-50%)',
          zIndex: 1
        }} />
        
        {/* 已完成的進度線 */}
        <div style={{
          position: 'absolute',
          height: '4px',
          width: `${(progressStep - 1) / (totalSteps - 1) * 100}%`,
          backgroundColor: '#4285f4',
          top: '50%',
          transform: 'translateY(-50%)',
          zIndex: 2,
          transition: 'width 0.3s ease-in-out'
        }} />
        
        {/* 步驟圓點 */}
        {Array.from({ length: totalSteps }).map((_, index) => {
          const stepNumber = index + 1;
          const isActive = stepNumber <= progressStep;
          
          return (
            <div key={index} style={{
              width: '30px',
              height: '30px',
              borderRadius: '50%',
              backgroundColor: isActive ? '#4285f4' : '#e0e0e0',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              color: 'white',
              fontWeight: 'bold',
              zIndex: 3,
              position: 'relative'
            }}>
              {stepNumber}
              {/* 步驟標籤 */}
              <div style={{
                position: 'absolute',
                top: '35px',
                fontSize: '12px',
                color: '#666',
                width: '60px',
                textAlign: 'center',
                transform: 'translateX(-15px)'
              }}>
                {stepNumber === 1 && '理想日子'}
                {stepNumber === 2 && '工作細節'}
                {stepNumber === 3 && '核心價值'}
                {stepNumber === 4 && '技能盤點'}
                {stepNumber === 5 && '面試表現'}
              </div>
            </div>
          );
        })}
      </div>
    );
  };
  
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#f0f2f5',
      padding: '20px'
    }}>
      <header style={{
        marginBottom: '20px',
        textAlign: 'center'
      }}>
        <h1 style={{
          fontSize: '32px',
          color: '#2c3e50',
          marginBottom: '10px'
        }}>
          職業方向探索遊戲
        </h1>
        <p style={{
          fontSize: '16px',
          color: '#7f8c8d'
        }}>
          透過回答問題探索適合你的職業方向與面試準備策略
        </p>
      </header>
      
      {!result && <ProgressBar />}
      
      <main style={{
        width: '100%',
        maxWidth: '800px'
      }}>
        {result ? (
          <Result result={result} onRestart={handleRestart} />
        ) : (
          <Question 
            question={currentQuestion} 
            onSelectOption={handleSelectOption} 
          />
        )}
      </main>
    </div>
  );
};

export default CareerGame; 
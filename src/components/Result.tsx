import React from 'react';

interface ResultProps {
  result: string;
  onRestart: () => void;
}

const Result: React.FC<ResultProps> = ({ result, onRestart }) => {
  // 將結果格式化為段落和列表
  const formatResult = (text: string) => {
    const sections = text.split('\n\n');
    
    return sections.map((section, idx) => {
      if (section.startsWith('【') && section.includes('】')) {
        // 處理標題段落
        const [title, ...content] = section.split('\n');
        return (
          <div key={idx} style={{ marginBottom: '20px' }}>
            <h3 style={{ 
              fontSize: '20px', 
              color: '#2c3e50',
              marginBottom: '10px',
              borderBottom: '2px solid #4285f4',
              paddingBottom: '5px'
            }}>
              {title}
            </h3>
            <ul style={{ 
              listStyleType: 'none', 
              padding: '0',
              margin: '0' 
            }}>
              {content.map((item, contentIdx) => (
                <li key={contentIdx} style={{ 
                  margin: '8px 0',
                  padding: '5px 0 5px 20px',
                  position: 'relative'
                }}>
                  <span style={{
                    position: 'absolute',
                    left: '0',
                    content: '""',
                    color: '#4285f4',
                    fontWeight: 'bold'
                  }}>•</span>
                  {item.replace(/^- /, '')}
                </li>
              ))}
            </ul>
          </div>
        );
      } else if (section.includes('：')) {
        // 處理有數字的列表
        const [title, ...content] = section.split('\n');
        return (
          <div key={idx} style={{ marginBottom: '20px' }}>
            <h3 style={{ 
              fontSize: '18px', 
              color: '#2c3e50',
              marginBottom: '10px'
            }}>
              {title}
            </h3>
            <ol style={{ 
              paddingLeft: '20px',
              margin: '0' 
            }}>
              {content.map((item, contentIdx) => (
                <li key={contentIdx} style={{ margin: '8px 0' }}>
                  {item.replace(/^\d+\.\s/, '')}
                </li>
              ))}
            </ol>
          </div>
        );
      } else {
        // 其他一般文字
        return (
          <p key={idx} style={{ 
            margin: '10px 0',
            lineHeight: '1.6' 
          }}>
            {section}
          </p>
        );
      }
    });
  };

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      maxWidth: '800px',
      margin: '0 auto',
      padding: '40px 20px',
      backgroundColor: '#f8f9fa',
      borderRadius: '12px',
      boxShadow: '0 6px 12px rgba(0, 0, 0, 0.1)'
    }}>
      <h2 style={{ 
        fontSize: '28px', 
        marginBottom: '30px',
        color: '#2c3e50',
        textAlign: 'center'
      }}>
        職業方向建議
      </h2>
      <div style={{
        fontSize: '16px',
        lineHeight: '1.6',
        width: '100%',
        textAlign: 'left',
        marginBottom: '30px',
        padding: '25px',
        backgroundColor: '#ffffff',
        borderRadius: '8px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)'
      }}>
        {formatResult(result)}
      </div>
      <div style={{
        display: 'flex',
        gap: '15px',
        marginTop: '10px'
      }}>
        <button 
          onClick={onRestart}
          style={{
            padding: '12px 24px',
            fontSize: '16px',
            backgroundColor: '#4285f4',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            transition: 'background-color 0.2s'
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.backgroundColor = '#3367d6';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.backgroundColor = '#4285f4';
          }}
        >
          重新開始
        </button>
      </div>
    </div>
  );
};

export default Result; 
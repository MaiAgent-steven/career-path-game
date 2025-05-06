// 問題類型定義
export interface Option {
  id: string;
  text: string;
  nextQuestion?: string; // 指向下一個問題的ID，如果沒有則為最終結果
  result?: string; // 如果是最終結果，則顯示結果文字
}

export interface Question {
  id: string;
  text: string;
  options: Option[];
}

// 問題數據
export const questions: Question[] = [
  {
    id: "q1",
    text: "你希望你出社會後，試過什麼樣的日子？",
    options: [
      { 
        id: "q1_o1", 
        text: "穩定的朝九晚五", 
        nextQuestion: "q2_stable" 
      },
      { 
        id: "q1_o2", 
        text: "靈活自由的工作方式", 
        nextQuestion: "q2_flexible" 
      },
      { 
        id: "q1_o3", 
        text: "有挑戰性的專業發展", 
        nextQuestion: "q2_challenging" 
      },
      { 
        id: "q1_o4", 
        text: "能夠幫助他人的工作", 
        nextQuestion: "q2_helping" 
      }
    ]
  },
  {
    id: "q2_stable",
    text: "在穩定的工作中，你更在意哪個方面？",
    options: [
      { 
        id: "q2_stable_o1", 
        text: "良好的福利和退休計劃", 
        nextQuestion: "q3_values"
      },
      { 
        id: "q2_stable_o2", 
        text: "明確的晉升階梯", 
        nextQuestion: "q3_values"
      },
      { 
        id: "q2_stable_o3", 
        text: "工作與生活的平衡", 
        nextQuestion: "q3_values"
      }
    ]
  },
  {
    id: "q2_flexible",
    text: "你偏好哪種靈活的工作模式？",
    options: [
      { 
        id: "q2_flexible_o1", 
        text: "在不同地點遠端工作", 
        nextQuestion: "q3_values"
      },
      { 
        id: "q2_flexible_o2", 
        text: "自己當老闆制定規則", 
        nextQuestion: "q3_values"
      },
      { 
        id: "q2_flexible_o3", 
        text: "有彈性的工作時間", 
        nextQuestion: "q3_values"
      }
    ]
  },
  {
    id: "q2_challenging",
    text: "你期待什麼類型的專業挑戰？",
    options: [
      { 
        id: "q2_challenging_o1", 
        text: "解決複雜的技術問題", 
        nextQuestion: "q3_values"
      },
      { 
        id: "q2_challenging_o2", 
        text: "創造創新的解決方案", 
        nextQuestion: "q3_values"
      },
      { 
        id: "q2_challenging_o3", 
        text: "管理團隊和大型專案", 
        nextQuestion: "q3_values"
      }
    ]
  },
  {
    id: "q2_helping",
    text: "你想通過哪種方式幫助他人？",
    options: [
      { 
        id: "q2_helping_o1", 
        text: "提供醫療護理和支持", 
        nextQuestion: "q3_values"
      },
      { 
        id: "q2_helping_o2", 
        text: "教育和啟發他人", 
        nextQuestion: "q3_values"
      },
      { 
        id: "q2_helping_o3", 
        text: "解決社會問題", 
        nextQuestion: "q3_values"
      }
    ]
  },
  {
    id: "q3_values",
    text: "在職業生涯中，你最重視的核心價值是什麼？",
    options: [
      { 
        id: "q3_values_o1", 
        text: "持續學習與成長", 
        nextQuestion: "q4_skills"
      },
      { 
        id: "q3_values_o2", 
        text: "技術深度和專業影響力", 
        nextQuestion: "q4_skills"
      },
      { 
        id: "q3_values_o3", 
        text: "工作與生活的平衡", 
        nextQuestion: "q4_skills"
      },
      { 
        id: "q3_values_o4", 
        text: "良好的薪資回報", 
        nextQuestion: "q4_skills"
      },
      { 
        id: "q3_values_o5", 
        text: "團隊合作與人際連結", 
        nextQuestion: "q4_skills"
      }
    ]
  },
  {
    id: "q4_skills",
    text: "你目前最有信心的技能或經驗是什麼？",
    options: [
      { 
        id: "q4_skills_o1", 
        text: "技術實作和開發能力", 
        nextQuestion: "q5_interview"
      },
      { 
        id: "q4_skills_o2", 
        text: "團隊合作與溝通", 
        nextQuestion: "q5_interview"
      },
      { 
        id: "q4_skills_o3", 
        text: "解決問題和分析能力", 
        nextQuestion: "q5_interview"
      },
      { 
        id: "q4_skills_o4", 
        text: "創新思考與設計", 
        nextQuestion: "q5_interview"
      },
      { 
        id: "q4_skills_o5", 
        text: "領導與專案管理", 
        nextQuestion: "q5_interview"
      }
    ]
  },
  {
    id: "q5_interview",
    text: "面試中，你最希望展現自己哪一面？",
    options: [
      { 
        id: "q5_interview_o1", 
        text: "專業知識與技術深度", 
        nextQuestion: "result_tech"
      },
      { 
        id: "q5_interview_o2", 
        text: "解決問題的能力與彈性", 
        nextQuestion: "result_problem_solver"
      },
      { 
        id: "q5_interview_o3", 
        text: "學習能力與成長潛力", 
        nextQuestion: "result_learner"
      },
      { 
        id: "q5_interview_o4", 
        text: "溝通能力與團隊合作", 
        nextQuestion: "result_team_player"
      },
      { 
        id: "q5_interview_o5", 
        text: "領導力與影響力", 
        nextQuestion: "result_leader"
      }
    ]
  },
  {
    id: "result_tech",
    text: "技術專家導向",
    options: [
      { 
        id: "result_tech_o1", 
        text: "查看詳細結果", 
        result: `【你的職涯方向】
- 適合職位：資深軟體工程師、技術架構師、專業領域技術專家
- 建議產業：高科技公司、研發密集企業、專業顧問公司

【如何在面試中展現優勢】
1. 準備技術深度展示：準備能展示你專業深度的項目或解決方案
2. STAR故事庫：準備2-3個展示你解決複雜技術問題的故事
3. 強調持續學習：分享你如何跟上技術發展，以及自學新技術的經驗

【履歷重點】
- 突出你的專業技術棧和擅長領域
- 量化你的技術成就和影響力
- 列出你的技術貢獻（開源、技術分享等）` 
      }
    ]
  },
  {
    id: "result_problem_solver",
    text: "問題解決者導向",
    options: [
      { 
        id: "result_problem_solver_o1", 
        text: "查看詳細結果", 
        result: `【你的職涯方向】
- 適合職位：全端工程師、QA工程師、DevOps工程師、技術顧問
- 建議產業：新創公司、顧問公司、服務導向企業

【如何在面試中展現優勢】
1. 以解決問題為核心：準備能展示你如何面對挑戰並解決的案例
2. STAR故事庫：準備2-3個你如何優化流程或解決系統問題的故事
3. 展示彈性思維：分享你如何在資源有限的情況下尋找創新解決方案

【履歷重點】
- 強調你解決的具體問題和帶來的效益
- 展示多技能組合和跨領域知識
- 突出你如何處理緊急情況或提升系統效率的經驗` 
      }
    ]
  },
  {
    id: "result_learner",
    text: "持續學習者導向",
    options: [
      { 
        id: "result_learner_o1", 
        text: "查看詳細結果", 
        result: `【你的職涯方向】
- 適合職位：初中級開發者、新興技術探索者、研究助理
- 建議產業：快速發展領域、培訓計畫完善的大公司、研究導向組織

【如何在面試中展現優勢】
1. 展示學習曲線：準備能證明你快速掌握新技術的例子
2. STAR故事庫：準備2-3個你如何透過自學克服挑戰的故事
3. 成長思維展示：分享你如何看待失敗和從中學習的經驗

【履歷重點】
- 列出你的學習歷程和獲得的各種技能
- 展示你的自學項目和實驗成果
- 強調你參與的各種學習社群和活動` 
      }
    ]
  },
  {
    id: "result_team_player",
    text: "團隊合作者導向",
    options: [
      { 
        id: "result_team_player_o1", 
        text: "查看詳細結果", 
        result: `【你的職涯方向】
- 適合職位：敏捷開發團隊成員、跨部門協作角色、使用者體驗相關職位
- 建議產業：大型科技公司、需要跨團隊合作的企業、國際團隊

【如何在面試中展現優勢】
1. 溝通技巧展示：準備能展示你有效溝通和協作的例子
2. STAR故事庫：準備2-3個你如何促進團隊合作或解決衝突的故事
3. 跨部門合作：分享你如何與非技術團隊有效協作的經驗

【履歷重點】
- 強調你參與的團隊項目和你的具體貢獻
- 展示你的溝通技巧和協作工具使用經驗
- 突出你如何幫助團隊解決溝通問題或提升效率` 
      }
    ]
  },
  {
    id: "result_leader",
    text: "領導者導向",
    options: [
      { 
        id: "result_leader_o1", 
        text: "查看詳細結果", 
        result: `【你的職涯方向】
- 適合職位：技術團隊領導、產品經理、技術主管、項目經理
- 建議產業：大型科技公司、成長期創業公司、跨國企業

【如何在面試中展現優勢】
1. 領導力展示：準備能展示你如何領導團隊達成目標的案例
2. STAR故事庫：準備2-3個你如何制定策略、分配資源或激勵團隊的故事
3. 願景與執行：分享你如何將願景轉化為可執行計劃的經驗

【履歷重點】
- 量化你領導的項目成果和團隊規模
- 強調你的決策能力和戰略思維
- 展示你如何培養團隊成員和處理管理挑戰` 
      }
    ]
  }
]; 
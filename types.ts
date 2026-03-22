export interface Token {
  id: string;
  symbol: string;
  name: string;
  price: number;
  change24h: number;
  marketCap: number;
  volume24h: number;
}

export interface TradeSuggestion {
  token: string;
  type: 'BUY' | 'SELL';
  confidence: number;
  reasoning: string;
  entryPrice: number;
  targetPrice: number;
  stopLoss: number;
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  reward: number;
}

declare global {
  interface Window {
    ethereum?: any;
  }
}

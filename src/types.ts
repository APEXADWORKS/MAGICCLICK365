export interface RummyApp {
  id: string;
  name: string;
  logo: string;
  bonus: string;
  minWithdraw: string;
  rating: number;
  apkSize: string;
  downloadCount: string;
  isPopular: boolean;
  status: 'Active' | 'Updated' | 'Verified';
  referCommission: string;
  downloadUrl: string;
}

export interface RummyGame {
  id: string;
  name: string;
  category: 'Popular' | 'Card' | 'Slot' | 'Multiplayer';
  activePlayers: string;
  minEntry: string;
  image: string;
  popularity: number; // 1-5 stars or %
  badge?: string;
  description: string;
}

export interface LiveWithdrawal {
  id: string;
  username: string; // e.g. "Rahul***"
  amount: number;
  method: 'UPI' | 'Bank Transfer' | 'Paytm';
  timeAgo: string;
  status: 'Success';
}

export interface FAQItem {
  question: string;
  answer: string;
}

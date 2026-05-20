export interface Article {
  id: string;
  title: string;
  brief: string;
  content: string; // Will support rich markdown-like / HTML-like paragraphs
  date: string;
  author: string;
  category: 'Cricket' | 'Football' | 'Tennis' | 'Basketball' | 'Formula 1' | 'Athletics';
  image: string;
  readTime: string;
  links?: { text: string; url: string }[];
  featured?: boolean;
  tags: string[];
}

export interface MatchScore {
  id: string;
  sport: 'Cricket' | 'Football' | 'Tennis' | 'Basketball';
  league: string;
  teamA: string;
  teamB: string;
  scoreA: string;
  scoreB: string;
  status: 'LIVE' | 'UPCOMING' | 'FINISHED';
  statusText: string;
  venue: string;
  oversOrPeriod?: string; // e.g. "Overs: 45.2" or "84'"
  summary?: string;
}

export interface CricketSite {
  name: string;
  url: string;
  description: string;
  features: string[];
  recommendedFor: string;
  badge: string;
}

import { RummyApp, RummyGame, FAQItem, LiveWithdrawal } from '../types';

export const JUNGLE_HAAN_APP: RummyApp = {
  id: 'jungle-haan-vip',
  name: 'Jungle Haan Rummy (Official)',
  logo: 'https://images.unsplash.com/photo-1511193311914-0346f16efe90?auto=format&fit=crop&q=80&w=200',
  bonus: '₹100 Free',
  minWithdraw: '₹100',
  rating: 4.9,
  apkSize: '42.5 MB',
  downloadCount: '2.5M+',
  isPopular: true,
  status: 'Verified',
  referCommission: '30% Lifetime Share + ₹100 Friend Bonus',
  downloadUrl: 'https://www.rummybonusapps.com/apk/jungle_haan.apk',
};

export const RUMMY_APPS_LIST: RummyApp[] = [
  JUNGLE_HAAN_APP,
  {
    id: 'yono-rummy',
    name: 'Yono Rummy All Games',
    logo: 'https://images.unsplash.com/photo-1606167668584-78701c57f13d?auto=format&fit=crop&q=80&w=200',
    bonus: '₹51 Free',
    minWithdraw: '₹100',
    rating: 4.8,
    apkSize: '38.2 MB',
    downloadCount: '1.2M+',
    isPopular: true,
    status: 'Updated',
    referCommission: '60% Agent Referral Share',
    downloadUrl: '#',
  },
  {
    id: 'rummy-modern',
    name: 'Rummy Modern',
    logo: 'https://images.unsplash.com/photo-1518895949257-7621c3c786d7?auto=format&fit=crop&q=80&w=200',
    bonus: '₹41 Free',
    minWithdraw: '₹100',
    rating: 4.7,
    apkSize: '45.1 MB',
    downloadCount: '5M+',
    isPopular: false,
    status: 'Active',
    referCommission: '₹150 Per Friend + 30% Commission',
    downloadUrl: '#',
  },
  {
    id: 'teen-patti-gold',
    name: 'Teen Patti Gold Official',
    logo: 'https://images.unsplash.com/photo-1541560052-5e137f229371?auto=format&fit=crop&q=80&w=200',
    bonus: '₹150 Free Pack',
    minWithdraw: '₹200',
    rating: 4.9,
    apkSize: '51.3 MB',
    downloadCount: '10M+',
    isPopular: true,
    status: 'Verified',
    referCommission: '₹200 Instant Bonus',
    downloadUrl: '#',
  },
  {
    id: 'rummy-east',
    name: 'Rummy East',
    logo: 'https://images.unsplash.com/photo-1596838132731-3301c3fd4317?auto=format&fit=crop&q=80&w=200',
    bonus: '₹51 Bonus',
    minWithdraw: '₹100',
    rating: 4.6,
    apkSize: '35.6 MB',
    downloadCount: '800K+',
    isPopular: false,
    status: 'Active',
    referCommission: '10% Commission on Friend Deposit',
    downloadUrl: '#',
  },
  {
    id: 'rummy-nabob',
    name: 'Rummy Nabob VIP',
    logo: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&q=80&w=200',
    bonus: '₹41 Playstore Promo',
    minWithdraw: '₹100',
    rating: 4.8,
    apkSize: '44.8 MB',
    downloadCount: '2.8M+',
    isPopular: true,
    status: 'Updated',
    referCommission: '30% Commission',
    downloadUrl: '#',
  },
  {
    id: 'royally-rummy',
    name: 'Royally Rummy Plus',
    logo: 'https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&q=80&w=200',
    bonus: '₹51 Signup Offer',
    minWithdraw: '₹100',
    rating: 4.7,
    apkSize: '49.0 MB',
    downloadCount: '1.5M+',
    isPopular: false,
    status: 'Active',
    referCommission: 'Uncapped Up to 30%',
    downloadUrl: '#',
  },
  {
    id: 'rummy-wealth',
    name: 'Rummy Wealth 555',
    logo: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&q=80&w=200',
    bonus: '₹100 High-Roller',
    minWithdraw: '₹500',
    rating: 4.8,
    apkSize: '48.2 MB',
    downloadCount: '3.1M+',
    isPopular: true,
    status: 'Verified',
    referCommission: '₹100 Deposit Bonus + 1.5% Play Rebate',
    downloadUrl: '#',
  }
];

export const FEATURED_GAMES: RummyGame[] = [
  {
    id: 'dragon-vs-tiger',
    name: 'Dragon vs Tiger',
    category: 'Multiplayer',
    activePlayers: '14,821 Live',
    minEntry: '₹10',
    image: 'https://images.unsplash.com/photo-1553481187-be93c21490a9?auto=format&fit=crop&q=80&w=400',
    popularity: 5,
    badge: 'HOT',
    description: 'Fast-paced multiplayer game of luck. Place chips on Dragon, Tiger, or Tie. Rounds end in 15 seconds!'
  },
  {
    id: 'point-rummy',
    name: 'Classic Point Rummy',
    category: 'Card',
    activePlayers: '28,109 Live',
    minEntry: '₹2',
    image: 'https://images.unsplash.com/photo-1601987177651-8edfe6c20009?auto=format&fit=crop&q=80&w=400',
    popularity: 5,
    badge: 'CLASSIC',
    description: 'Fast Indian Rummy for 2 to 6 players. Form 2 sequences (at least 1 pure) and sets to declare first!'
  },
  {
    id: 'mines',
    name: 'Gold Mines Pro',
    category: 'Slot',
    activePlayers: '9,451 Live',
    minEntry: '₹10',
    image: 'https://images.unsplash.com/photo-1614028674026-a65e31bfd27c?auto=format&fit=crop&q=80&w=400',
    popularity: 4.5,
    badge: 'TRENDING',
    description: 'Avoid hidden landmines inside the grid. Reveal golden stars to scale up your cash multipliers.'
  },
  {
    id: 'aviator',
    name: 'Aviator Crash',
    category: 'Multiplayer',
    activePlayers: '45,392 Live',
    minEntry: '₹10',
    image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80&w=400',
    popularity: 5,
    badge: 'JACKPOT',
    description: 'Watch the plane fly higher. Cash out before the plane flies away to secure up to 1000x multiplier!'
  },
  {
    id: 'seven-up-down',
    name: '7 Up Down',
    category: 'Multiplayer',
    activePlayers: '7,112 Live',
    minEntry: '₹10',
    image: 'https://images.unsplash.com/photo-1596838132731-3301c3fd4317?auto=format&fit=crop&q=80&w=400',
    popularity: 4,
    badge: 'POPULAR',
    description: 'Roll the dice and guess if the sum will be Below 7, Equal to 7, or Above 7. Safe 2x returns!'
  },
  {
    id: 'car-roulette',
    name: 'Car Roulette',
    category: 'Slot',
    activePlayers: '11,489 Live',
    minEntry: '₹50',
    image: 'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&q=80&w=400',
    popularity: 4.5,
    description: 'Place predictions on prestigious car brands. Luxury brands yield high returns up to 40x payout!'
  }
];

export const RUMMY_FAQS: FAQItem[] = [
  {
    question: 'What is Jungle Haan Rummy & how can I get the signup bonus?',
    answer: 'Jungle Haan Rummy is a high-speed real-money gaming app in India. When you click Download APK, install the application, and register your mobile number, you will instantly receive a complimentary ₹100 Sign-Up Bonus directly in your game wallet. No deposit is required to start your testing matches.'
  },
  {
    question: 'How do I withdraw cash earnings safely?',
    answer: 'Withdrawing your winning balance is extremely easy and fast. Enter the wallet withdrawal screen inside the app, link your verified Bank Account details or enter your active UPI ID, type the preferred amount (Minimum withdrawal is ₹100), and tap Withdraw. Fund receipts occur within 5 to 15 minutes.'
  },
  {
    question: 'Is it legal to play online Rummy games in India?',
    answer: 'Yes. The Supreme Court of India officially recognizes Rummy as a "Game of Skill" and NOT gambling. Therefore, playing online Rummy apps with real money resources is entirely legal, secure, and compliant throughout most Indian states, except a few restricted regions like Telangana, Assam, Odisha, and Sikkim.'
  },
  {
    question: 'What is the referral program (Refer & Earn) rate?',
    answer: 'Jungle Haan Rummy has an industry-leading affiliate dashboard. You receive ₹100 instantly for every friend who successfully registers and completes their initial deposit. Additionally, you earn an uncapped 30% to 60% of their future tax commission fee pools, distributed straight to your agent account for live cash out.'
  },
  {
    question: 'Are my financial transactions secure on this landing app list?',
    answer: 'Absolutely. All Rummy Apps featured in our All Rummy Apps directory utilize 128-bit SSL transaction encryption, custom high-security firewalls, and ISO compliance. Instant payment gateways (UPI, Paytm, and leading Indian banks) process and audit all deposit and withdrawal requests safely.'
  }
];

export const SIMULATED_NAMES = [
  'Amit', 'Rahul', 'Suresh', 'Priya', 'Keerthi', 'Vikram', 'Rajesh', 'Vivek', 'Siddharth', 'Nisha', 
  'Sunil', 'Manish', 'Rohan', 'Arjun', 'Anjali', 'Deepak', 'Vijay', 'Sandep', 'Shyam', 'Sameer'
];

export const SIMULATED_AMOUNTS = [
  150, 200, 350, 500, 800, 1000, 1500, 2500, 4000, 5000, 7500, 10000, 15000, 20000
];

export interface BlogPost {
  id: string;
  title: string;
  brief: string;
  content: string; // Supports paragraphs and lists
  date: string;
  author: string;
  category: 'Dogs' | 'Cats' | 'Birds' | 'Rabbits' | 'Exotics' | 'General';
  image: string;
  readTime: string;
  links?: { text: string; url: string }[];
  featured?: boolean;
  tags: string[];
}

export interface PetCareTask {
  id: string;
  task: string;
  frequency: 'Daily' | 'Weekly' | 'Monthly';
  petType: 'Dog' | 'Cat' | 'Bird' | 'Rabbit' | 'Exotic';
  category: 'Nutrition' | 'Grooming' | 'Exercise' | 'Health';
  description: string;
}

export interface VetResource {
  name: string;
  url: string;
  description: string;
  features: string[];
  recommendedFor: string;
  badge: string;
}


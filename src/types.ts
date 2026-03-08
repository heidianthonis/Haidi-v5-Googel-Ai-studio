export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  readTime: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  features: string[];
  image?: string;
}

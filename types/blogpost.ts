export interface BlogPost {
  id: string; 
  category: string; 
  date: string; 
  title: string; 
  excerpt?: string; 
  image: string; 
  readTime?: string; 
  showBanner?: boolean; 
  showContent?: boolean; 
  pageName?: string; 
  status?: string; 
}
export interface BlogPost {
  id: string;
  category: string;
  date: string;
  title: string;
  excerpt: string;
  image: string;
  readTime?: string;
}


export interface AllContentProps {
  posts: BlogPost[];
  isAnimating?: boolean;
}


export interface BlogCardProps {
  post: BlogPost;
}

export interface PressCoverageArticle {
  id: string;
  title: string;
  description: string;
  source: string;
  date: string;
  month: string;
  year: string;
  category: string;
  image: string;
  downloadUrl: string;
}



export interface LogoItem {
  id: string;
  title: string;
  image: string;
  downloadUrl: string;
}

export interface ProfileItem {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  downloadUrl: string;
}

export interface PhotographItem {
  id: string;
  name: string;
  position: string;
  image: string;
  downloadUrl: string;
}

export interface MediaContact {
  name: string;
  company: string;
  address: string[];
  phone: string;
  email: string;
}

export interface PressRelease {
  id: string;
  category: string;
  date: string;
  title: string;
  excerpt: string;
  image: string;
  featured?: boolean;
}

export interface PressReleasesProps {
  pressReleases: PressRelease[];
  title: string;
  image?: string;
}

export interface PressReleasesContentProps {
  posts: BlogPost[];
  isAnimating: boolean;
  pressReleases: any[];
}


export interface BlogListProps {
  posts: BlogPost[];
  postsPerLoad?: number;
  filterOptions?: string[];
}


// types/media.ts
export interface MediaItem {
  id: string | number;
  image: string;
  name: string;
  description: string;
  published: string;
  type: string;        // "blog" | "news" | …, whatever you use
}


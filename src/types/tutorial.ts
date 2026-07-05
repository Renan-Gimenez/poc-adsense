export type Language = "javascript" | "python" | "react" | "all";

export interface Tutorial {
  id: string;
  slug: string;
  title: string;
  description: string;
  language: Language;
  tags: string[];
  author: string;
  publishedAt: string;
  readingTimeMinutes: number;
  content: string; // Markdown content
}

export interface TutorialCategory {
  id: Language;
  label: string;
  icon: string;
}

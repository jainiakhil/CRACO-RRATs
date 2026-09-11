export interface Publication {
  id: string;
  title: string;
  authors: string[];
  leadAuthor: string;
  year: number;
  journal: string;
  volume?: string;
  pages?: string;
  abstract: string;
  doi?: string;
  arxivId?: string;
  bibtex: string;
  keywords: string[];
  isHighlighted?: boolean;
}

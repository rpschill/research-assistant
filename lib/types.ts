export interface Todo {
  id: string;
  content: string;
  status: "pending" | "in_progress" | "completed";
}

export interface ResearchFile {
  path: string;
  content: string;
  createdAt: string;
}

export interface Source {
  url: string;
  title: string;
  content?: string;
  status: "found" | "scraped" | "failed";
}

export interface ResearchState {
  todos: Todo[];
  files: ResearchFile[];
  sources: Source[];
}

export const INITIAL_STATE: ResearchState = {
  todos: [],
  files: [],
  sources: [],
};
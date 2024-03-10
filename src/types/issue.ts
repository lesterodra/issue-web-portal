export type IssuesType = IssueType[];

export type IssueInputType = {
  title?: string;
  description?: string;
};

export type IssueType = {
  id: number;
  title: string;
  description: string;
};

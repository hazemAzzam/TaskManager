export type TaskType = {
  id: number;
  title: string;
  description: string;
  status: "pending" | "in-progress" | "completed";
  priority: "low" | "medium" | "high" | "urgent";
  assignee: number;
  dueDate: string;
};

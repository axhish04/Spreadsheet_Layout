import "@tanstack/react-table";

export interface Data {
  id: number;
  jobRequest: string;
  submitted: string;
  status: "In-progress" | "Need to start" | "Complete" | "Blocked";
  submitter: string;
  url: string;
  assigned: string;
  priority: "Medium" | "High" | "Low";
  dueDate: string;
  estimatedValue: number;
}

declare module "@tanstack/react-table" {
  interface ColumnMeta<TData, TValue> {
    showIcon?: boolean;
    showMore?: boolean;
    showArrow?: boolean;
  }
}

import { IssueInputType } from "@/types/issue";
import axios from "axios";

export const fetchIssues = async () => {
  try {
    const response = await axios.get("/api/issues");

    return response.data;
  } catch (error) {
    console.log({ error });
  }
};

export const createIssue = async (issue?: IssueInputType) => {
  try {
    const response = await axios.post("/api/issues", { issue });

    return response.data;
  } catch (error) {
    console.log({ error });
  }
};

export const updateIssue = async (id: number, issue?: IssueInputType) => {
  try {
    const response = await axios.patch(`/api/issues/${id}`, { issue });

    return response.data;
  } catch (error) {
    console.log({ error });
  }
};

export const deleteIssue = async (id: number) => {
  try {
    const response = await axios.delete(`/api/issues/${id}`);

    return response.data;
  } catch (error) {
    console.log({ error });
  }
};

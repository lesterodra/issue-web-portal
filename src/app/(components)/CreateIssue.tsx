"use client";

import { IssueInputType } from "@/types/issue";
import InputText from "./InputText";
import { useState } from "react";
import { createIssue } from "@/utils/client";

const CreateIssue = () => {
  const [issue, setIssue] = useState<IssueInputType>();
  const onCreateIssueClick = () => {
    createIssue(issue);
  };

  return (
    <div className="mb-10">
      <p className="mb-5">Create New Issue</p>
      <div>
        <InputText
          label="Title"
          onChange={(e: any) => {
            setIssue((prev) => ({ ...prev, title: e.target.value }));
          }}
        />
        <InputText
          label="Description"
          onChange={(e: any) => {
            setIssue((prev) => ({ ...prev, description: e.target.value }));
          }}
        />
        <button
          type="button"
          className="border border-green-500 px-2 my-4"
          onClick={onCreateIssueClick}
        >
          Create
        </button>
      </div>
    </div>
  );
};

export default CreateIssue;

"use client";

import { IssuesType } from "@/types/issue";
import Button from "./Button";
import { useEffect, useState } from "react";
import { deleteIssue, fetchIssues, updateIssue } from "@/utils/client";

const Issues = () => {
  const [issues, setIssues] = useState<IssuesType>([]);

  useEffect(() => {
    (async function () {
      setIssues(await fetchIssues());
    })();
  }, []);

  return (
    <div className="">
      <p>Issue List</p>
      <table className="border border-black">
        <thead>
          <tr>
            <td className="border border-black">ID</td>
            <td className="border border-black">TITLE</td>
            <td className="border border-black">DESCRIPTION</td>
            <td className="border border-black">ACTION</td>
          </tr>
        </thead>
        <tbody>
          {issues.map((issue) => {
            return (
              <tr>
                <td className="border border-black">{issue.id}</td>
                <td className="border border-black">{issue.title}</td>
                <td className="border border-black">{issue.description}</td>
                <td>
                  <div className="flex flex-col ">
                    <Button
                      text="Update"
                      onClick={() => {
                        updateIssue(issue.id, {
                          title: "updated",
                          description: "updated description",
                        });
                      }}
                    />
                    <Button
                      text="Delete"
                      onClick={() => {
                        deleteIssue(issue.id);
                      }}
                    />
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Issues;

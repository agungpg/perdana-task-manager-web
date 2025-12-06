"use client";

import { useCallback } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import useProjectTasks from "./useProjectTasks";
import React from "react";
import Tab from "@/components/ui/Tab";
import TaskList from "@/components/ui/TaskList";
import { getProjectSummaryById } from "@/constants/projects";
import ProjectCard from "../projects/components/ProjectCard";

const Task = () => {
  const [activeTab, setActiveTab] = React.useState<number>(0);
  const router = useRouter();
  const searchParams = useSearchParams();
  const projectId = searchParams.get("projectId");
  const project = getProjectSummaryById(projectId ?? "")
  const { data, isLoading, isError } = useProjectTasks(project?.id);

  const handleTabChange = useCallback((tabId: number) => {
    router.replace(`/task?projectId=${projectId}&status=${tabId}`);
    setActiveTab(tabId);
  }, [router, setActiveTab, projectId]);

  return (
    <>
      <div className="py-6 flex flex-col gap-4">
        <div className="pt-2 px-5">
          {project && <ProjectCard {...project} />}
        </div>
        <Tab 
          className="sticky top-[69px] z-40 bg-white w-[100%] px-5 pt-4 py-1"
          title="Filter by Status"
          activeTab={activeTab}
          onChangeTab={handleTabChange}
          list={[
            { id: 1, title: "All" },
            { id: 5, title: "To Do"},
            { id: 2, title: "In Progress" },
            { id: 3, title: "Completed" },
            { id: 4, title: "Pending" },
          ]}
        />
        <div className="px-5">
        {!projectId ? (
          <p className="text-sm text-gray-600">
            Select a project to view its tasks.
          </p>
        ) : null}
        {projectId && isLoading ? (
          <p className="text-sm text-gray-600">Loading tasks…</p>
        ) : null}
        {projectId && isError ? (
          <p className="text-sm text-red-500">
            Failed to load tasks. Please try again.
          </p>
        ) : null}
        {projectId && !isLoading && !isError && data?.tasks.length === 0 ? (
          <p className="text-sm text-gray-600">
            No tasks found for this project yet.
          </p>
        ) : null}
        {projectId && !isLoading && !isError
          ? <TaskList list={data?.tasks ?? []} />
          : null}
        </div>
      </div>
    </>
  );
};

export default Task;

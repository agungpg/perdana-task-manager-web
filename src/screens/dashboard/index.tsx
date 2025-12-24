'use client';
// import { useState } from "react";
import Summary from "./components/Summary";
// import TaskList from "@/components/ui/TaskList";
import useBootstrap from "@/hooks/useBootstrap";
import SearchInput from "../../components/ui/SearchInput";
import TodayTasks from "./components/TodayTasks";
import Activity from "./components/Activity";

type ValuePiece = Date | null;

// type Value = ValuePiece | [ValuePiece, ValuePiece];

const Dashboard = () => {
  useBootstrap()
  // const [value, onChange] = useState<Value>(new Date());

  return (
    <div className="px-[20px] gap-6 flex flex-col py-10">
      <SearchInput placeholder="Search tasks or projects..." />
      <Summary data={{
        totalTasks: 10,
        todo: 5,
        inProgress: 3,
        done: 2,
        totalTime: 100,
      }} />
      <TodayTasks  />
      <Activity />
    </div>
  )
}

export default Dashboard;
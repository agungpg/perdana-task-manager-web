'use client';
import { useState } from "react";
import Summary from "./components/Summary";
import CalendarPicker from "./components/CalendarPicker";
import TaskList from "@/components/ui/TaskList";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

const Dashboard = () => {
  const [value, onChange] = useState<Value>(new Date());
  console.log(value);

  return (
    <div className="px-[20px] gap-[20px] flex flex-col py-10">
      <CalendarPicker value={value as Date} onChange={onChange} />
      <Summary data={{
        totalTasks: 10,
        todo: 5,
        inProgress: 3,
        done: 2,
        totalTime: 100,
      }} />
      <TaskList />
    </div>
  )
}

export default Dashboard;
import Calendar from "react-calendar";
import { Value } from "react-calendar/dist/shared/types.js";

const CalendarPicker = ({value, onChange}: {value: Date, onChange: (value: Value) => void}) => {
  return (
    <div className="w-full h-full flex justify-center items-center">
    <Calendar 
    value={value} 
    onChange={onChange} 
    className="w-full !border-none !box-shadow-none"
    tileClassName={({ date: currentDate, view }) => {
      // Add a custom class when date matches selected one
      if (
        view === "month" &&
        currentDate.toLocaleDateString() === (value instanceof Date ? value.toLocaleDateString() : "")
      ) {
        return "!bg-[#17A2B8] !text-white !rounded font-semibold"
      }
      // add for today
      if (currentDate.toLocaleDateString() === new Date().toLocaleDateString()) {
        return "!bg-primary !rounded font-semibold"
      }
    }}
  />
  </div>
  )
}

export default CalendarPicker;
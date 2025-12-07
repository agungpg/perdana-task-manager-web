import Card from "@/components/ui/Card";
import { memo } from "react";

type ActivityType =
  | "TASK_STATUS_CHANGED"
  | "TASK_CREATED"
  | "COMMENT_ADDED"
  | "PROJECT_CREATED"
  | "FILE_UPLOADED";

interface ActivityItem {
  id: string;
  type: ActivityType;
  actor: {
    name: string;
    initials: string;
  } | null;
  title: string;        // ex: Agung moved ...
  description?: string; // ex: comment text
  project?: string;
  createdAt: string;    // ex: "10:21 AM"
  dateGroup: string;    // ex: "Today", "Yesterday"
}

const mockActivities: ActivityItem[] = [
  {
    id: "1",
    type: "TASK_STATUS_CHANGED",
    actor: { name: "Agung", initials: "AG" },
    title: 'Agung moved "Implement Auth" from In Progress → Done',
    project: "Perdana TM Backend",
    createdAt: "10:21 AM",
    dateGroup: "Today",
  },
  {
    id: "2",
    type: "COMMENT_ADDED",
    actor: { name: "Budi", initials: "BD" },
    title: 'Budi commented on "Dashboard UI"',
    description: "Bro, ini chartnya kita pake donut atau bar?",
    project: "Perdana TM Frontend",
    createdAt: "09:05 AM",
    dateGroup: "Today",
  },
];

export function ActivitySection() {
  const groups = mockActivities.reduce<Record<string, ActivityItem[]>>(
    (acc, item) => {
      acc[item.dateGroup] = acc[item.dateGroup] || [];
      acc[item.dateGroup].push(item);
      return acc;
    },
    {}
  );

  return (
    <section className="pt-6 pb-4">
      {/* Heading mirip "Summary" / "Today Task" */}
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-2xl font-bold text-slate-900">Activity</h2>
        <select className="bg-white border border-slate-300 text-xs rounded-lg px-2 py-1 text-slate-700">
          <option>Last 24 hours</option>
          <option>Last 7 days</option>
          <option>Last 30 days</option>
        </select>
      </div>

      <div className="space-y-4">
        {Object.entries(groups).map(([groupLabel, items]) => (
          <div key={groupLabel} className="space-y-2">
            <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide">
              {groupLabel}
            </p>

            <div className="space-y-3">
              {items.map((item) => (
                <Card
                  key={item.id}
                  className="bg-white px-4 py-3 flex gap-3"
                >
                  {/* Avatar bulat kecil (mirip badge M di kanan card task lu) */}
                  <div className="flex-shrink-0">
                    <div className="w-9 h-9 rounded-full bg-slate-200 flex items-center justify-center text-xs font-semibold text-slate-700">
                      {item.actor?.initials ?? "SY"}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between gap-2 mb-1">
                      <p className="text-sm font-semibold text-slate-900 leading-snug">
                        {item.title}
                      </p>
                      <span className="text-[11px] text-slate-400 whitespace-nowrap">
                        {item.createdAt}
                      </span>
                    </div>

                    {item.project && (
                      <p className="text-xs text-slate-500">
                        {item.project}
                      </p>
                    )}

                    {item.description && (
                      <p className="text-xs text-slate-600 mt-1">
                        {item.description}
                      </p>
                    )}
                  </div>
                </Card>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}



export default memo(ActivitySection)
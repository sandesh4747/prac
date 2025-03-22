import React from "react";
import { GiEgyptianProfile } from "react-icons/gi";

export default function ProfileBody3() {
  const activities = [
    {
      time: "3h",
      user: "You",
      action: "Deployed",
      project: "workcation",
      commit: "27c83",
      branch: "master",
    },
    {
      time: "6h",
      user: "Tanya Pena",
      action: "Deployed",
      project: "workcation",
      commit: "dc076a",
      branch: "master",
    },
    {
      time: "4d",
      user: "You",
      action: "Deployed",
      project: "workcation",
      commit: "dc076a",
      branch: "master",
    },
    {
      time: "4d",
      user: "Courtney Nguyen",
      action: "Deployed",
      project: "workcation",
      commit: "27c83",
      branch: "master",
    },
    {
      time: "4d",
      user: "You",
      action: "Deployed",
      project: "workcation",
      commit: "27c83",
      branch: "master",
    },
  ];

  return (
    <div>
      <ActivityFeed activities={activities} />
    </div>
  );
}
function ActivityFeed({ activities }) {
  return (
    <div className="space-y-3">
      <h1>Acitivty Feed</h1>
      {activities.map((activity, i) => (
        <div key={i} className="flex flex-col border-b border-gray-200 pb-2 ">
          <div className="font-semibold flex justify-between ">
            <span>
              <div className="flex gap-2 items-center">
                <GiEgyptianProfile />
                {activity.user}
              </div>
            </span>
            <span className="text-gray-500">{activity.time}</span>
          </div>
          <div className="w-[80%] flex text-gray-400 gap-2 ">
            <span>{activity.action}</span>
            <span>{activity.project}</span>
            <span>
              ({activity.commit} in {activity.branch})
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}

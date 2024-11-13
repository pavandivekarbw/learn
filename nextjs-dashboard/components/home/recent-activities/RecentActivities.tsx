import VerticalTimeline from "@/components/vertical-timeline";
import React from "react";
import { stubData } from "./stub";

const RecentActivities: React.FC = () => {
    const data = stubData.map((item) => ({
        children: <p>{item.description}</p>,
        date: item.createdOn,
    }));
    return (
        <div className="app-card w-1/2">
            <h1 className="text-xl font-semibold p-4">Recent Activities</h1>
            <VerticalTimeline data={data} />
        </div>
    );
};

export default RecentActivities;

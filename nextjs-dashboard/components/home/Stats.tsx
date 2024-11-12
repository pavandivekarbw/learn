import React from "react";
import "./Stats.css";
import Image from "next/image";
import StatCard from "./StatCard";

const Stats: React.FC = () => {
    const appData = [
        {
            icon: "./images/Directory Members.svg",
            text: "Directory Members",
            count: 3,
        },
        {
            icon: "./images/Documents.svg",
            text: "Documents",
            count: 3,
        },
        {
            icon: "./images/Workspaces.svg",
            text: "Workspace",
            count: 3,
        },
        {
            icon: "./images/Flow Instances.svg",
            text: "Flow Instances",
            count: 3,
        },
    ];
    return (
        <div className="stats-container">
            {appData.map((stat) => (
                <StatCard
                    icon={stat.icon}
                    text={stat.text}
                    count={stat.count}
                    key={stat.text}
                />
            ))}
        </div>
    );
};

export default Stats;

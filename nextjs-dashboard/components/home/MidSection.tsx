import React from "react";

import "./MidSection.css";
import HomeAlerts from "./home-alerts/HomeAlerts";
import RecentActivities from "./recent-activities/RecentActivities";

const MidSection: React.FC = () => {
    return (
        <div className="midsection-container">
            <HomeAlerts />
            <RecentActivities />
        </div>
    );
};

export default MidSection;

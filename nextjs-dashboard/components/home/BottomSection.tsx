import React from "react";
import "./BottomSection.css";
import Chats from "./chats/Chats";
import Resources from "./resources/Resources";

const BottomSection: React.FC = () => {
    return (
        <div className="bottomsection-container">
            <Resources />
            <Chats />
        </div>
    );
};

export default BottomSection;

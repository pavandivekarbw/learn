import Image from "next/image";
import React from "react";
import "./Stats.css";

type PropType = {
    icon: string;
    text: string;
    count: number;
};

const StatCard: React.FC<PropType> = (props: PropType) => {
    const { icon, text, count } = props;
    return (
        <div className="w-1/4 stats-card">
            <div>
                <Image src={icon} alt="home-icon" width={52} height={52} />
            </div>
            <div>
                <span>{text}</span> <span>{count}</span>
            </div>
        </div>
    );
};

export default StatCard;

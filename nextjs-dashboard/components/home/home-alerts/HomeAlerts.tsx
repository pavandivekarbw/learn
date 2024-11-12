import Image from "next/image";
import React from "react";

const HomeAlerts: React.FC = () => {
    return (
        <div className="app-card w-1/2 p-0">
            <h1 className="text-xl font-semibold p-4">Alerts</h1>
            <div className="home-alerts invisibleScroller overflow-hidden py-5 px-3">
                {Array.from({ length: 10 }).map((_, index) => (
                    <div className="alert app-card w-full" key={index}>
                        <div className="w-1/12 h-full flex justify-center">
                            <Image
                                src="./images/Flow/t proactive.svg"
                                alt="alert-icon"
                                width={34}
                                height={34}
                            />
                        </div>
                        <div className="w-10/12 h-full flex flex-col">
                            <div className="alert-title text-sm font-semibold">
                                PROACTIVE ALERT
                            </div>
                            <div className="alert-text text-xs">
                                i23 has completed 70% Time and is going to delay
                                for AMRUTA. Start Time : 2024-06-13 13:46:25 End
                                Time : 2024-06-14 14:56:25
                            </div>
                        </div>
                        <div className="w-1/12 h-full flex justify-between flex-col">
                            <div className="cursor-pointer">
                                <Image
                                    src="/images/alertMenu.png"
                                    alt="options"
                                    width={16}
                                    height={16}
                                />
                            </div>
                            <div className="text-xs w-full h-7 overflow-hidden">
                                Jun 14, 2024 at 01:08 pm
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HomeAlerts;

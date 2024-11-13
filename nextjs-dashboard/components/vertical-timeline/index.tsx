import React from "react";
import "./VerticalTimeline.css";

interface data {
    children: React.ReactNode;
    date: string;
    isAlternate?: boolean;
}

interface VerticalTimelineProps {
    data: data[];
}

const VerticalTimeline: React.FC<VerticalTimelineProps> = (
    props: VerticalTimelineProps
) => {
    const { data } = props;
    return (
        <div className="timeline-container invisibleScroller">
            {data.map(({ children, date, isAlternate }, index) => {
                if (isAlternate)
                    return (
                        <div className="timeline" key={index}>
                            <div className="timeline-date text-xs font-semibold flex flex-col items-end">
                                {date.split(".")[0]}
                            </div>
                            <div className="timeline-line flex flex-col gap-2 items-center justify-between px-6 py-1">
                                <div
                                    className="h-1/5 w-3 border-solid rounded-3xl"
                                    style={{ backgroundColor: "#3f51b5" }}
                                ></div>
                                <div className="h-4/5 border-l-2"></div>
                            </div>
                            <div className="timeline-content text-xs">
                                {children}
                            </div>
                        </div>
                    );
                else
                    return (
                        <div className="timeline" key={index}>
                            {index % 2 === 0 ? (
                                <div className="timeline-date text-xs font-semibold flex flex-col items-end">
                                    {date.split(".")[0]}
                                </div>
                            ) : (
                                <div className="timeline-content text-xs flex flex-col items-end">
                                    {children}
                                </div>
                            )}

                            <div className="timeline-line flex flex-col gap-2 items-center justify-between px-6 py-1">
                                <div
                                    className="h-1/5 w-3 border-solid rounded-3xl"
                                    style={{ backgroundColor: "#3f51b5" }}
                                ></div>
                                <div className="h-4/5 border-l-2"></div>
                            </div>
                            {index % 2 !== 0 ? (
                                <div className="timeline-date text-xs font-semibold flex flex-col">
                                    {date.split(".")[0]}
                                </div>
                            ) : (
                                <div className="timeline-content text-xs">
                                    {children}
                                </div>
                            )}
                        </div>
                    );
            })}
        </div>
    );
};

export default VerticalTimeline;

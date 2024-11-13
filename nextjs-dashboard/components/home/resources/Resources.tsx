import React from "react";

const Resources: React.FC = () => {
    return (
        <div className="app-card w-1/2">
            <h1 className="text-xl font-semibold">Resources</h1>
            <div className="mt-6">
                <h2 className="text-sm font-bold mt-2 mb-2">
                    Learn how to use Unity Central, fix an issue, and get
                    answers to your questions.
                </h2>
                <a
                    href="https://boardwalktech.atlassian.net/wiki/spaces/UW/overview"
                    target="_blank"
                    className="text-blue-500 text-sm overflow-hidden text-ellipsis inline-block w-full"
                >
                    https://boardwalktech.atlassian.net/wiki/spaces/UW/overview
                </a>
                <div className="border-b mt-4 mb-4"></div>
            </div>
            <div className="mt-6">
                <h2 className="text-sm font-bold mt-2 mb-2">Support Portal</h2>
                <a
                    href="https://bwt.servicedesk.boardwalktech.com/"
                    target="_blank"
                    className="text-blue-500 text-sm overflow-hidden text-ellipsis inline-block w-full"
                >
                    https://bwt.servicedesk.boardwalktech.com/
                </a>
                <div className="border-b mt-4 mb-4"></div>
            </div>
            <div className="mt-6">
                <h2 className="text-sm font-bold mt-2 mb-2">Contact Us</h2>
                <a
                    href="https://bwt.servicedesk.boardwalktech.com/"
                    target="_blank"
                    className="text-blue-500 text-sm overflow-hidden text-ellipsis inline-block w-full"
                >
                    https://bwt.servicedesk.boardwalktech.com/
                </a>
                <div className="border-b mt-4 mb-4"></div>
            </div>
        </div>
    );
};

export default Resources;

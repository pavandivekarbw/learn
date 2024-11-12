"use client";
import React from "react";
import "./sidebar.css";
import "../../app/globals.css";
import Image from "next/image";
import Link from "next/link";
import MenuIcons from "./MenuIcons";
import { usePathname } from "next/navigation";

const Sidebar: React.FC = () => {
    const pathname = usePathname();

    const data = [
        {
            name: "Home",
            link: "/",
            icon: "./images/UC-Icons-BW/home-icon-bw.svg",
            activeIcon: "./images/UC-Icons/home-icon.svg",
        },
        {
            name: "Workspaces",
            link: "/workspaces",
            icon: "./images/UC-Icons-BW/workspace-icon-bw.svg",
            activeIcon: "./images/UC-Icons-color/workspace-icon-color.svg",
        },
        {
            name: "Ripple",
            link: "/ripple",
            icon: "./images/UC-Icons-BW/ripple-icon-bw.svg",
            activeIcon: "./images/UC-Icons-BW/ripple-icon-bw.svg",
        },
        {
            name: "Ripple Log",
            link: "/ripplelog",
            icon: "./images/UC-Icons-BW/ripple-log-icon-bw.svg",
            activeIcon: "./images/UC-Icons-BW/ripplelog-icon-bw.svg",
        },
        {
            name: "Flow",
            link: "/flow",
            icon: "./images/UC-Icons-BW/flow-icon-bw.svg",
            activeIcon: "./images/UC-Icons-BW/flow-icon-bw.svg",
        },
        {
            name: "Alerts",
            link: "/alerts",
            icon: "./images/UC-Icons-BW/alertlog-icon-bw.svg",
            activeIcon: "./images/UC-Icons-BW/alertlog-icon-bw.svg",
        },
        {
            name: "Chat",
            link: "/chat",
            icon: "./images/UC-Icons-BW/chat-icon-bw.svg",
            activeIcon: "./images/UC-Icons-BW/chat-icon-bw.svg",
        },
        {
            name: "Directory",
            link: "/directory",
            icon: "./images/UC-Icons-BW/directory-icon-bw.svg",
            activeIcon: "./images/UC-Icons-BW/directory-icon-bw.svg",
        },
        {
            name: "Apps",
            link: "/apps",
            icon: "./images/UC-Icons-BW/apps-icon-bw.svg",
            activeIcon: "./images/UC-Icons-BW/apps-icon-bw.svg",
        },
        {
            name: "Archive",
            link: "/archive",
            icon: "./images/UC-Icons-BW/archive-icon-bw.svg",
            activeIcon: "./images/UC-Icons-BW/archive-icon-bw.svg",
        },
        {
            name: "Trashbin",
            link: "/trashbin",
            icon: "./images/UC-Icons-BW/trashbin-icon-bw.svg",
            activeIcon: "./images/UC-Icons-BW/trashbin-icon-bw.svg",
        },
        {
            name: "Settings",
            link: "/settings",
            icon: "./images/UC-Icons-BW/settings-icon-bw.svg",
            activeIcon: "./images/UC-Icons-BW/settings-icon-bw.svg",
        },
    ];

    return (
        <div className="sidebar-main">
            <div className="sidebar-top">
                <Link href="/" className={`sidebar-menu mt-1`}>
                    <Image
                        src="./images/brand.svg"
                        alt="abc"
                        width={32}
                        height={32}
                    />
                </Link>
                <Link
                    href={"/"}
                    className={`sidebar-menu ${
                        pathname === "/" ? "active" : ""
                    }`}
                >
                    <MenuIcons
                        src="./images/UC-Icons-BW/home-icon-bw.svg"
                        alt="home"
                    />
                    <span>Home</span>
                </Link>
            </div>
            <div className="sidebar-middle invisibleScroller">
                <div className="h-100">
                    {data.slice(1).map((item) => (
                        <Link
                            key={item.name}
                            href={item.link}
                            className={`sidebar-menu ${
                                pathname === item.link ? "active" : ""
                            }`}
                        >
                            <MenuIcons
                                src={
                                    pathname === item.link
                                        ? item.activeIcon
                                        : item.icon
                                }
                                alt={item.name}
                            />
                            <span>{item.name}</span>
                        </Link>
                    ))}
                </div>
            </div>

            <div className="sidebar-bottom">
                <div className="sidebar-menu cursor-pointer">
                    <MenuIcons
                        src="./images/fileTypeIcon/info.svg"
                        alt="Help"
                    />
                    <span>Help</span>
                </div>
                <div className="sidebar-menu cursor-pointer">
                    <MenuIcons
                        src="./images/fileTypeIcon/userAdd.svg"
                        alt="Invite"
                    />
                    <span>Invite</span>
                </div>
                <div
                    className="flex justify-center align-center cursor-pointer"
                    style={{
                        height: "40px",
                        width: "40px",
                        background: "blue",
                        borderRadius: "50%",
                        margin: "auto",
                        padding: "auto",
                    }}
                >
                    <div className="m-auto">AP</div>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;

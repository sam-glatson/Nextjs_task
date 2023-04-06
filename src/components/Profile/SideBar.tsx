import React, { useState } from "react";
import RightArrowIcon from "../UI/RightArrowIcon";
import DashboardIcon from "../UI/DashboardIcon";
import SearchIcon from "../UI/SearchIcon";
import MessageIcon from "../UI/MessageIcon";
import LikeIcon from "../UI/FavoriteIcon";
import JobProfileIcon from "../UI/JobProfileIcon";

const SideBar = () => {
    const [sideBarOpen, setSideBarOpen] = useState(false);

    const handelSidebarOpen = (props: any) => {
        setSideBarOpen(!sideBarOpen);
    };

    return (
        <aside
            className={`lg:w-4/12 2xl:w-3/12 bg-white rounded-20 space-y-3 ${
                sideBarOpen ? "px-5.5 py-5" : "w-fit px-4 py-4"
            } font-Inter select-none h-fit lg:px-5.5 lg:pt-8.5 lg:pb-55 shadow-4xl`}
        >
            <span className="cursor-pointer" onClick={() => handelSidebarOpen(sideBarOpen)}>
                <RightArrowIcon />
            </span>
            <ul className={`${sideBarOpen ? "block" : "hidden"} lg:block dashboard-list space-y-3`}>
                <li>
                    <DashboardIcon />
                    <p>Dashboard</p>
                </li>
                <li>
                    <SearchIcon />
                    <p>Search jobs</p>
                </li>
                <li>
                    <MessageIcon />
                    <p>Your Request</p>
                </li>
                <li>
                    <LikeIcon />
                    <p>Favorite</p>
                </li>
                <li>
                    <JobProfileIcon />
                    <p>Job Profile</p>
                </li>
            </ul>
        </aside>
    );
};

export default SideBar;

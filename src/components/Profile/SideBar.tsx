import React, { useState } from "react";
import RightArrowIcon from "../UI/RightArrowIcon";
import DashboardIcon from "../UI/DashboardIcon";
import SearchIcon from "../UI/SearchIcon";
import MessageIcon from "../UI/MessageIcon";
import LikeIcon from "../UI/FavoriteIcon";
import JobProfileIcon from "../UI/JobProfileIcon";

const SideBar = () => {
    const [sideBarOpen, setSideBarOpen] = useState(false);

    const handelSidebarOpen = () => {
        setSideBarOpen(!sideBarOpen);
    };
    return (
        <section
            className={`xl:w-1/5 lg:w-2/6 bg-white rounded-20  space-y-3 ${
                sideBarOpen ? "w-full px-5.5 pt-8.5 pb-55" : "w-fit px-4 py-4"
            } font-Inter select-none lg:h-[468px] lg:w-full lg:px-5.5 lg:pt-8.5 lg:pb-55`}
        >
            <span className="cursor-pointer" onClick={() => handelSidebarOpen()}>
                <RightArrowIcon />
            </span>
            <ul className={`${sideBarOpen ? "block" : "hidden"} lg:block dashboard-list`}>
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
        </section>
    );
};

export default SideBar;

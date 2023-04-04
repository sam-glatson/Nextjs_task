import ArcherIcon from "@/components/UI/ArcherIcon";
import FeedIcon from "@/components/UI/FeedIcon";
import GroupIcon from "@/components/UI/GroupIcon";
import ProfileIcon from "@/components/UI/ProfileIcon";
import React from "react";

const Menus = (props: any) => {
    const { menuOpen } = props;

    return (
        <ul
            className={`menu-list lg:flex ${
                menuOpen ? "block" : "hidden"
            } lg:mx-3 w-full lg:w-auto space-x-0 lg:space-x-3 xl:space-x-10 py-3 lg:flex-row flex-col`}
        >
            <li>
                <FeedIcon />
                <p className="ml-5 lg:hidden font-semibold text-15">Feed</p>
            </li>
            <li>
                <GroupIcon />
                <p className="ml-5 lg:hidden font-semibold text-15">Groups</p>
            </li>
            <li>
                <ArcherIcon />
                <p className="ml-5 lg:hidden font-semibold text-15">Archer</p>
            </li>
            <li>
                <ProfileIcon />
                <p className="ml-5 lg:hidden font-semibold text-15">Profile</p>
            </li>
        </ul>
    );
};

export default Menus;

import ArcherIcon from "@/components/UI/ArcherIcon";
import FeedIcon from "@/components/UI/FeedIcon";
import GroupIcon from "@/components/UI/GroupIcon";
import ProfileIcon from "@/components/UI/ProfileIcon";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const Menus = (props: any) => {
    const { menuOpen } = props;
    const [profile, setProfile] = useState(false);
    const router = useRouter();

    useEffect(() => {
        if (router.asPath === "/profile-detail") {
            setProfile(!profile);
        }
    }, []);
    return (
        <ul
            className={`menu-list lg:flex ${
                menuOpen ? "block" : "hidden"
            } lg:mx-3 w-full lg:w-auto space-x-0 lg:space-x-3 xl:space-x-10 py-3 lg:flex-row flex-col`}
        >
            <li>
                <a href="">
                    <FeedIcon />
                    <p className="ml-5 lg:hidden font-semibold text-15">Feed</p>
                </a>
            </li>
            <li>
                <a href="">
                    <GroupIcon />
                    <p className="ml-5 lg:hidden font-semibold text-15">Groups</p>
                </a>
            </li>
            <li>
                <a href="">
                    <ArcherIcon />
                    <p className="ml-5 lg:hidden font-semibold text-15">Archer</p>
                </a>
            </li>
            <li className="relative">
                {profile ? (
                    <div className="h-[3px] bg-picton-blue-500 rounded-20 w-full absolute -bottom-[13px]"></div>
                ) : null}
                <Link href="/profile-detail">
                    <ProfileIcon profile={profile} />
                    <p className="ml-5 lg:hidden font-semibold text-15">Profile</p>
                </Link>
            </li>
        </ul>
    );
};

export default Menus;

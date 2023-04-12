import React, { useState } from "react";
import SettingsIcon from "@/components/UI/SettingsIcon";
import EditIcon from "@/components/UI/EditIcon";

const Tab = (props: any) => {
    const { value } = props;
    return (
        <div className="container flex justify-center sm:justify-between items-center">
            <ul className="flex profile-tab space-x-3">
                <div className="relative py-5 px-5">
                    <li
                        onClick={() => props.handelCallback(1)}
                        className={`${value == 1 ? " text-tundora-800" : "text-tundora-400"}`}
                    >
                        Post
                    </li>
                    {value == 1 ? (
                        <div className="h-[3px] left-0 bg-picton-blue-500 absolute w-full bottom-0"></div>
                    ) : null}
                </div>
                <div className="relative py-5 px-5">
                    <li
                        onClick={() => props.handelCallback(2)}
                        className={`${value == 2 ? " text-tundora-800" : "text-tundora-400"}`}
                    >
                        About
                    </li>
                    {value == 2 ? (
                        <div className="h-[3px] left-0 bg-picton-blue-500 absolute w-full bottom-0"></div>
                    ) : null}
                </div>
                <div className="relative py-5 px-5">
                    <li
                        onClick={() => props.handelCallback(3)}
                        className={`${value == 3 ? " text-tundora-800" : "text-tundora-400"}`}
                    >
                        Friends
                    </li>
                    {value == 3 ? (
                        <div className="h-[3px] left-0 bg-picton-blue-500 absolute w-full bottom-0"></div>
                    ) : null}
                </div>
            </ul>
            <div className="items-center space-x-7 sm:flex hidden">
                <button
                    id="edit-profile"
                    name="edit-profile"
                    className="border py-4 px-8 rounded-14 border-picton-blue-500 flex items-center mx-auto md:mx-0 font-semibold text-sm leading-17 text-black"
                >
                    <span className="mr-4">
                        <EditIcon fill={"#00000"} />
                    </span>
                    Edit Profile
                </button>
                <span className="px-4 py-2 bg-athens-gray-500 hover:bg-athens-gray-600 cursor-pointer rounded-full">
                    <SettingsIcon />
                </span>
            </div>
        </div>
    );
};

export default Tab;

import React from "react";
import SettingsIcon from "@/components/UI/SettingsIcon";
import EditIcon from "@/components/UI/EditIcon";

const Tab = () => {
    return (
        <div className=" ml-7 flex justify-center sm:justify-between items-center ">
            <ul className="flex space-x-14 profile-tab">
                <li>Post</li>
                <li>About</li>
                <li>Friends</li>
            </ul>
            <div className="items-center space-x-7 sm:flex hidden">
                <button
                    id="editprofile"
                    name="editprofile"
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

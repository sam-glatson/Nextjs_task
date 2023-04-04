import React from "react";
import SideBar from "./SideBar";
import dynamic from "next/dynamic";
import Profile from "./Profile";

// const Profile = dynamic(() => import("../Profile/Profile"), {
//     loading: () => <p>Loading...</p>,
// });

const Index = () => {
    return (
        <section className="px-4 lg:px-7.5 pt-120 pb-7.5 space-y-2 lg:space-y-0 bg-alabaster-500 h-full space-x-0 lg:space-x-7 flex lg:flex-row flex-col w-full fixed font-Inter">
            <SideBar />
            <Profile />
        </section>
    );
};

export default Index;

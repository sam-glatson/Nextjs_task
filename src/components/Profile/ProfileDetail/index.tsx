import Layout from "@/components/Layout";
import React from "react";
import Banner from "./Banner";
import Post from "./TabContent/Post";

const ProfileDetailSection = () => {
    return (
        <section className="pt-100 overflow-x-hidden font-Inter bg-white">
            <Banner />
            <Post />
        </section>
    );
};

export default ProfileDetailSection;

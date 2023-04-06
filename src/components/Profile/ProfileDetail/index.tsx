import Layout from "@/components/Layout";
import React from "react";
import Banner from "./Banner";
import Post from "./TabContent/Post";
import Tab from "./tab";

const ProfileDetailSection = () => {
    return (
        <>
            <section className="font-Inter">
                <div className="pt-100 font-Inter container bg-white">
                    <Banner />
                </div>
                <div className="sticky top-[90px] py-5 bg-white z-10">
                    <div className="container">
                        <Tab />
                    </div>
                </div>
                <div>
                    <div className="bg-alabaster-500 ">
                        <div className="container px-0">
                            <Post />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ProfileDetailSection;

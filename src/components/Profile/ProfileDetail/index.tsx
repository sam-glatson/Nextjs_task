import React, { useState } from "react";
import Banner from "./Banner";
import Post from "./TabContent/PostContent/Post";
import Tab from "./tab";
import AboutContent from "./TabContent/AboutContent";

const ProfileDetailSection = () => {
    const [TabContent, setTabContent] = useState(1);
    function CallBack(childData: any) {
        setTabContent(childData);
    }
    return (
        <>
            <section className="font-Inter">
                <div className="pt-100 font-Inter container bg-white">
                    <Banner />
                </div>
                <div className="sticky top-[89px] py-5 bg-white z-10">
                    <Tab handelCallback={CallBack} />
                </div>
                <div className="bg-alabaster-500">
                    {TabContent == 1 ? <Post /> : null}
                    {TabContent == 2 ? <AboutContent /> : null}
                </div>
            </section>
        </>
    );
};

export default ProfileDetailSection;

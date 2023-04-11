import Layout from "@/components/Layout";
import React from "react";
import ProfileDetailSection from "../components/Profile/ProfileDetail";
import AboutContent from "@/components/Profile/ProfileDetail/TabContent/AboutContent";

const About = () => {
    return (
        <Layout title="About | Profile">
            <AboutContent />
        </Layout>
    );
};

export default About;

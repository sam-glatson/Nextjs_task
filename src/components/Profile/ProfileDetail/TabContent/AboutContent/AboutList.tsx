import React, { useState } from "react";
import GlobalIcon from "@/components/UI/GlobalIcon";
import HealthCareIcon from "@/components/UI/HealthCareIcon";
import PortfolioIcon from "@/components/UI/PortfolioIcon";
import SkillIcon from "@/components/UI/SkillIcon";
import VolunteerIcon from "@/components/UI/VolunteerIcon";
import BookIcon from "@/components/UI/BookIcon";
import CertificateIcon from "@/components/UI/CertificateIcon";
import CloseBookIcon from "@/components/UI/CloseBookIcon";
import ContactIcon from "@/components/UI/ContactIcon";
import CreativeIcon from "@/components/UI/CreativeIcon";
import SummaryIcon from "@/components/UI/SummaryIcon";

const AboutList = () => {
    return (
        <aside>
            <div className="pt-35 pr-7 space-y-6">
                <h3 className="font-bold text-lg leading-5 ml-6 text-masala-500">About</h3>
                <hr />
            </div>
            <div className="space-y-2.5 mt-9">
                <div className="flex items-center space-x-4 cursor-pointer pb-3 pt-3.5 px-4 about-gradient text-white">
                    <div>
                        <SummaryIcon fill={"ffffff"} width={24} />
                    </div>
                    <h5 className="font-medium text-15xl leading-17.5">Professional Summary</h5>
                </div>
                <div className="flex items-center space-x-4 cursor-pointer pb-3 pt-3.5 px-4 about hover:text-white text-shark-550">
                    <div>
                        <PortfolioIcon width={24} />
                    </div>
                    <h5 className="font-medium text-15xl leading-17.5">Work Experience</h5>
                </div>
                <div className="flex items-center space-x-4 cursor-pointer pb-3 pt-3.5 px-4 about hover:text-white text-shark-550 hover:fill-black">
                    <div>
                        <BookIcon width={24} />
                    </div>
                    <h5 className="font-medium text-15xl leading-17.5">Education</h5>
                </div>
                <div className="flex items-center space-x-4 cursor-pointer pb-3 pt-3.5 px-4 about hover:text-white text-shark-550">
                    <div>
                        <GlobalIcon width={24} />
                    </div>
                    <h5 className="font-medium text-15xl leading-17.5">Languages</h5>
                </div>
                <div className="flex items-center space-x-4 cursor-pointer pb-3 pt-3.5 px-4 about hover:text-white text-shark-550">
                    <div>
                        <VolunteerIcon width={24} />
                    </div>
                    <h5 className="font-medium text-15xl leading-17.5">Volunteer Experience</h5>
                </div>
                <div className="flex items-center space-x-4 cursor-pointer pb-3 pt-3.5 px-4 about hover:text-white text-shark-550">
                    <div>
                        <CreativeIcon width={24} />
                    </div>
                    <h5 className="font-medium text-15xl leading-17.5">Research & Projects</h5>
                </div>
                <div className="flex items-center space-x-4 cursor-pointer pb-3 pt-3.5 px-4 about hover:text-white text-shark-550">
                    <div>
                        <ContactIcon width={24} />
                    </div>
                    <h5 className="font-medium text-15xl leading-17.5">Licenses</h5>
                </div>
                <div className="flex items-center space-x-4 cursor-pointer pb-3 pt-3.5 px-4 about hover:text-white text-shark-550">
                    <div>
                        <CertificateIcon width={24} />
                    </div>
                    <h5 className="font-medium text-15xl leading-17.5">Certificates</h5>
                </div>
                <div className="flex items-center space-x-4 cursor-pointer pb-3 pt-3.5 px-4 about hover:text-white text-shark-550">
                    <div>
                        <CloseBookIcon width={24} />
                    </div>
                    <h5 className="font-medium text-15xl leading-17.5">References</h5>
                </div>
                <div className="flex items-center space-x-4 cursor-pointer pb-3 pt-3.5 px-4 about hover:text-white text-shark-550">
                    <div>
                        <SkillIcon width={24} />
                    </div>
                    <h5 className="font-medium text-15xl leading-17.5">Skills & Endorsements</h5>
                </div>
                <div className="flex items-center space-x-4 cursor-pointer pb-3 pt-3.5 px-4 about hover:text-white text-shark-550">
                    <div>
                        <HealthCareIcon width={24} />
                    </div>
                    <h5 className="font-medium text-15xl leading-17.5">Interests</h5>
                </div>
            </div>
        </aside>
    );
};

export default AboutList;

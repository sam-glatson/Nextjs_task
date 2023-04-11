import EditIcon from "@/components/UI/EditIcon";
import SummaryIcon from "@/components/UI/SummaryIcon";
import React from "react";
import AboutList from "./AboutList";
import { motion } from "framer-motion";

const AboutContent = () => {
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <section className="bg-alabaster-500 pt-5 pb-7.5 px-4 font-Inter">
                <div className="container rounded-20 bg-white">
                    <div className="flex flex-col sm:flex-row">
                        <div className="pl-1 sm:border-r border-r-gallery-500 sm:w-4/12 space-y-9 w-full sm:pb-12">
                            <AboutList />
                        </div>
                        <div className="sm:w-8/12 px-3 sm:px-10 w-full pt-33 pb-12 space-y-5 sm:space-y-17">
                            <div className="space-y-5 sm:space-y-11">
                                <div className="px-4 sm:px-33 flex items-center space-x-2 sm:space-x-5 bg-tundora-50 py-5">
                                    <div>
                                        <SummaryIcon fill={"1C1C1C"} />
                                    </div>
                                    <h5 className="font-medium text-base text-shark-550">Professional Summary</h5>
                                </div>
                                <div className="flex items-center justify-between">
                                    <p className="text-storm-gray-500 font-normal text-sm leading-17">
                                        It is a long established fact that a reader will be distracted by the readable
                                        content
                                    </p>
                                    <div className="bg-tundora-50 rounded-full p-2.5 cursor-pointer">
                                        <EditIcon />
                                    </div>
                                </div>
                            </div>
                            <hr />
                        </div>
                    </div>
                </div>
            </section>
        </motion.div>
    );
};

export default AboutContent;

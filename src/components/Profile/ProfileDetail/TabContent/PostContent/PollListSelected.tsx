import React from "react";
import PollIcon from "@/components/UI/PollIcon";
import PostHeader from "./PostHeader";
import PostFooter from "./PostFooter";

const Pollistselected = () => {
    return (
        <div className="bg-white rounded-20 shadow-4xl pt-33 px-2 sm:px-6">
            <div className="space-y-4">
                <PostHeader />
                <p className="text-black-russian-500 text-base leading-6 font-normal">
                    It is a long established fact that a reader will be distracted by the readable content of a page
                    when looking at its layout?
                </p>
                <div className="space-y-4">
                    <div className="bg-black-squeeze-500 py-4 px-7.5 flex space-x-5 items-center">
                        <span>
                            <PollIcon />
                        </span>
                        <p className="text-outer-space-500 font-normal text-lg leading-7.5">Polls ends in 2 days</p>
                    </div>
                    <div className="space-y-4 mx-5">
                        <div className="relative top-0 z-0">
                            <div className="border py-4.5 px-7.5 rounded-10 flex justify-between items-center">
                                <h6 className="text-elephant-500 font-normal text-base leading-19">Option A</h6>
                                <h6 className="text-elephant-500 font-normal text-base leading-19">25%</h6>
                            </div>
                            <div className="py-27 rounded-10 absolute top-0 -z-1 w-1/4 bg-seashell-500"></div>
                        </div>
                        <div className="relative top-0 z-0">
                            <div className="border py-4.5 px-7.5 rounded-10 flex justify-between items-center">
                                <h6 className="text-white font-normal text-base leading-19">Option B</h6>
                                <h6 className="text-elephant-500 font-normal text-base leading-19">65%</h6>
                            </div>
                            <div className="py-27 rounded-10 absolute top-0 -z-1 w-3/4 pollselection-gradient"></div>
                        </div>
                        <div className="relative top-0 z-0">
                            <div className="border py-4.5 px-7.5 rounded-10 flex justify-between items-center">
                                <h6 className="text-elephant-500 font-normal text-base leading-19">Option C</h6>
                                <h6 className="text-elephant-500 font-normal text-base leading-19">7%</h6>
                            </div>
                            <div className="py-27 rounded-10 absolute top-0 -z-1 w-1/6 bg-seashell-500"></div>
                        </div>
                    </div>
                </div>
            </div>
            <PostFooter />
        </div>
    );
};

export default Pollistselected;

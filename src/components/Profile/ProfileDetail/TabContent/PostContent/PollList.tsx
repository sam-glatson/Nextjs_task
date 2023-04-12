import React from "react";
import PollIcon from "@/components/UI/PollIcon";
import PostHeader from "./PostHeader";
import PostFooter from "./PostFooter";

const Pollist = () => {
    return (
        <div className="bg-white rounded-20 shadow-4xl pt-33 px-2 sm:px-6">
            <div className="space-y-4">
                <div className="space-y-2">
                    <PostHeader specialty="Physician World" />
                </div>
                <p className="font-normal text-base leading-6 text-black-russian-500">
                    It is a long established fact that a reader will be distracted by the readable content of a page
                    when looking at its layout?
                </p>
                <div className="space-y-4">
                    <div className="bg-tundora-50 py-4 px-7.5 flex space-x-5 items-center">
                        <div>
                            <PollIcon />
                        </div>
                        <p className="text-outer-space-500 font-normal text-lg leading-7.5">Polls ends in 2 days</p>
                    </div>
                    <div className="space-y-4 mx-5">
                        <div className="border py-4.5 px-7.5 rounded-10 text-elephant-500 font-normal text-base leading-19">
                            Option A
                        </div>
                        <div className="border py-4.5 px-7.5 rounded-10 text-elephant-500 font-normal text-base leading-19">
                            Option B
                        </div>
                        <div className="border py-4.5 px-7.5 rounded-10 text-elephant-500 font-normal text-base leading-19">
                            Option C
                        </div>
                    </div>
                </div>
            </div>
            <PostFooter />
        </div>
    );
};

export default Pollist;

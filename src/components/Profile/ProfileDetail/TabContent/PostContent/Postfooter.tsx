import React from "react";
import LikeIcon from "@/components/UI/LikeIcon";
import DotIcon from "@/components/UI/DotIcon";
import HeartIcon from "@/components/UI/HeartIcon";
import CommandIcon from "@/components/UI/CommandIcon";
import ShareIcon from "@/components/UI/ShareIcon";
const PostFooter = () => {
    return (
        <>
            <div className="flex items-center mt-5 flex-row justify-between px-2 sm:px-34">
                <div className="space-x-1 flex items-center">
                    <LikeIcon />
                    <h5 className="text-jumbo-500 font-normal leading-17 text-sm">31 Beats</h5>
                </div>
                <div className="flex space-x-1 sm:space-x-3 items-center">
                    <p className="text-jumbo-500 font-normal leading-17 text-sm">15 Shares</p>
                    <span>
                        <DotIcon />
                    </span>
                    <p className="text-jumbo-500 font-normal leading-17 text-sm">35 Comments</p>
                </div>
            </div>
            <hr className="mt-2.5 -mx-2 sm:-mx-6" />
            <div className="flex justify-center flex-row">
                <div className="flex items-center space-x-2 sm:space-x-3 cursor-pointer border-r py-3 sm:py-6 px-2.5 sm:px-16">
                    <div>
                        <HeartIcon />
                    </div>
                    <h5 className="text-sm leading-17 text-mine-shaft-500 font-semibold">Beat</h5>
                </div>
                <div className="flex items-center space-x-2 sm:space-x-3 cursor-pointer border-r py-3 sm:py-6 px-2.5 sm:px-16">
                    <div>
                        <CommandIcon />
                    </div>
                    <h5 className="text-sm leading-17 text-spun-pearl-500 font-normal">Comment</h5>
                </div>
                <div className="flex items-center space-x-2 sm:space-x-3 cursor-pointer py-3 sm:py-6 px-2.5 sm:px-16">
                    <div>
                        <ShareIcon />
                    </div>
                    <h5 className="text-sm leading-17 text-spun-pearl-500 font-normal">Share</h5>
                </div>
            </div>
        </>
    );
};

export default PostFooter;

import React from "react";
import JohnDeo from "@/public/assets/images/john-deo.png";
import Image from "next/image";
import VerifiedIcon from "@/components/UI/VerifiedIcon";
import SettingsIcon from "@/components/UI/SettingsIcon";
import ClockIcon from "@/components/UI/ClockIcon";
import LikeIcon from "@/components/UI/LikeIcon";
import DotIcon from "@/components/UI/DotIcon";
import HeartIcon from "@/components/UI/HeartIcon";
import CommantIcon from "@/components/UI/CommantIcon";
import ShareIcon from "@/components/UI/ShareIcon";
import RightSmallIcon from "@/components/UI/RightSmallIcon";
import PollIcon from "@/components/UI/PollIcon";

const Pollistselected = () => {
    return (
        <div className="bg-white rounded-20 shadow-4xl pt-[33px] ">
            <div className="px-2 sm:px-[36px]">
                <div className="space-y-4">
                    <div className="space-y-2">
                        <div className="flex justify-between ">
                            <div className="flex items-center flex-row sm:space-x-4 basis-full">
                                <div className="border-[3px] border-white rounded-full shadow-6xl">
                                    <Image
                                        src={JohnDeo}
                                        alt="JohnDeo"
                                        width="66"
                                        height="66"
                                        className="shrink-0 sm:w-[66px] w-14 object-cover"
                                    />
                                </div>
                                <div className="space-y-2.5">
                                    <div className="flex flex-row sm:items-center ml-2">
                                        <div className="flex items-center space-x-3">
                                            <h3 className="font-bold text-base sm:text-lg">John Deo</h3>
                                            <VerifiedIcon />
                                        </div>
                                    </div>
                                    <div className="flex min-[370px]:space-y-1 min-[370px]:space-x-4 space-x-2 items-center flex-row ">
                                        <div className=" bg-black-squeeze-500 rounded-14 py-2 px-2 sm:px-4">
                                            <p className="text-sm leading-17 text-outer-space-500">Neurologist</p>
                                        </div>
                                        <span className="flex items-center space-x-1.5">
                                            <div>
                                                <ClockIcon />
                                            </div>
                                            <p className=" text-[13px] leading-[16px] text-mamba-500">1 hour ago</p>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <span className="w-[22px] h-10 rounded-[18px] bg-black-squeeze-500 flex items-center justify-center cursor-pointer">
                                <SettingsIcon />
                            </span>
                        </div>
                    </div>
                    <p>
                        It is a long established fact that a reader will be distracted by the readable content of a page
                        when looking at its layout?
                    </p>
                    <div className="space-y-4">
                        <div className=" bg-black-squeeze-500 py-4 px-7.5 flex space-x-5 items-center">
                            <span>
                                <PollIcon />
                            </span>
                            <p className="text-outer-space-500 font-normal text-lg leading-[22px]">
                                Polls ends in 2 days
                            </p>
                        </div>
                        <div className="space-y-4 mx-5">
                            <div className="relative top-0 z-0">
                                <div className="border py-4.5 px-7.5 rounded-10 flex justify-between items-center">
                                    <h6 className="text-elephant-500 font-normal text-base leading-19">Option A</h6>
                                    <h6>25%</h6>
                                </div>
                                <div className="py-7.5 rounded-10 absolute top-0 -z-[1] w-1/4 bg-seashell-500"></div>
                            </div>
                            <div className="relative top-0 z-0">
                                <div className="border py-4.5 px-7.5 rounded-10 flex justify-between items-center">
                                    <h6 className=" text-white font-normal text-base leading-19">Option B</h6>
                                    <h6>65%</h6>
                                </div>
                                <div className="py-7.5 rounded-10 absolute top-0 -z-[1] w-3/4 pollselection-gradient"></div>
                            </div>
                            <div className="relative top-0 z-0">
                                <div className="border py-4.5 px-7.5 rounded-10 flex justify-between items-center">
                                    <h6 className="text-elephant-500 font-normal text-base leading-19">Option C</h6>
                                    <h6>7%</h6>
                                </div>
                                <div className="py-7.5 rounded-10 absolute top-0 -z-[1] w-1/6 bg-seashell-500"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex items-center mt-5 flex-row justify-between px-2 sm:px-[34px] ">
                <div className="space-x-1  flex items-center">
                    <LikeIcon />
                    <h5 className=" text-sm">31 Beats</h5>
                </div>
                <div className="flex space-x-1 items-center">
                    <p className=" text-sm">15 Shares</p>
                    <span>
                        <DotIcon />
                    </span>
                    <p className=" text-sm">35 Comments</p>
                </div>
            </div>
            <hr className="mt-2.5" />
            <div className="flex justify-center flex-row">
                <div className="flex items-center space-x-1 sm:space-x-3  border-r py-3 sm:py-[24px] px-2.5 sm:px-16">
                    <div>
                        <HeartIcon />
                    </div>
                    <h5 className="text-sm leading-17 text-mine-shaft-500 font-semibold">Beat</h5>
                </div>
                <div className="flex items-center space-x-1 sm:space-x-3 border-r py-3 sm:py-[24px] px-2.5 sm:px-16">
                    <div>
                        <CommantIcon />
                    </div>
                    <h5 className="text-sm leading-17 text-spun-pearl-500 font-normal">Comment</h5>
                </div>
                <div className="flex items-center space-x-1 sm:space-x-3  py-3 sm:py-[24px] px-2.5 sm:px-16">
                    <div>
                        <ShareIcon />
                    </div>
                    <h5 className="text-sm leading-17 text-spun-pearl-500 font-normal">Share</h5>
                </div>
            </div>
        </div>
    );
};

export default Pollistselected;

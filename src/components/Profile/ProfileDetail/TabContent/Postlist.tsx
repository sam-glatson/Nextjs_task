import React from "react";
import JohnDeo from "@/public/assets/images/john-deo.png";
import WomenImage from "@/public/assets/images/woman-image.png";
import CoughImage from "@/public/assets/images/cough-image.png";
import FeverImage from "@/public/assets/images/fever-image.png";
import Image from "next/image";
import VerifiedIcon from "@/components/UI/VerifiedIcon";
import SettingsIcon from "@/components/UI/SettingsIcon";
import ClockIcon from "@/components/UI/ClockIcon";
import LikeIcon from "@/components/UI/LikeIcon";
import DotIcon from "@/components/UI/DotIcon";
import HeartIcon from "@/components/UI/HeartIcon";
import CommantIcon from "@/components/UI/CommantIcon";
import ShareIcon from "@/components/UI/ShareIcon";

const PostList = () => {
    return (
        <div className="bg-white rounded-20 shadow-4xl pt-[33px] ">
            <div className="px-4 sm:px-[34px]  ">
                <div className="space-y-4.5">
                    <div className="space-y-2">
                        <div className="flex justify-between ">
                            <div className="flex items-center flex-col sm:flex-row sm:space-x-4 basis-full	">
                                <div className="border-[3px] border-white rounded-full shadow-6xl">
                                    <Image
                                        src={JohnDeo}
                                        alt="JohnDeo"
                                        width="66"
                                        height="66"
                                        className="shrink-0 object-cover"
                                    />
                                </div>
                                <div className="space-y-2.5">
                                    <div className="flex space-x-2 sm:justify-normal items-center justify-center">
                                        <h3 className=" font-bold text-lg leading-[22px]">John Deo</h3>
                                        <span>
                                            <VerifiedIcon />
                                        </span>
                                    </div>
                                    <div className="flex min-[370px]:space-y-1 min-[370px]:space-x-4 space-x-2 items-center flex-row ">
                                        <div className=" bg-black-squeeze-500 rounded-14 py-2 px-4">
                                            <p>Neurologist</p>
                                        </div>
                                        <span className="flex items-center space-x-1.5">
                                            <ClockIcon />
                                            <p>1 hour ago</p>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <span className="w-[22px] h-10 rounded-[18px] bg-black-squeeze-500 flex items-center justify-center cursor-pointer">
                                <SettingsIcon />
                            </span>
                        </div>
                        <p>It is a long established fact that a reader will be distracted by</p>
                    </div>
                    <div className="space-y-2">
                        <div className="grid grid-cols-1 min-[400px]:grid-cols-2 gap-[7px]">
                            <Image
                                src={WomenImage}
                                alt="woman In Sick"
                                className="object-cover w-full h-full"
                                height="191"
                            />
                            <Image src={CoughImage} alt="boy In Sick" className="object-cover w-full" height="191" />
                        </div>
                        <div>
                            <Image src={FeverImage} alt="fever" className="object-cover" />
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
                    <h5>Beat</h5>
                </div>
                <div className="flex items-center space-x-1 sm:space-x-3 border-r py-3 sm:py-[24px] px-2.5 sm:px-16">
                    <div>
                        <CommantIcon />
                    </div>
                    <h5>Comment</h5>
                </div>
                <div className="flex items-center space-x-1 sm:space-x-3  py-3 sm:py-[24px] px-2.5 sm:px-16">
                    <div>
                        <ShareIcon />
                    </div>
                    <h5>Share</h5>
                </div>
            </div>
        </div>
    );
};

export default PostList;

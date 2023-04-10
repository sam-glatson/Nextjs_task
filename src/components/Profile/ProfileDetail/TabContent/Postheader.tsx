import React from "react";
import JohnDeo from "@/public/assets/images/john-deo.png";
import Image from "next/image";
import VerifiedIcon from "@/components/UI/VerifiedIcon";
import SettingsIcon from "@/components/UI/SettingsIcon";
import ClockIcon from "@/components/UI/ClockIcon";
import RightSmallIcon from "@/components/UI/RightSmallIcon";

const PostHeader = (props: any) => {
    const { description } = props;
    return (
        <div className="space-y-1 sm:space-y-2">
            <div className="flex justify-between">
                <div className="flex items-center flex-row sm:space-x-4 basis-full">
                    <div className="border-2.5 border-white rounded-full shadow-6xl">
                        <Image
                            src={JohnDeo}
                            alt="JohnDeo"
                            width="66"
                            height="66"
                            className="shrink-0 sm:w-[66px] w-14 object-cover"
                        />
                    </div>
                    <div className="space-y-1.5 sm:ml-3.5 ml-1">
                        <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:items-center ml-2 sm:space-x-3">
                            <div className="flex items-center space-x-2">
                                <h3 className="font-bold text-base sm:text-lg">John Deo</h3>
                                <VerifiedIcon />
                            </div>
                            {description ? (
                                <div className="flex items-center space-x-3">
                                    <RightSmallIcon />
                                    <h3 className="font-bold text-base sm:text-lg">Physician World</h3>
                                </div>
                            ) : null}
                        </div>
                        <div className="flex min-[370px]:space-y-1 min-[370px]:space-x-4 space-x-2 items-center flex-row">
                            <div className="bg-black-squeeze-500 rounded-14 py-2 px-2 sm:px-4">
                                <p className="text-sm leading-17 text-outer-space-500">Neurologist</p>
                            </div>
                            <span className="flex items-center space-x-1.5">
                                <div>
                                    <ClockIcon />
                                </div>
                                <p className="font-normal text-13xl leading-4 text-mamba-500">1 hour ago</p>
                            </span>
                        </div>
                    </div>
                </div>
                <span className="w-[22px] h-10 rounded-18 bg-black-squeeze-500 flex items-center justify-center cursor-pointer">
                    <SettingsIcon />
                </span>
            </div>
        </div>
    );
};

export default PostHeader;

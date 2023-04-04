import React from "react";
import SquareIcon from "../UI/SquareIcon";
import SquareSmallIcon from "../UI/SquareSmallIcon";
import LocationIconFill from "../UI/LocationIconFill";
import JobImage from "@/public/assets/images/job-image.png";
import LearningImage from "@/public/assets/images/learning-image.png";
import MedicalBoxImage from "@/public/assets/images/medical-box-image.png";
import HomeImage from "@/public/assets/images/home-image.png";
import EllipseSmallIcon from "../UI/EllipseSmallIcon";
import ResumeImage from "@/public/assets/images/resume-image.png";
import Image from "next/legacy/image";
import LocationIcon from "../UI/LocationIcon";
import EditIcon from "../UI/EditIcon";

const RightsideContent = () => {
    return (
        <div className="w-full xl:w-2/4 bg-white pb-8 flex flex-col h-fit">
            <div className="profile-resume-gradient h-[292px] w-full flex items-center justify-center space-y-3 flex-col px-3 text-center relative">
                <span className="absolute top-1/4 left-3 animate-spin">
                    <SquareIcon width={25} height={25} />
                </span>
                <span className="absolute right-4 animate-spin">
                    <SquareSmallIcon />
                </span>
                <Image src={ResumeImage} alt="Resume-image" width="93" height="93" />
                <h3 className="text-white font-bold text-lg leading-29 w-36">Ready for your resume!</h3>
                <button
                    className="rounded-14 px-5.5 hover:translate-1 py-3.5 bg-white text-elephant-500 font-bold text-sm leading-17 drop-shadow-4xl hover:ease-in	duration-700 hover:scale-105"
                    id="resume"
                    name="resume"
                    type="button"
                >
                    Preview Resume
                </button>
            </div>
            <div className="pt-35 xl:px-5 px-34 2xl:px-34 space-y-24 flex flex-col">
                <div className="space-y-4 pb-23 border-dashed border-b">
                    <div className="flex justify-between items-center">
                        <h3 className="text-shark-550 text-base leading-19 mb-3 font-medium">Job Location</h3>
                        <span className="cursor-pointer">
                            <EditIcon />
                        </span>
                    </div>
                    <div className="flex items-center space-x-4.5 text-sm leading-17 text-storm-gray-500">
                        <span>
                            <LocationIconFill />
                        </span>
                        <p className="font-normal text-storm-gray-500 text-sm leading-17">Los Angeles, CA</p>
                    </div>
                    <div className="flex items-baseline space-x-4.5 text-sm leading-17 text-storm-gray-500">
                        <span>
                            <LocationIconFill />
                        </span>
                        <p className="font-normal text-storm-gray-500 text-sm leading-17">
                            8502 Preston Rd. Inglewood, Maine 98380
                        </p>
                    </div>
                    <div className="flex items-baseline space-x-4.5 text-sm leading-17 text-storm-gray-500">
                        <span>
                            <LocationIconFill />
                        </span>
                        <p className="font-normal text-storm-gray-500 text-sm leading-17">
                            4140 Parker Rd. Allentown, New Mexico 31134
                        </p>
                    </div>
                </div>
                <div className="space-y-4 pb-23 border-dashed border-b">
                    <div className="flex justify-between items-center">
                        <h3 className="text-shark-550 text-base leading-19 font-medium mb-3">Job Search Type</h3>
                        <span className="cursor-pointer">
                            <EditIcon />
                        </span>
                    </div>
                    <div className="flex items-center space-x-3.5 text-sm leading-17 text-storm-gray-500">
                        <Image src={JobImage} alt="job-image" width="24" height="24" className="object-cover" />
                        <p className="font-normal text-storm-gray-500 text-sm leading-6">Im still just exploring</p>
                    </div>
                </div>
                <div className="space-y-4 pb-23 border-dashed border-b">
                    <div className="flex justify-between items-center">
                        <h3 className="text-shark-550 text-base leading-19 font-medium mb-3">Travel Nursing Type</h3>
                        <span className="cursor-pointer">
                            <EditIcon />
                        </span>
                    </div>
                    <div className="flex items-center space-x-3.5 text-sm leading-17 text-storm-gray-500">
                        <Image
                            src={LearningImage}
                            alt="learning-image"
                            width="24"
                            height="24"
                            className="object-cover"
                        />
                        <p className="font-normal text-storm-gray-500 text-sm leading-6">Still Learning</p>
                    </div>
                </div>
                <div className="space-y-8">
                    <div className="flex justify-between items-center">
                        <h3 className="text-shark-550 text-base leading-19 font-medium mb-1.5">Preferable Work</h3>
                        <span className="cursor-pointer">
                            <EditIcon />
                        </span>
                    </div>
                    <div className="flex items-center space-x-3.5 text-sm leading-17 text-storm-gray-500">
                        <Image src={HomeImage} alt="home-image" width="24" height="24" className="object-cover" />
                        <p className="font-normal text-storm-gray-500 text-sm leading-6">Home health</p>
                    </div>
                    <div className="flex items-center space-x-3.5 text-sm leading-17 text-storm-gray-500">
                        <Image
                            src={MedicalBoxImage}
                            alt="medical-box"
                            width="24"
                            height="24"
                            className="object-cover"
                        />
                        <p className="font-normal text-storm-gray-500 text-sm leading-6">Ambulatory</p>
                    </div>
                    <div className="flex items-center space-x-3.5 text-sm leading-17 text-storm-gray-500">
                        <EllipseSmallIcon />
                        <p className="font-normal text-storm-gray-500 text-sm leading-6">Medical_Surgical</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RightsideContent;

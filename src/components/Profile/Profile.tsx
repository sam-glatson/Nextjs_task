import React from "react";
import JohnDeoImage from "@/public/assets/images/john-deo-full.png";
import Image from "next/legacy/image";
import LocationIcon from "../UI/LocationIcon";
import EditIcon from "../UI/EditIcon";
import Ellipse from "../UI/EllipseFullIcon";
import EllipseIcon from "../UI/EllipseIcon";
import DotIcon from "../UI/DotIcon";
import ClinicIcon from "../UI/ClinicIcon";
import SummaryIcon from "../UI/SummaryIcon";
import GroupsIcon from "../UI/GroupsIcon";
import NurseImage from "@/public/assets/images/nurse-image.png";
import PDFIcon from "../UI/PdfIcon";
import RightsideContent from "./RightsideContent";

const ProfileMainSection = () => {
    return (
        <section className="w-full min-h-[100px] pb-12">
            <h1 className="font-bold text-2xl leading-29 mb-3 sm:mb-6.5 mt-3 sm:mt-0 text-masala-500">Profile</h1>
            <div className="space-y-5 xl:space-y-0 space-x-0 xl:space-x-7 w-full overflow-y-auto overflow-x-hidden flex flex-col xl:flex-row h-full profile-scrollbar">
                <div className="flex flex-col space-y-5 mb-5 xl:w-3/4 w-full">
                    <div className="bg-white w-full px-4 sm:pl-38 sm:pr-72 pt-6 pb-6.5 flex-col flex shadow-4xl">
                        <div className="flex justify-between flex-col items-center sm:flex-row space-y-5 xl:space-y-0 text-mine-shaft-500">
                            <div className="flex items-center sm:flex-row flex-col space-y-3 sm:space-x-6 sm:space-y-0 text-center sm:text-start">
                                <Image
                                    src={JohnDeoImage}
                                    alt="John-deo"
                                    width="130"
                                    height="130"
                                    className="object-cover"
                                />
                                <div>
                                    <h2 className="font-black text-11xl leading-31">John Deo</h2>
                                    <p className="mt-11 font-semibold text-base">johndeo@pulsedin.com</p>
                                    <div className="flex items-center mt-1.5">
                                        <LocationIcon />
                                        <p className="ml-1.5 mr-2.5 font-normal text-sm leading-17">Los Angeles, CA</p>
                                        <span className="cursor-pointer">
                                            <EditIcon />
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="relative">
                                <Ellipse />
                                <span className="absolute top-0">
                                    <EllipseIcon />
                                </span>
                                <span className="absolute top-12 right-2">
                                    <DotIcon />
                                </span>
                                <div className="absolute top-10 left-10 text-cape-cod-500 text-center space-y-2">
                                    <h6 className="text-sm leading-17 font-normal">Profile</h6>
                                    <p className="font-extrabold text-3xl leading-9">38%</p>
                                </div>
                            </div>
                        </div>
                        <hr className="mt-7 border-athens-gray-500" />
                        <div className="flex flex-col sm:flex-row justify-between pt-6 space-y-4 sm:space-y-0">
                            <div className="flex space-x-2.5">
                                <span className="mt-1">
                                    <ClinicIcon />
                                </span>
                                <div className="space-y-4.5">
                                    <p className="font-normal text-sm leading-25 text-storm-gray-500">
                                        Primary specialty
                                    </p>
                                    <p className="text-sm leading-17 font-normal text-mine-shaft-500">
                                        Medical_Surgical
                                    </p>
                                </div>
                            </div>
                            <div className="flex space-x-2.5">
                                <span className="mt-1">
                                    <ClinicIcon />
                                </span>
                                <div className="space-y-4.5">
                                    <p className="font-normal text-sm leading-25 text-storm-gray-500 flex items-center">
                                        Primary specialty
                                        <span className="ml-3.5 cursor-pointer">
                                            <EditIcon />
                                        </span>
                                    </p>
                                    <p className="text-sm leading-17 font-normal text-mine-shaft-500">
                                        Medical_Surgical ,Medical_Surgical
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white w-full rounded-20 px-4 sm:px-38 pt-6.5 pb-52 flex-col flex space-y-10 sm:space-y-12 shadow-4xl">
                        <div className="flex space-x-4 items-center sm:justify-normal justify-center">
                            <SummaryIcon fill={"1C1C1C"} />
                            <h2 className="font-medium text-base leading-19 text-shark-550">Professional Summary</h2>
                        </div>
                        <div className="flex space-x-4 justify-between">
                            <p className="font-normal text-sm leading-25 text-storm-gray-500 basis-5/6">
                                It is a long established fact that a reader will be distracted by the readable content
                                It is a long established fact that a reader will be distracted.
                            </p>
                            <span className="bg-alabaster-500 hover:bg-alabaster-600 rounded-full w-9 shrink-0 h-9 flex justify-center items-center sm:ml-6.5 cursor-pointer">
                                <EditIcon />
                            </span>
                        </div>
                    </div>
                    <div className="bg-white pt-26 text-shark-550 px-4 sm:px-38 pb-32 rounded-20 shadow-4xl">
                        <div className="flex space-x-4 items-center sm:justify-normal justify-center">
                            <GroupsIcon />
                            <h2 className="font-medium text-base leading-19">Experience Type</h2>
                        </div>
                        <div className="mt-5.5">
                            <div className="bg-alabaster-500 space-x-1 pl-5.5 pr-5 pt-2.5 pb-13 flex items-center mx-auto sm:mx-0 w-[150px] rounded-20">
                                <Image
                                    src={NurseImage}
                                    alt="nurse_image"
                                    width="34"
                                    height="34"
                                    className="object-cover"
                                />
                                <p className="pl-1 font-medium text-base leading-19 cursor-pointer">Newbie</p>
                            </div>
                            <div className="mt-21 grid grid-cols-1 min-[425px]:grid-cols-2 min-[425px]:justify-items-start gap-4 space-y-5 min-[425px]:space-y-0 2xl:grid-cols-4 items-center">
                                <div>
                                    <h3 className="font-medium text-sm leading-17">NCLH Exam Type</h3>
                                    <h6 className="mt-3.5 py-2.5 pr-2.5 font-normal text-sm leading-17 rounded-10 text-storm-gray-500">
                                        NCLH RN
                                    </h6>
                                </div>
                                <div>
                                    <h3 className="font-medium text-sm leading-17">NCLH Completed Date</h3>
                                    <h6 className="mt-3.5 py-2.5 px-2.5 bg-alabaster-500 text-shark-500 rounded-10 font-normal text-xs leading-15">
                                        May 20,2019
                                    </h6>
                                </div>
                                <div className="flex items-center justify-between">
                                    <div className="border py-2.5 px-4 flex items-center space-x-2.5 rounded-10 border-mercury-500">
                                        <PDFIcon />
                                        <p className="text-xs leading-15 font-medium">adobe001.pdf</p>
                                    </div>
                                </div>
                                <div className="w-full flex xl:justify-end justify-start">
                                    <span className="bg-alabaster-500 hover:bg-alabaster-600 rounded-full w-9 h-9 flex justify-center items-center cursor-pointer">
                                        <EditIcon />
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <RightsideContent />
            </div>
        </section>
    );
};

export default ProfileMainSection;

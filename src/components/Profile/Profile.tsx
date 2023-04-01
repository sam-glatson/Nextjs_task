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

const Profile = () => {
    return (
        <>
            {/* <h3>Profile</h3> */}
            <div className="w-full h-full pb-[70px]">
                <h1 className=" font-bold text-2xl leading-[29px] mb-[25px] mt-3 sm:mt-0">Profile</h1>
                <section className="space-y-5 xl:space-y-0 space-x-0 xl:space-x-6 w-full font-Inter overflow-y-auto overflow-x-hidden flex flex-col xl:flex-row h-full">
                    <div className="flex flex-col space-y-5">
                        <div className="bg-white w-full rounded-20 px-4 sm:px-38 pt-19 pb-6.5 flex-col flex">
                            <div className="flex justify-between flex-col items-center xl:flex-row space-y-3 xl:space-y-0">
                                <div className="flex items-center sm:flex-row flex-col space-y-3 sm:space-x-6 sm:space-y-0 text-center sm:text-start">
                                    <Image
                                        src={JohnDeoImage}
                                        alt="John-deo"
                                        width="130"
                                        height="130"
                                        className="object-cover shrink-0"
                                    />
                                    <div>
                                        <h2 className=" font-black text-[26px] leading-[31px]">John Deo</h2>
                                        <p className="mt-[11px] font-semibold text-base">johndeo@pulsedin.com</p>
                                        <div className="flex items-center mt-1.5">
                                            <LocationIcon />
                                            <p className="ml-1.5 mr-2.5 font-normal text-sm leading-[17px]">
                                                Los Angeles, CA
                                            </p>
                                            <EditIcon />
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
                                </div>
                            </div>
                            <hr className="mt-2.5" />
                            <div className="flex flex-col xl:text-left xl:flex-row justify-between pt-6 space-y-4 xl:space-y-0">
                                <div className="flex space-x-2.5 justify-center xl:justify-normal">
                                    <span className="mt-1">
                                        <ClinicIcon />
                                    </span>
                                    <div>
                                        <p className="font-normal text-sm leading-[25px] text-storm-gray-500">
                                            Primary specialty
                                        </p>
                                        <p>Medical_Surgical</p>
                                    </div>
                                </div>
                                <div className="flex space-x-2.5 justify-center xl:justify-normal">
                                    <span className="mt-1">
                                        <ClinicIcon />
                                    </span>
                                    <div>
                                        <p className="font-normal text-sm leading-[25px] text-storm-gray-500 flex items-center">
                                            Primary specialty
                                            <span className="ml-2.5">
                                                <EditIcon />
                                            </span>
                                        </p>
                                        <p>Medical_Surgical, Medical_Surgical</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white w-full rounded-20 px-4 sm:px-38 pt-19 pb-6.5 flex-col flex space-y-10 sm:space-y-12">
                            <div className="flex space-x-4 items-center sm:justify-normal justify-center">
                                <SummaryIcon />
                                <h2 className="font-medium text-base leading-19">Professional Summary</h2>
                            </div>
                            <div className="flex ">
                                <p className="font-normal text-sm leading-[25px] text-storm-gray-500">
                                    It is a long established fact that a reader will be distracted by the readable
                                    content It is a long established fact that a reader will be distracted.
                                </p>
                                <span className="bg-alabaster-500 rounded-full w-9 shrink-0 h-9 flex justify-center items-center sm:ml-[25px]">
                                    <EditIcon />
                                </span>
                            </div>
                        </div>
                        <div className="bg-white pt-[26px] px-4 sm:px-[33px] pb-[32px] rounded-20">
                            <div className="flex space-x-4 items-center sm:justify-normal justify-center">
                                <GroupsIcon />
                                <h2 className="font-medium text-base leading-19">Experience Type</h2>
                            </div>
                            <div className="mt-[22px]">
                                <div className="bg-alabaster-500 space-x-1 pl-[22px] pr-[20px] pt-2.5 pb-[13px] flex items-center mx-auto sm:mx-0 w-[150px] rounded-20">
                                    <Image
                                        src={NurseImage}
                                        alt="nurse_image"
                                        width="34"
                                        height="34"
                                        className="object-cover"
                                    />
                                    <p className="pl-1 font-medium text-base leading-19">Newbie</p>
                                </div>
                                <div className="mt-[21px] grid grid-cols-1 sm:grid-cols-2  sm:justify-items-start gap-4  space-y-5 sm:space-y-0 xl:grid-cols-3 items-center">
                                    <div className="w-100 sm:w-auto  sm:text-left">
                                        <h3 className="font-medium text-sm leading-[17px]">NCLH Exam Type</h3>
                                        <h6 className="mt-3.5 py-2.5 px-2.5 font-normal text-sm leading-[17px] hover:bg-alabaster-500 rounded-10 cursor-pointer text-storm-gray-500">
                                            NCLH RN
                                        </h6>
                                    </div>
                                    <div className="w-100 sm:w-auto  sm:text-left">
                                        <h3 className="font-medium text-sm leading-[17px]">NCLH Completed Date</h3>
                                        <h6 className="mt-3.5 py-2.5 px-2.5 hover:bg-alabaster-500 rounded-10 font-normal text-sm leading-[17px] cursor-pointer text-storm-gray-500">
                                            May 20,2019
                                        </h6>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <div className="border py-2.5 px-4 flex items-center space-x-2.5 rounded-10">
                                            <PDFIcon />
                                            <p>adobe001.pdf</p>
                                        </div>
                                        <div className="w-full flex ml-2.5 ">
                                            <span className="bg-alabaster-500 rounded-full w-9  h-9 flex justify-center items-center ">
                                                <EditIcon />
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full lg:w-3/12 bg-white  px-5 py-7"></div>
                </section>
            </div>
        </>
    );
};

export default Profile;

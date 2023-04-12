import React from "react";
import Image from "next/image";
import BannerImage from "@/public/assets/images/profile-banner-image.png";
import JohnDeoImage from "@/public/assets/images/john-deo-full.png";
import CameraIcon from "@/components/UI/CameraIcon";
import EditIcon from "@/components/UI/EditIcon";
import VerifiedIcon from "@/components/UI/VerifiedIcon";

const Banner = () => {
    return (
        <section>
            <div className="relative">
                <Image
                    src={BannerImage}
                    width="1280"
                    height="527"
                    alt="Profile Background"
                    className="object-cover w-full rounded-21 object-top"
                />
                <div className="flex w-fit cursor-pointer flex-row items-center bg-white space-x-2.5 absolute right-3 bottom-3 sm:bottom-7.5 sm:right-8.5 py-1.5 px-2 sm:px-3 sm:py-3 rounded-lg">
                    <CameraIcon />
                    <p className="sm:block hidden font-normal text-sm leading-17 text-mine-shaft-500">
                        Edit cover photo
                    </p>
                </div>
            </div>
            <div className="relative md:ml-7 flex flex-col md:flex-row items-center sm:space-x-12">
                <div className="p-1 rounded-full -mt-5 md:-mt-6 bg-white w-auto shadow-5xl relative">
                    <Image
                        src={JohnDeoImage}
                        width="224"
                        height="224"
                        className="object-cover md:w-[224px] w-[150px] rounded-full"
                        alt="john deo"
                    />
                    <div className="absolute -right-2.5 top-2/5 md:right-3 md:top-3/4 bg-white p-0.5 rounded-full">
                        <div className="bg-gallery-500 hover:bg-gallery-600 p-3.5 rounded-full cursor-pointer ">
                            <CameraIcon />
                        </div>
                    </div>
                </div>
                <div className="basis-3/5 space-y-4 text-center mt-2.5 md:text-left">
                    <div className="flex items-center space-x-4 justify-center md:justify-normal">
                        <h3 className="font-extrabold text-2xl leading-29 text-mine-shaft-500">John Deo</h3>
                        <VerifiedIcon />
                    </div>
                    <p className="text-waterloo--500 text-lg leading-27">
                        It is a long established fact that a reader will be distracted by the readable content of a page
                        when distracted by the readable content
                    </p>
                    <button
                        id="editprofile"
                        name="editprofile"
                        className="border py-4 px-8 rounded-14 border-picton-blue-500 flex items-center mx-auto md:mx-0 font-semibold text-sm leading-17 text-black"
                    >
                        <span className="mr-4">
                            <EditIcon fill={"#00000"} />
                        </span>
                        Edit Profile
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Banner;

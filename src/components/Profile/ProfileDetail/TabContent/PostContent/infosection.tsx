import BookIcon from "@/components/UI/BookIcon";
import HealthCareIcon from "@/components/UI/HealthCareIcon";
import IdIcon from "@/components/UI/IdIcon";
import PortfolioIcon from "@/components/UI/PortfolioIcon";
import React from "react";

const InfoSection = () => {
    return (
        <div className="w-full lg:max-w-[530px]">
            <div className="bg-white rounded-20 sticky top-48 px-4 sm:px-35 pt-33 pb-7 sm:pb-16.5 space-y-5.5 shadow-4xl">
                <div>
                    <h3 className="text-masala-500 font-bold text-lg leading-7.5">Info</h3>
                    <hr className="mt-6.5" />
                </div>
                <div className="flex space-x-4">
                    <div>
                        <PortfolioIcon fill={"#A8A8A8"} />
                    </div>
                    <p className="text-base font-normal leading-7 text-shark-500">
                        Progressive care float Pool, Registered Nurse,
                        <br />
                        <strong>John Muir Medical Center, Walnut Creek</strong>
                    </p>
                </div>
                <div className="flex space-x-4">
                    <div>
                        <BookIcon fill={"#A8A8A8"} />
                    </div>
                    <p className="text-base font-normal leading-7 text-shark-500">
                        Bachelor of Science, Nursing
                        <strong className="pl-1">University of Walnut Creek</strong>
                    </p>
                </div>
                <div className="flex items-center space-x-4">
                    <div>
                        <HealthCareIcon fill={"#A8A8A8"} />
                    </div>
                    <strong className="text-shark-550 font-extrabold leading-19">Interests</strong>
                </div>
                <div className="space-x-3 inline-block leading-10 break-all">
                    <span className="ml-3 bg-gallery-300 py-2 px-6 rounded-10 whitespace-nowrap text-sm leading-17 text-dune-500 ">
                        Dermatology Nursing
                    </span>
                    <span className="bg-gallery-300 py-2 px-6 rounded-10 whitespace-nowrap text-sm leading-17 text-dune-500 ">
                        Emergency Nursing
                    </span>
                    <span className="bg-gallery-300 py-2 px-6 rounded-10 whitespace-nowrap text-sm leading-17 text-dune-500 ">
                        Infection Control
                    </span>
                    <span className="bg-gallery-300 py-2 px-6 rounded-10 whitespace-nowrap text-sm leading-17 text-dune-500 ">
                        Lactation Consultation
                    </span>
                </div>
                <div className="flex items-center space-x-4">
                    <div>
                        <IdIcon />
                    </div>
                    <p className="text-base font-normal leading-19 text-shark-500">
                        Followed by <strong className="font-extrabold leading-19 text-shark-550">54 Medials</strong>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default InfoSection;

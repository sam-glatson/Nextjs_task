import BookIcon from "@/components/UI/BookIcon";
import HealthCareIcon from "@/components/UI/HealthCareIcon";
import IdIcon from "@/components/UI/IdIcon";
import PortfolioIcon from "@/components/UI/PortfolioIcon";
import React from "react";

const InfoSection = () => {
    return (
        <div className="w-full lg:max-w-[530px]">
            <div className="bg-white rounded-20 sticky top-48 px-4 sm:px-8 pt-33 pb-16.5 space-y-30 shadow-4xl">
                <div>
                    <h3 className="text-masala-500 font-bold text-lg leading-7.5">Info</h3>
                    <hr className="mt-6.5" />
                </div>
                <div className="flex items-baseline space-x-4">
                    <div>
                        <PortfolioIcon />
                    </div>
                    <p className="text-base font-normal leading-19 text-shark-500">
                        Progressive care float Pool, Registered Nurse,
                        <br />
                        <strong>John Muir Medical Center, Walnut Creek</strong>
                    </p>
                </div>
                <div className="flex items-baseline space-x-4">
                    <div>
                        <BookIcon />
                    </div>
                    <p className="text-base font-normal leading-19 text-shark-500">
                        Bachelor of Science, Nursing
                        <strong className="pl-1">University of Walnut Creek</strong>
                    </p>
                </div>
                <div className="flex items-center space-x-4">
                    <div>
                        <HealthCareIcon />
                    </div>
                    <strong className="text-shark-550">Interests</strong>
                </div>
                <div className="space-y-2.5">
                    <div className="flex space-y-2.5 sm:space-y-0 sm:space-x-4 sm:flex-row flex-col">
                        <div className="py-2 px-4  bg-gallery-300 text-sm leading-17 text-dune-500 w-full sm:w-[60%] rounded-[10px]">
                            Dermatology Nursing
                        </div>
                        <div className="py-2 px-4 bg-gallery-300 text-sm leading-17 text-dune-500 w-full sm:w-[60%] rounded-[10px]">
                            Emergency Nursing
                        </div>
                    </div>
                    <div className="flex space-y-2.5 sm:space-y-0 sm:space-x-4 sm:flex-row flex-col">
                        <div className="py-2 px-4 sm:w-[40%] bg-gallery-300 text-sm leading-17 text-dune-500 w-full rounded-[10px]">
                            Infection Control
                        </div>
                        <div className="py-2 px-4 sm:w-[50%] bg-gallery-300 text-sm leading-17 text-dune-500 w-full rounded-[10px]">
                            Lactation Consultation
                        </div>
                    </div>
                </div>
                <div className="flex items-center space-x-4">
                    <div>
                        <IdIcon />
                    </div>
                    <p className="text-base font-normal leading-19 text-shark-500">
                        Followed by <strong>54 Medials</strong>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default InfoSection;

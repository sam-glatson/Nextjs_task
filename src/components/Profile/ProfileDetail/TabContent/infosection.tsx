import BookIcon from "@/components/UI/BookIcon";
import HealthCareIcon from "@/components/UI/HealthCareIcon";
import IdIcon from "@/components/UI/IdIcon";
import PortfolioIcon from "@/components/UI/PortfolioIcon";
import React from "react";

const InfoSection = () => {
    return (
        <div className="w-full lg:max-w-[480px]">
            <div className="bg-white rounded-20 sticky top-[23%] px-4 sm:px-[32px] pt-[33px] pb-[74px] space-y-[30px] shadow-4xl">
                <div>
                    <h3>Info</h3>
                    <hr className="mt-6.5" />
                </div>
                <div className="flex items-baseline space-x-4">
                    <div>
                        <PortfolioIcon />
                    </div>
                    <p>
                        Progressive care float Pool, Registered Nurse,
                        <strong>John Muir Medical Center, Walnut Creek</strong>
                    </p>
                </div>
                <div className="flex items-baseline space-x-4">
                    <div>
                        <BookIcon />
                    </div>
                    <p>
                        Bachelor of Science, Nursing
                        <strong className="pl-1">University of Walnut Creek</strong>
                    </p>
                </div>
                <div className="flex items-center space-x-4">
                    <div>
                        <HealthCareIcon />
                    </div>
                    <strong>Interests</strong>
                </div>
                <div className="space-y-2.5">
                    <div className="flex space-y-2.5 lg:space-y-0 lg:space-x-4 lg:flex-row flex-col">
                        <div className="py-2 px-4  bg-gallery-300 w-full lg:w-[60%] rounded-[10px]">
                            Dermatology Nursing
                        </div>
                        <div className="py-2 px-4 bg-gallery-300 w-full lg:w-[60%] rounded-[10px]">
                            Emergency Nursing
                        </div>
                    </div>
                    <div className="flex space-y-2.5 lg:space-y-0 lg:space-x-4 lg:flex-row flex-col">
                        <div className="py-2 px-4 lg:w-[40%] bg-gallery-300 w-full rounded-[10px]">
                            Infection Control
                        </div>
                        <div className="py-2 px-4 lg:w-[50%] bg-gallery-300 w-full rounded-[10px]">
                            Lactation Consultation
                        </div>
                    </div>
                </div>
                <div className="flex items-center space-x-4">
                    <div>
                        <IdIcon />
                    </div>
                    <p>
                        Followed by <strong>54 Medials</strong>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default InfoSection;

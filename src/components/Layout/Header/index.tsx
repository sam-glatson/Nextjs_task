import LogoIcon from "@/components/UI/LogoIcon";
import React, { useState } from "react";
import Menus from "./Menus";
import NotificationIcon from "@/components/UI/NotificationIcon";
import SearchIcon from "@/components/UI/SearchIcon";
import JohnDeo from "@/public/assets/images/john-deo.png";
import Image from "next/legacy/image";
import DownArrowIcon from "@/components/UI/DownArrowIcon";
import MenuIcon from "@/components/UI/MenuIcon";
import CloseIcon from "@/components/UI/CloseIcon";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const handelOpen = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header className="lg:py-px py-5.5 px-4 lg:px-7.5 shadow-3xl font-Inter fixed top-0 w-full z-20 bg-white">
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between">
                <div className="flex space-y-5 lg:space-y-0 lg:items-center space-x-0 lg:space-x-2 xl:space-x-5 flex-col lg:flex-row w-full lg:w-auto">
                    <LogoIcon />
                    <div className={`relative ${menuOpen ? "block" : "hidden"} lg:block `}>
                        <input
                            type="search"
                            id="search"
                            placeholder="Search plusedin"
                            name="search"
                            className="py-5 lg:pt-5.5 lg:pb-23 pl-12 bg-alabaster-500 pr-0 xl:pr-7 lg:border-0 outline-none rounded-20 w-full  lg:w-auto font-normal text-base leading-19 text-rolling-stone-500"
                        />
                        <span className="absolute top-5 left-5">
                            <SearchIcon />
                        </span>
                    </div>
                </div>
                <Menus menuOpen={menuOpen} />
                <div className="flex items-start lg:items-center space-y-3 lg:space-y-0 space-x-2 2xl:space-x-5 lg:flex-row flex-col w-full lg:w-auto">
                    <div
                        className={`bg-alabaster-500 py-2 lg:pb-2.5 lg:pt-11 pl-5 rounded-20 ${
                            menuOpen ? "block" : "hidden "
                        } lg:flex items-center w-full justify-between flex lg:w-[220px] xl:w-[273px]`}
                    >
                        <div className="flex items-center w-full">
                            <Image src={JohnDeo} alt="JohnDeo" height="43" width="43" className="object-cover" />
                            <h3 className="pl-3.5 font-bold text-15 text-masala-500">John Doe</h3>
                        </div>
                        <span className="pr-5 cursor-pointer">
                            <DownArrowIcon />
                        </span>
                    </div>
                    <div className="flex items-center absolute top-3.5 right-4 lg:relative lg:top-0 lg:right-0">
                        <span className="p-2.5 bg-alabaster-500 rounded-full cursor-pointer mr-2.5 lg:mr-0">
                            <NotificationIcon />
                        </span>
                        <span
                            className="lg:hidden"
                            onClick={() => {
                                handelOpen();
                            }}
                        >
                            {menuOpen ? <CloseIcon /> : <MenuIcon />}
                        </span>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;

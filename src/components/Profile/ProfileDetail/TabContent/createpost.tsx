import React from "react";
import PostList from "./Postlist";
import Image from "next/image";
import JohnDeo from "@/public/assets/images/john-deo.png";
import PhotoIcon from "@/components/UI/PhotoIcon";
import VideoIcon from "@/components/UI/VideoIcon";
import ChartIcon from "@/components/UI/ChartIcon";
import Pollist from "./Pollist";
import Pollistselected from "./Pollistselected";

const CreatePost = () => {
    return (
        <div className="w-full lg:w-3/5 space-y-5 ">
            <div className="bg-white rounded-20  px-6 pt-33 pb-5 shadow-4xl space-y-4">
                <div className="flex space-x-2.5 items-center flex-row">
                    <Image src={JohnDeo} alt="JohnDeo" width="47" height="47" className="shrink-0 object-cover" />
                    <input
                        type="text"
                        placeholder="Write something here..."
                        id="createPost"
                        name="createPost"
                        className="w-full bg-alabaster-500 py-2.5 rounded-14 pl-4.5 text-ellipsis"
                    />
                </div>
                <hr className="mx-2.5" />
                <div className="flex items-center sm:space-y-2 space-x-2 justify-around flex-row">
                    <div className="flex space-x-1 sm:space-x-3.5 items-center cursor-pointer">
                        <div>
                            <PhotoIcon />
                        </div>
                        <p className="font-semibold text-base leading-17 text-rolling-stone-500">Photo</p>
                    </div>
                    <div className="flex space-x-1 sm:space-x-3.5 items-center cursor-pointer">
                        <div>
                            <VideoIcon />
                        </div>
                        <p className="font-semibold text-base leading-17 text-rolling-stone-500">Video</p>
                    </div>
                    <div className="flex space-x-1 sm:space-x-3.5 items-center cursor-pointer">
                        <div>
                            <ChartIcon />
                        </div>
                        <p className="font-semibold text-base leading-17 text-rolling-stone-500">Polls</p>
                    </div>
                </div>
            </div>
            <PostList />
            <Pollist />
            <Pollistselected />
        </div>
    );
};

export default CreatePost;

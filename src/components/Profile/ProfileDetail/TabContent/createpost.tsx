import React from "react";
import PostList from "./Postlist";
import Image from "next/image";
import JohnDeo from "@/public/assets/images/john-deo.png";
import PhotoIcon from "@/components/UI/PhotoIcon";
import VideoIcon from "@/components/UI/VideoIcon";
import ChartIcon from "@/components/UI/ChartIcon";

const CreatePost = () => {
    return (
        <div className=" w-full lg:max-w-screen-sm space-y-5 ">
            <div className="bg-white rounded-20 lg:sticky top-[23%] px-6 pt-[33px] pb-5 shadow-4xl space-y-4">
                <div className="flex sm:space-x-2.5 items-center sm:flex-row flex-col space-y-2.5 sm:space-y-0">
                    <Image src={JohnDeo} alt="JohnDeo" width="47" height="47" className="shrink-0 object-cover" />
                    <input
                        type="text"
                        placeholder="Write something here..."
                        id="createPost"
                        name="createPost"
                        className="w-full bg-alabaster-500 py-[13px] rounded-14 pl-[17px]"
                    />
                </div>
                <hr className="mx-2.5" />
                <div className="flex items-center space-y-2 sm:justify-around sm:flex-row flex-col">
                    <div className="flex space-x-3 items-center">
                        <div>
                            <PhotoIcon />
                        </div>
                        <p>Photo</p>
                    </div>
                    <div className="flex space-x-3 items-center">
                        <div>
                            <VideoIcon />
                        </div>
                        <p>Video</p>
                    </div>
                    <div className="flex space-x-3 items-center">
                        <div>
                            <ChartIcon />
                        </div>
                        <p>Polls</p>
                    </div>
                </div>
            </div>
            <PostList />
            <PostList />
            <PostList />
            <PostList />
            <PostList />
            <PostList />
            <PostList />
        </div>
    );
};

export default CreatePost;

import React from "react";
import PostHeader from "./PostHeader";
import PostFooter from "./PostFooter";
import PostImage from "./PostImage";

const PostList = () => {
    return (
        <div className="bg-white rounded-20 shadow-4xl pt-33 px-2 sm:px-6">
            <div className="space-y-4">
                <PostHeader />
                <p className="text-black-russian-500 font-normal text-base leading-19">
                    It is a long established fact that a reader will be distracted by
                </p>
                <PostImage />
            </div>
            <PostFooter />
        </div>
    );
};

export default PostList;

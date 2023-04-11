import React from "react";
import WomenImage from "@/public/assets/images/woman-image.png";
import CoughImage from "@/public/assets/images/cough-image.png";
import FeverImage from "@/public/assets/images/fever-image.png";
import Image from "next/image";
import PostHeader from "./Postheader";
import PostFooter from "./Postfooter";

const PostList = () => {
    return (
        <div className="bg-white rounded-20 shadow-4xl pt-33">
            <div className="px-2 sm:px-36">
                <div className="space-y-4">
                    <PostHeader />
                    <p>It is a long established fact that a reader will be distracted by</p>
                    <div className="space-y-2">
                        <div className="grid grid-cols-2 gap-2 mt-5">
                            <Image
                                src={WomenImage}
                                alt="woman In Sick"
                                className="object-cover w-full h-full cursor-pointer"
                                height="191"
                            />
                            <Image
                                src={CoughImage}
                                alt="boy In Sick"
                                className="object-cover w-full cursor-pointer"
                                height="191"
                            />
                        </div>
                        <Image src={FeverImage} alt="fever" className="object-cover cursor-pointer" />
                    </div>
                </div>
            </div>
            <PostFooter />
        </div>
    );
};

export default PostList;

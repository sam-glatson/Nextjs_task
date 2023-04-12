import React from "react";
import WomenImage from "@/public/assets/images/woman-image.png";
import CoughImage from "@/public/assets/images/cough-image.png";
import FeverImage from "@/public/assets/images/fever-image.png";
import Image from "next/image";
const PostImage = () => {
    return (
        <div className="space-y-2">
            <div className="grid grid-cols-2 gap-2 mt-5">
                <Image
                    src={WomenImage}
                    alt="woman In Sick"
                    className="object-cover w-full h-full cursor-pointer"
                    height="191"
                />
                <Image src={CoughImage} alt="boy In Sick" className="object-cover w-full cursor-pointer" height="191" />
            </div>
            <Image src={FeverImage} alt="fever" className="object-cover cursor-pointer" />
        </div>
    );
};

export default PostImage;

import React from "react";
import InfoSection from "./infosection";
import CreatePost from "./createpost";

const Post = () => {
    return (
        <section className="container pt-6 pb-4 space-y-5">
            <div className="space-y-3 lg:space-y-0 lg:space-x-8 flex lg:flex-row flex-col ">
                <InfoSection />
                <CreatePost />
            </div>
        </section>
    );
};

export default Post;

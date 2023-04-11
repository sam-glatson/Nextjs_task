import React from "react";
import InfoSection from "./infosection";
import CreatePost from "./createpost";
import { motion } from "framer-motion";

const Post = () => {
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <section className="container pt-6 pb-4 space-y-5" id="Post">
                <div className="space-y-3 lg:space-y-0 lg:space-x-8 flex lg:flex-row flex-col ">
                    <InfoSection />
                    <CreatePost />
                </div>
            </section>
        </motion.div>
    );
};

export default Post;

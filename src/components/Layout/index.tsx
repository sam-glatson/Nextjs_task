import React from "react";
import Header from "./Header";
import Head from "next/head";

const Layout = (props: any) => {
    const { title } = props;
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
        </>
    );
};

export default Layout;

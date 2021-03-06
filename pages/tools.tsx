import React from "react";
import { NextPage } from "next";
import Head from "next/head";

import Footer from "../components/general/Footer";
import Toolbar from "../components/general/Toolbar";
import MetaFi from "../components/section/MetaFi";
import Dataverse from "../components/section/Dataverse";


const TokenPage: NextPage = () => {

    return (
        <>
            <Head>
                <title>MGH - Metaverse Tools</title>
                <meta name="description" content="Governance of metaverse related items, fair valuation and minting of NFT backed tokens and provision of metaverse market data." />
            </Head>
            <Toolbar dark={true} />

            <main className="flex flex-col items-center text-gray-200 pt-28 lg:pt-48 w-full">

                <div className="flex flex-col space-y-44 w-full 2xl:max-w-screen-2xl px-5 sm:px-10">

                    <div className="flex items-center text-center space-x-10 w-full pb-20">
                        <h2 className="text-transparent bg-clip-text bg-gradient-to-b from-blue-500 to-pink-600 font-normal">MGH DAO is building a user focused homebase via development and aggregation for an intuitive and interoperable Open Metaverse Experience.</h2>
                    </div>

                    <Dataverse />
                    <MetaFi />

                </div>
            </main>

            <Footer />


        </>
    )
};


export default TokenPage;

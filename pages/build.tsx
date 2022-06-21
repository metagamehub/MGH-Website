import React from "react";
import { NextPage } from "next";
import Head from "next/head";

import Footer from "../components/general/Footer";
import Toolbar from "../components/general/Toolbar";
import MetaFi from "../components/section/MetaFi";
import Dataverse from "../components/section/Dataverse";
import Button from "../components/elements/Button";
import ToolCard from "../components/section-element/ToolCard";
import Question from "../components/section-element/Question";


const BuildPage: NextPage = () => {

    return (
        <>
            <Head>
                <title>MGH - Metaverse Development</title>
                <meta name="description" content="Governance of metaverse related items, fair valuation and minting of NFT backed tokens and provision of metaverse market data." />
            </Head>
            <Toolbar dark={true} />

            <main className="flex flex-col items-center text-gray-200 pt-28 lg:pt-48 w-full">

                <div className="flex flex-col items-center w-full 2xl:max-w-screen-2xl px-5 sm:px-10">
                    <div className="flex flex-col lg:flex-row justify-between items-center space-x-0 lg:space-x-10 space-y-10 lg:space-y-0 w-full mb-44">

                        <h1 className="text-transparent bg-clip-text bg-gradient-to-b from-blue-500 via-pink-500 to-pink-600 font-normal max-w-full lg:max-w-min text-center lg:text-left">MGH Metaverse Development</h1>

                        <div className="flex flex-col items-center space-y-10 w-full lg:w-1/2">
                            <p className={`text-base lg:text-lg text-center max-w-xl`}>We are creating meaningful experiences for your audience with an individual and lasting appeal. With our experts in the field of Game Design, we are able to deliver true value and create places that people enjoy and are eager to come back to.</p>
                            {/* <div className="flex space-x-5">
                                <Button text="Meet our Devs." link="https://twitter.com/mgh_metadev" />
                                <Button text="Book a meeting" link="https://calendly.com/nicolas-weber-1/30min" />
                            </div> */}

                            <div className="flex items-center space-x-0 sm:space-x-10 flex-grow">
                                <Button text="Meet our Devs." link="https://twitter.com/mgh_metadev" />
                                <a href="https://calendly.com/nicolas-weber-1/30min" target="_blank" className="text-lg sm:text-xl text-pink-600 hover:scale-105 transition ease-linear min-w-max duration-200">Book a meeting</a>
                            </div>

                        </div>

                    </div>

                    <h3 className="font-normal mb-10">What MGH offers</h3>

                    <div className="flex w-full flex-wrap gap-5">
                        <ToolCard title="Experienced Team" text="Our team got experience in coding on The SandBox, Decentraland and Somnium Space. We partner with global brands and artists to deliver you an all-in-one solution." link="/gallery" button="See Gallery" />
                        <ToolCard title="Iterative Work Solution" text="Be an active part of the development by giving us regular feedback (iterative work method). Feel safe and in control by reviewing each step of the project evolution. To create your dream together." link="https://calendly.com/nicolas-weber-1/30min" button="Build with us" />
                        <ToolCard title="DCL Edit" text="Simplifying scene building on Decentraland with the best SDK on the market" link="https://dcl-edit.com" button="Learn more" />
                    </div>

                    <div className="flex flex-col lg:flex-row space-y-20 lg:space-y-0 space-x-0 lg:space-x-28 items-center my-44 w-full">
                        <div className="flex flex-col w-full lg:w-1/2">
                            <h3 className="font-normal mb-5 lg:mb-10 text-pink-600">Why building with MGH?</h3>
                            <p className="text-lg max-w-4xl">We are a group of talented and experienced Game Designers and Developers, Artists, 3D Modellers and UX Designers.<br /> We design and create any kinds of assets like avatars, wearables and furniture for current Metaverses like Decentraland and The Sandbox.</p>
                        </div>

                        <div className="flex flex-col space-y-6 w-full lg:w-1/2">
                            <div className="">
                                <p className="text-2xl md:text-4xl text-blue-500 w-full pb-2">Play2Earn Implementations</p>
                                <p className='font-normal text-lg w-full max-w-2xl'>Metaverse game development, Play2Earn implementations, Engagement Models for communities</p>
                            </div>
                            <hr className="border border-white/30 w-5/6" />
                            <div className="">
                                <p className="text-2xl md:text-4xl text-blue-500 w-full pb-2">Possibility to build in any Metaverse</p>
                                <p className='font-normal text-lg w-full max-w-2xl'>Metaverse design in various metaverses such as Decentraland, The Sandbox and Somnium Space. Development of tools for Metaverses like an editor for Decentraland (dcl-edit).</p>
                            </div>
                            <hr className="border border-white/30 w-5/6" />
                            <div className="">
                                <p className="text-2xl md:text-4xl text-blue-500 w-full pb-2">Modelling of unique assets for custom experiences</p>
                                <p className='font-normal text-lg w-full max-w-2xl'>We have expert modellers working with state-of-the art tools like Blender and Fusion 360 that are able to create 3D models for Metaverses like Decentraland and Somnium Space.</p>
                            </div>
                            <hr className="border border-white/30 w-5/6" />
                            <div className="">
                                <p className="text-2xl md:text-4xl text-blue-500 w-full pb-2">Modern 3D engines</p>
                                <p className='font-normal text-lg w-full max-w-2xl'>We have Unity 3D developers and programmers with years of experience in App development and game development. We can leverage these skills for any Metaverse project that allows for coding custom complex logic like Decentraland.</p>
                            </div>
                        </div>
                    </div>

                    <h3 className="font-normal mb-10">Packages</h3>

                    <div className="flex flex-col lg:flex-row w-full gap-10 pb-10 items-center justify-center">
                        <div className="flex flex-col items-center text-center w-full lg:w-1/3">
                            <p className="text-5xl text-pink-600 pb-2">Starter</p>
                            <p className="text-gray-400">Basic experience on small land</p>
                            <p className="text-4xl text-gray-200 py-4">$10k - 40k</p>
                            <p className="text-gray-400">
                                appealing landscape<br />
                                customer contact points<br />
                                basic asset collection<br />
                                basic customer engagement model<br />
                                minimal programming
                            </p>
                        </div>
                        <div className="flex flex-col items-center text-center w-full lg:w-1/3">
                            <p className="text-5xl text-pink-600 pb-2">Corporate</p>
                            <p className="text-gray-400">Richer experience on medium land</p>
                            <p className="text-4xl text-gray-200 py-4">$20k- 125k</p>
                            <p className="text-gray-400">
                                larger appealing landscape<br />
                                several customer contact points<br />
                                extended asset collection<br />
                                refined customer engagement model<br />
                                programming of basic custom behaviours
                            </p>
                        </div>
                        <div className="flex flex-col items-center text-center w-full lg:w-1/3">
                            <p className="text-5xl text-pink-600 pb-2">World</p>
                            <p className="text-gray-400">World-like experience on large land</p>
                            <p className="text-4xl text-gray-200 py-4">$Custom</p>
                            <p className="text-gray-400">
                                very large appealing landscape<br />
                                customer contact points as desired<br />
                                big asset collection<br />
                                optimal customer engagement model<br />
                                programming of advanced custom behaviours
                            </p>
                        </div>

                    </div>

                    <Button text="Book a Package" link="https://calendly.com/nicolas-weber-1/30min" />

                </div>
            </main>

            <Footer />


        </>
    )
};


export default BuildPage;

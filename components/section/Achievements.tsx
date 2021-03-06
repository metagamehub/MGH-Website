import { AiOutlineTrophy } from "react-icons/ai"
import { FaUniversity } from "react-icons/fa"
import {IoShareSocialOutline} from "react-icons/io5"

const Achievements = () => {

    return (

        <>
            <div className="w-full py-10 px-5 sm:px-10 flex flex-col items-center justify-center">

                <h1 className={`text-pink- font-normal`}>Achievements</h1>

                <div className="relative mt-10 w-full grid gap-2 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 justify-items-center items-center max-w-max">
                    <div className="flex flex-col items-center justify-evenly text-center space-y-3 bg-grey-darkest h-40 w-56 p-3 hover:scale-105 transition duration-200 ease-linear border-white border border-opacity-5">
                        <p className="text-3xl text-pink-500 font-medium ">30+</p>
                        <p className="text-gray-400">Core contributors</p>
                    </div>

                    <div className="flex flex-col items-center justify-evenly text-center space-y-3 bg-grey-darkest h-40 w-56 p-3 hover:scale-105 transition duration-200 ease-linear border-white border border-opacity-5">
                        <p className="text-3xl text-pink-500 font-medium">$1.6 Mio</p>
                        <p className="text-gray-400">Decentralized community fundraise</p>
                    </div>

                    <div className="flex flex-col items-center justify-evenly text-center space-y-3 bg-grey-darkest h-40 w-56 p-3 hover:scale-105 transition duration-200 ease-linear border-white border border-opacity-5">
                        <p className="text-3xl text-pink-500 font-medium">30,000+</p>
                        <p className="text-gray-400">Average monthly requests on valuation tool</p>
                    </div>

                    <div className="flex flex-col items-center justify-evenly text-center space-y-3 bg-grey-darkest h-40 w-56 p-3 hover:scale-105 transition duration-200 ease-linear border-white border border-opacity-5">
                        <div className="flex space-x-2">
                            <img src="/images/Logos/Cryptos/webp/SAND.webp" className="w-auto h-7" />
                            <img src="/images/Logos/Cryptos/webp/MANA.webp" className="w-auto h-7" />
                            <img src="/images/Logos/webp/xone-logo.webp" className="w-auto h-7" />
                            <img src="/images/Logos/webp/somnium-space-logo.webp" className="w-auto h-7" />
                        </div>
                        <p className="text-gray-400">Building & Investing across various Metaverses</p>
                    </div>

                    <div className="flex flex-col items-center justify-evenly text-center space-y-3 bg-grey-darkest h-40 w-56 p-3 hover:scale-105 transition duration-200 ease-linear border-white border border-opacity-5">
                        <img src="/images/Logos/Cryptos/webp/MANA.webp" className="w-auto h-12" />
                        <p className="text-gray-400">DCL-Edit launch with Decentraland Team</p>
                    </div>

                    <div className="flex flex-col items-center justify-evenly text-center space-y-3 bg-grey-darkest h-40 w-56 p-3 hover:scale-105 transition duration-200 ease-linear border-white border border-opacity-5">
                        <AiOutlineTrophy className="text-blue-400 text-5xl " />
                        <p className="text-gray-400">Grants from Decentraland and Ocean Protocol</p>
                    </div>

                    <div className="flex flex-col items-center justify-evenly text-center space-y-3 bg-grey-darkest h-40 w-56 p-3 hover:scale-105 transition duration-200 ease-linear border-white border border-opacity-5">
                        <img src="/images/Logos/Cryptos/webp/MATIC.webp" className="w-auto h-12" />
                        <p className="text-gray-400">Polygon Migration (ca. 1,000 members already)</p>
                    </div>

                    <div className="flex flex-col items-center justify-evenly text-center space-y-3 bg-grey-darkest h-40 w-56 p-3 hover:scale-105 transition duration-200 ease-linear border-white border border-opacity-5">
                        <IoShareSocialOutline className="text-blue-400 text-5xl " />
                        <p className="text-gray-400">10,000+ organic members in groups across channels</p>
                    </div>

                    <div className="flex flex-col items-center justify-evenly text-center space-y-3 bg-grey-darkest h-40 w-56 p-3 hover:scale-105 transition duration-200 ease-linear border-white border border-opacity-5">
                        <FaUniversity className="text-blue-400 text-5xl " />
                        <p className="text-gray-400 text-xs">University collaborations and internships with Aachen, Frankfurt, Cologne, Buenos Aires, Bogota and South Korea</p>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Achievements

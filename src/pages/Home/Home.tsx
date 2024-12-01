import Navbar from "../../components/Navbar/Navbar.tsx";
import sun from "../../assets/svgs/asset-4.svg";
import mountain1 from "../../assets/svgs/asset-6.svg";
import mountain2 from "../../assets/svgs/asset-7.svg";
import {AnimatePresence, motion} from "framer-motion";
import {useState} from "react";
import DummyPreviews from "../../components/DummyPreviews/DummyPreviews.tsx";
import Dashboard from "../../components/Dashboard/Dashboard.tsx";

const Home = () => {
    const [showDashboard, setShowDashboard] = useState<boolean>(false)

    return (
        <div
            className="bg-primary-1 flex flex-col min-h-svh w-svw">
            <div className="absolute w-full h-full bg-black-silk-fabric bg-cover bg-no-repeat opacity-5 z-10"></div>
            <div className="absolute -translate-y-[50%] left-[30%] md:left-[35%] lg:left-[50%] z-30">
                <motion.img animate={{rotate: 360}} transition={{duration: 10, repeat: Infinity, ease: "linear"}}
                            src={sun} alt="sun-svg" className="w-[13.75rem] md:w-[21.25rem] lg:w-[23.75rem]"/>
            </div>
            <div className="absolute bottom-0 right-0 z-20 translate-x-[40%]">
                <img src={mountain1} alt="mountain1-svg" className="w-[81.25rem]"/>
            </div>
            <div className="absolute bottom-0 right-0 z-20">
                <img src={mountain2} alt="mountain1-svg" className="w-[40.625rem]"/>
            </div>
            <AnimatePresence>
                {showDashboard && <Dashboard setShowDashboard={setShowDashboard}/>}
            </AnimatePresence>
            <div className="absolute top-[50%] md:top-[30%] left-[60%] md:left-[40%] z-20">
                <DummyPreviews/>
            </div>
            <div className="relative flex flex-col flex-grow h-auto mx-md md:mx-max z-20">
                <Navbar setShowDashboard={setShowDashboard}/>
                <motion.div
                    initial={{x: 0, y: 60}}
                    animate={{x: showDashboard ? -70 : 0, y: 0}}
                    transition={{duration: 0.5, ease: "easeInOut"}}
                    className="flex mb-md flex-grow items-center h-auto">
                    <div className="flex flex-col lg:w-1/2 gap-sm">
                        <h1 className="text-h2 md:text-h1 font-bold italic text-neutral-1 text-shadow-0x-10y-50">
                            PLUG & PLAY
                        </h1>
                        <p className="text-body-md text-secondary-5">Enjoy streams, movies, and more
                            together with your friends.</p>
                        <button
                            className="w-fit px-xl font-medium py-md rounded-md bg-secondary-2 text-neutral-1 text-body-md border-2 border-neutral-1">
                            Get Started Now
                        </button>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Home;
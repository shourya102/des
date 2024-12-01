import logo from "../../assets/svgs/asset-1.svg";
import moon from "../../assets/svgs/asset-5.svg";
import React from "react";
import {motion} from "framer-motion";

const Navbar = ({setShowDashboard}: { setShowDashboard: React.Dispatch<React.SetStateAction<boolean>> }) => {
    return (
        <motion.div
            initial={{y: -20, opacity: 0.2}}
            animate={{y: 0, opacity: 1}}
            transition={{duration: 0.5, ease: "easeInOut"}}
            className="flex justify-between py-md">
            <img src={logo} alt="logo" className="w-[6.875rem] md:w-[6.875rem]"/>
            <motion.button whileHover={{x: [0, -10, 10, -10, 10, 0]}}
                           transition={{duration: 1, ease: "easeInOut"}}
                           onClick={() => setShowDashboard(prev => !prev)}>
                <img src={moon} alt="menu-button-svg" className="w-[4rem] md:w-[4rem] drop-shadow-20x-10y z-40"/>
            </motion.button>
        </motion.div>
    );
};

export default Navbar;
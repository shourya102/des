import {motion, Variants} from "framer-motion";
import {Link} from "react-router-dom";
import {CgClose} from "react-icons/cg";
import React, {useEffect, useState} from "react";

const Dashboard = ({setShowDashboard}: { setShowDashboard: React.Dispatch<React.SetStateAction<boolean>> }) => {
    interface NavigationLinks {
        label: string,
        href: string,
    }
    const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth <= 768);

    const navigationLinks: NavigationLinks[] = [
        {label: "Home", href: "/"},
        {label: "Search", href: "/search"},
        {label: "Host", href: "/"},
        {label: "Profile", href: "/"},
        {label: "About Me", href: "/"},
        {label: "GitHub", href: "/"},
    ]

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 768) {
                setIsMobile(true);
            }
            else setIsMobile(false);
        }
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
        }, [window.innerWidth]
    );

    const mobileVariants: Variants = {
        hidden: {width: "0"},
        visible: {width: "100%"}
    }

    const desktopVariants: Variants = {
        hidden: {width: "0"},
        visible: {width: "40%"}
    }

    return (
        <motion.div
            initial={{opacity: 0, backdropFilter: "blur(0px)"}}
            animate={{opacity: 1, backdropFilter: "blur(4px)"}}
            transition={{
                opacity: {
                    duration: 0.5, ease: "linear"
                }, backdropFilter: {
                    duration: 0.5, ease: "easeOut"
                }
            }}
            className="fixed w-full h-full z-30 bg-black bg-opacity-50">
            <motion.div initial="hidden"
                        animate="visible"
                        variants={isMobile ? mobileVariants : desktopVariants}
                        transition={{duration: 0.5, ease: "linear"}}
                        exit={{width: 0}}
                        className="w-full md:w-3/5 lg:w-1/2 flex flex-col p-4 gap-4 absolute right-0 top-0 h-full bg-secondary-2">
                <div className="flex justify-between items-center">
                    <motion.button
                        onClick={() => setShowDashboard(prev => !prev)}
                        whileHover={{backgroundColor: "var(--color-primary-3)"}}
                        className="w-12 h-12 rounded-full bg-primary-2 flex items-center justify-center">
                        <span className="text-secondary-3"><CgClose size={30}/></span>
                    </motion.button>
                    <h1 className="font-poppins font-bold text-h4 text-primary-1">Menu</h1>
                </div>
                <div className="flex flex-col w-full">
                    {navigationLinks.map((item, index) => {
                        return (
                            <motion.button whileHover={{color: "var(--color-primary-3)"}} key={index} className="font-poppins inline font-bold text-h4 text-primary-1 text-end"><Link
                                to={item.href}>{item.label}</Link></motion.button>
                        )
                    })}
                </div>
            </motion.div>
        </motion.div>
    );
};

export default Dashboard;
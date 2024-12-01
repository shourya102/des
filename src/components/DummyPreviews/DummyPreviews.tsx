import dummyPreview from "../../assets/svgs/screen.svg";
import dummyPreview2 from "../../assets/svgs/screen2.svg";
import dummyPreview3 from "../../assets/svgs/screen3.svg";
import {motion} from "framer-motion";

const DummyPreviews = () => {
    return (
        <>
            <img src={dummyPreview2} alt="dummy-previews-svg"
                 className="absolute w-full drop-shadow-0x-20y-20"></img>
            <img src={dummyPreview3} alt="dummy-previews-svg"
                 className="absolute translate-x-[70%] -translate-y-[50%] w-[15rem] drop-shadow-0x-20y-20"></img>
            <motion.img src={dummyPreview} alt="dummy-previews-svg"
                        initial={{x: "30%", y: "50%"}}
                        animate={{rotate: [0, 20, -15, 0, 10, -5, 5, 0]}}
                        transition={{duration: 7, repeat: Infinity, ease: "linear"}}
                        className="translate-x-[40%] translate-y-[50%] w-[30rem] drop-shadow-0x-20y-20 z-40"/>
        </>
    );
};

export default DummyPreviews;
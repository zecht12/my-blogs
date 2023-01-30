import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";

const variants = {
    in: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
        duration: 0.5,
        delay: 0.3
    }
    },
    out: {
    opacity: 0,
    scale: 1,
    y: 0,
    transition: {
        duration: 0.5
    }
    }
};
const Transition2 = ({ children }) => {
    const { asPath } = useRouter();

    return (
    <div className="effect">
        <AnimatePresence initial={false} exitBeforeEnter>
        <motion.div
            key={asPath}
            variants={variants}
            animate="in"
            initial="out"
            exit="out"
        >
            {children}
        </motion.div>
        </AnimatePresence>
    </div>
    );
};

export default Transition2;
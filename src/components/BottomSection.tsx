import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import Button from "./Common/Button";

declare var fbq: any;

const BottomSection = () => {

    const { scrollY } = useScroll();
    const yOffset = useTransform(scrollY, [0, 1], [200, 0]);
    const scaleOffset = useTransform(scrollY, [0.8, 1], [0.8, 1]);
    const ySpring = useSpring(yOffset, { stiffness: 50, damping: 7 });
    const scaleSpring = useSpring(scaleOffset, { stiffness: 50, damping: 7 });

    return (
        <motion.div
            style={{ y: ySpring, scale: scaleSpring }}
            initial={{ y: 200 }}
            className="max-w-[600px] mq786:max-w-full pb-5 mb-5 rounded-lg shadow-[0_0_.55rem_rgba(0,0,0,0.3)] mq786:-mb-10 mq786:pb-14 mq786:shadow-[0_-0.25rem_0.25rem_rgba(0,0,0,0.1)] bg-[hsl(0,0%,97%)]  font-apfel-grotezk-base font-bold px-6 pt-5  flex justify-between items-center fixed bottom-0 w-full  z-50"
        >
            <div>
                <div className="text-xl ">Register Now For</div>
                <div className="text-11xl flex items-center gap-2">
                    ₹99
                    <span className="line-through text-mid">₹999</span>
                </div>
            </div>
            <Button
                onClick={() => {
                    fbq('track', 'AddToCart');
                    window.open('https://pages.razorpay.com/webinar-sheryians', '_blank');
                }}
                className=" rounded-lg px-7 h-14 text-5xl shadow-none"
            >
                Enroll Now
            </Button>
        </motion.div>
    );
};

export default BottomSection;
import stripe from "../assets/stripe.svg";
import upwork from "../assets/upwork.svg";
import square from "../assets/square.svg";
import amazon from "../assets/amazon.svg";
import google from "../assets/google.svg";
import linear from "../assets/linear.svg";
import { motion } from "framer-motion";

const logos = [stripe, upwork, square, amazon, google, linear];

const marqueeVariants = {
  animate: {
    x: ["0%", "-50%"],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 30, // Adjust speed as needed
        ease: "linear",
      },
    },
  },
};

const SocialProof = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{
        opacity: 1,
        transition: {
          duration: 0.6,
          delay: 0.2,
          ease: [0.44, 0, 0.56, 1],
        },
      }}
      viewport={{ amount: "some", once: true }}
      className="flex w-full flex-col items-center justify-center gap-12 py-16"
    >
      <p className="text-[18px] leading-[26px] tracking-[-0.216px] text-[#7920f6]">
        Trusted by the best
      </p>
      <div className="relative overflow-hidden w-[80%] max-[420px]:w-[90%]">
        <motion.div
          className="flex gap-12 max-[768px]:gap-2 w-max flex-nowrap"
          variants={marqueeVariants}
          animate="animate"
        >
          {[...logos, ...logos].map((logo, index) => (
            <img key={index} src={logo} alt="logo" className="h-8 w-auto max-[420px]:h-7" />
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default SocialProof;

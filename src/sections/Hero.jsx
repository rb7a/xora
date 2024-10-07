import React from 'react';
import { Element, Link as LinkScroll } from "react-scroll";
import { motion } from 'framer-motion';
import Button from "../components/Button.jsx";

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  const imageVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut", delay: 0.5 }
    }
  };

  return (
    <section className="relative pt-48 pb-40 max-lg:pt-52 max-lg:pb-36 max-md:pt-36 max-md:pb-32">
      <Element name="hero">
        <motion.div
          className="container"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="relative z-2 max-w-512 max-lg:max-w-388">
            <motion.div variants={itemVariants} className="caption small-2 uppercase text-p3">
              Video Editing
            </motion.div>
            <motion.h1 variants={itemVariants} className="mb-6 h1 text-p4 uppercase max-lg:mb-7 max-lg:h2 max-md:mb-4 max-md:text-5xl max-md:leading-12">
              Amazingly simple
            </motion.h1>
            <motion.p variants={itemVariants} className="max-w-440 mb-14 body-1 max-md:mb-10">
              We designed XORA AI Video Editor to be an easy to use, quick to
              learn, and surprisingly powerful.
            </motion.p>
            <motion.div variants={itemVariants}>
              <LinkScroll to="features" offset={-100} spy smooth>
                <Button icon="/images/zap.svg">Try it now</Button>
              </LinkScroll>
            </motion.div>
          </div>

          <motion.div 
            className="absolute -top-32 left-[calc(50%-340px)] w-[1230px] pointer-events-none hero-img_res"
            variants={imageVariants}
          >
            <img
              src="/images/hero.png"
              className="size-1230 max-lg:h-auto"
              alt="hero"
            />
          </motion.div>
        </motion.div>
      </Element>
    </section>
  );
};

export default Hero;
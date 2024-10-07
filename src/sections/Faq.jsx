import React from "react";
import { Element } from "react-scroll";
import { motion } from 'framer-motion';
import { faq } from "../constants/index.jsx";
import FaqItem from "../components/FaqItem.jsx";

const Faq = () => {
  const halfLength = Math.floor(faq.length / 2);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <section>
      <Element name="faq" className="relative">
        <motion.div 
          className="container relative z-2 py-28"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div variants={itemVariants}>
            <motion.h3 
              className="h3 max-md:h5 max-w-640 max-lg:max-w-md mb-7 text-p4"
              variants={itemVariants}
            >
              Curiosity didn't kill the cat, it gave it answers.
            </motion.h3>
            <motion.p 
              className="body-1 max-lg:max-w-sm"
              variants={itemVariants}
            >
              You've got questions, we've got answers.
            </motion.p>
          </motion.div>

          <motion.div 
            className="faq-line_after w-0.5 h-full absolute left-[calc(50%-1px)] top-0 -z-1 bg-s2"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 1, ease: "easeInOut" }}
          />
        </motion.div>

        <motion.div 
          className="faq-glow_before relative z-2 border-2 border-s2 bg-s1"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="container flex gap-10 max-lg:block">
            <motion.div 
              className="rounded-half absolute -top-10 left-[calc(50%-40px)] z-4 flex size-20 items-center justify-center border-2 border-s2 bg-s1"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <img src="/images/faq-logo.svg" alt="logo" className="size-1/2" />
            </motion.div>

            <motion.div 
              className="relative flex-1 pt-24"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              {faq.slice(0, halfLength).map((item, index) => (
                <motion.div key={item.id} variants={itemVariants}>
                  <FaqItem item={item} index={index} />
                </motion.div>
              ))}
            </motion.div>

            <motion.div 
              className="relative flex-1 lg:pt-24"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              {faq.slice(halfLength).map((item, index) => (
                <motion.div key={item.id} variants={itemVariants}>
                  <FaqItem item={item} index={halfLength + index} />
                </motion.div>
              ))}
            </motion.div>
          </div>

          <motion.div 
            className="faq-lin_after absolute left-[calc(50%-1px)] top-0 -z-1 h-full w-0.5 bg-s2 max-lg:hidden"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 1, ease: "easeInOut" }}
          />
        </motion.div>
      </Element>
    </section>
  );
};

export default Faq;


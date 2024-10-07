import React, { useState } from "react";
import { motion, AnimatePresence } from 'framer-motion';
import clsx from "clsx";

const FaqItem = ({ item, index }) => {
  const [activeId, setActiveId] = useState(null);

  const active = activeId === item.id;

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  const backgroundVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.3, ease: "easeOut" }
    }
  };

  const contentVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: { 
      opacity: 1, 
      height: "auto",
      transition: { duration: 0.3, ease: "easeOut" }
    }
  };

  return (
    <motion.div 
      className="relative z-2 mb-16"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div
        className="group relative flex cursor-pointer items-center justify-between gap-10 px-7"
        onClick={() => {
          setActiveId(activeId === item.id ? null : item.id);
        }}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <div className="flex-1">
          <motion.div 
            className="small-compact mb-1.5 text-p3 max-lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            {index < 10 ? "0" : ""}
            {index}
          </motion.div>
          <motion.div
            className={clsx(
              "h6 text-p4 transition-colors duration-500 max-md:flex max-md:min-h-20 max-md:items-center",
              active && "max-lg:text-p1",
            )}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 + 0.1 }}
          >
            {item.question}
          </motion.div>
        </div>

        <motion.div
          className={clsx(
            "faq-icon relative flex size-12 items-center justify-center rounded-full border-2 border-s2 shadow-400 transition-all duration-500 group-hover:border-s4",
            active && "before:bg-p1 after:rotate-0 after:bg-p1",
          )}
          animate={{ rotate: active ? 45 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="g4 size-11/12 rounded-full shadow-300" />
        </motion.div>
      </motion.div>

      <AnimatePresence>
        {active && (
          <motion.div
            variants={contentVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <div className="body-3 px-7 py-3.5">{item.answer}</div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {active && (
          <motion.div
            className={clsx(
              "g5 -bottom-7 -top-7 left-0 right-0 -z-1 rounded-3xl absolute",
            )}
            variants={backgroundVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <div className="g4 absolute inset-0.5 -z-1 rounded-3xl" />
            <motion.div 
              className="absolute left-8 top-0 h-0.5 bg-p1"
              initial={{ width: 0 }}
              animate={{ width: "160px" }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default FaqItem;
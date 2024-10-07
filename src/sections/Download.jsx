import { Element } from "react-scroll";
import { links, logos } from "../constants/index.jsx";
import { Marker } from "../components/Marker.jsx";
import { motion } from "framer-motion";

// Animation variants
const textVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

const imgVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.8, delay: 0.2 } },
};

const listVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.2, delayChildren: 0.4 },
  },
};

const listItemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

const Download = () => {
  return (
    <section>
      <Element
        name="download"
        className="g7 relative pb-32 pt-24 max-lg:pb-24 max-md:py-16"
      >
        <div className="container">
          <div className="flex items-center">
            <motion.div
              className="relative mr-6 flex-540 max-xl:flex-280 max-lg:flex256 max-md:flex-100"
              variants={textVariants}
              initial="hidden"
              animate="visible"
            >
              <div className="mb-10">
                <img
                  src="/images/xora.svg"
                  width={160}
                  height={55}
                  alt="xora"
                />
              </div>

              <p className="body-1 mb-10 max-w-md">
                Try it now for free on iOS, Android, PC, Web - whatever your
                flavor, we've got you covered.
              </p>

              <motion.ul
                className="flex flex-wrap items-center gap-6"
                variants={listVariants}
                initial="hidden"
                animate="visible"
              >
                {links.map(({ id, url, icon }) => (
                  <motion.li
                    key={id}
                    className="download_tech-link download_tech-link_last-before download_tech-link_last-after"
                    variants={listItemVariants}
                  >
                    <a
                      href={url}
                      className="size-22 download_tech-icon_before relative flex items-center justify-center rounded-half border-2 border-s3 bg-s1 transition-borderColor duration-500"
                    >
                      <span className="absolute -top-2 rotate-90">
                        <Marker />
                      </span>
                      <img
                        src={"/images/lines.svg"}
                        alt="lines"
                        className="absolute size-13/20 object-contain"
                      />
                      <span className="download_tech-icon">{icon}</span>
                    </a>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>

            <motion.div
              className="mb-10 max-md:hidden"
              variants={imgVariants}
              initial="hidden"
              animate="visible"
            >
              <div className="download_preview-before download_preview-after rounded-40 relative w-[955px] border-2 border-s5 p-6">
                <div className="relative rounded-3xl bg-s1 px-6 pb-6 pt-14">
                  <span className="download_preview-dot left-6 bg-p2" />
                  <span className="download_preview-dot left-11 bg-s3" />
                  <span className="download_preview-dot left-16 bg-p1/15" />

                  <img
                    src="/images/screen.jpg"
                    width={855}
                    height={655}
                    alt="screen"
                    className="rounded-xl"
                  />
                </div>
              </div>
            </motion.div>
          </div>

          <motion.ul
            className="mt-24 flex justify-center max-lg:hidden"
            variants={listVariants}
            initial="hidden"
            animate="visible"
          >
            {logos.map(({ id, url, width, height, title }) => (
              <motion.li key={id} className="mx-10" variants={listItemVariants}>
                <img src={url} width={width} height={height} alt={title} />
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </Element>
    </section>
  );
};

export default Download;

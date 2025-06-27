import { motion, useAnimation } from "motion/react";
import { useEffect, useRef } from "react";

const DesignDeclareUK = () => {
  const controlsPath1 = useAnimation();
  const controlsPath2 = useAnimation();
  const controlsSvgContainer = useAnimation();
  const svgContainerRef = useRef<HTMLDivElement>(null);

  const controlsWords = useAnimation();
  const controlsParagraph = useAnimation();

  useEffect(() => {
    const animate = async () => {
      const naturalHeight =
        svgContainerRef.current?.getBoundingClientRect().height || 59;

      await controlsSvgContainer.start({
        height: naturalHeight,
        transition: { duration: 0 },
      });

      await controlsPath1.start({ opacity: 1, transition: { duration: 0.5 } });
      await new Promise((resolve) => setTimeout(resolve, 500));

      await controlsPath2.start({ opacity: 1, transition: { duration: 0.5 } });
      await new Promise((resolve) => setTimeout(resolve, 500));

      await Promise.all([
        controlsPath1.start({ opacity: 0, transition: { duration: 0.5 } }),
        controlsPath2.start({ opacity: 0, transition: { duration: 0.5 } }),
        controlsSvgContainer.start({
          height: 0,
          transition: { duration: 0.5 },
        }),
      ]);
      await controlsWords.start("visible");
      await controlsParagraph.start({
        opacity: 1,
        translateY: 0,
        transition: { duration: 0.5 },
      });
    };
    animate();
  }, [
    controlsPath1,
    controlsPath2,
    controlsSvgContainer,
    controlsWords,
    controlsParagraph,
  ]);

  const wordVariants = {
    hidden: { clipPath: "inset(100% 0 0 0)" },
    visible: { clipPath: "inset(0% 0 0 0)", transition: { duration: 0.5 } },
  };

  return (
    <section className="px-4 py-8 md:px-6 flex min-h-screen overflow-y-hidden">
      <div className="container flex flex-col justify-between">
        <div className="grid grid-cols-12 gap-y-16 md:gap-x-8">
          <div className="col-span-12 lg:col-span-7">
            <h1 className="font-display relative">
              <motion.div
                ref={svgContainerRef}
                className="absolute left-0 top-0 z-[1] overflow-hidden"
                initial={{ height: "auto" }}
                animate={controlsSvgContainer}
                style={{ width: "auto" }}
              >
                <svg
                  width="100%"
                  viewBox="0 0 44 59"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  className="pl-0.5 sm:pl-1 h-auto w-14 sm:w-24 xl:w-32"
                  role="img"
                  aria-label="Design Declares!"
                  style={{ display: "block" }}
                >
                  <motion.path
                    initial={{ opacity: 0 }}
                    animate={controlsPath1}
                    d="M15.052,59l-15.052,0l-0,-57.705l15.052,0c8.096,0 11.705,3.925 11.705,12.722l0,31.809c0,9.112 -3.609,13.174 -11.705,13.174Zm-3.574,-10.75l1.293,-0c1.61,-0 2.284,-0.453 2.284,-3.26l0,-30.29c0,-2.874 -0.895,-3.107 -1.978,-3.107l-1.599,-0l0,36.657Z"
                    display="block"
                  />
                  <motion.path
                    initial={{ opacity: 0 }}
                    animate={controlsPath2}
                    d="M43.953,6.9l-6.44,36.806l-6.384,-36.813c-0.285,-3.719 2.668,-6.893 6.412,-6.893c3.748,0 6.704,3.181 6.412,6.904l0,-0.004Zm0.047,44.959c0,3.553 -2.911,6.433 -6.501,6.433c-3.59,-0 -6.501,-2.88 -6.501,-6.433c-0,-3.553 2.911,-6.434 6.501,-6.434c3.59,0 6.501,2.881 6.501,6.434Z"
                    display="block"
                  />
                </svg>
              </motion.div>
              <motion.span
                className="flex flex-col"
                initial="hidden"
                animate={controlsWords}
                variants={{
                  hidden: { opacity: 1 },
                  visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
                }}
              >
                {["Design", "Declares", "UK"].map((word, index) => (
                  <motion.span
                    key={index}
                    className="relative block overflow-hidden"
                    variants={wordVariants}
                  >
                    <span
                      className="absolute inset-0 h-full w-full scale-y-0 bg-black transition-transform duration-300"
                      style={{
                        transformOrigin: "center top",
                        transform: "scaleY(0) translateZ(0px)",
                      }}
                    />
                    <span className={word === "UK" ? "text-fitpeo-red" : ""}>
                      {word}
                    </span>
                  </motion.span>
                ))}
              </motion.span>
            </h1>
          </div>
          <div className="col-span-12 lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, translateY: 20 }}
              animate={controlsParagraph}
              style={{ transform: "none" }}
            >
              <p className="max-w-lg lg:ml-auto lg:mr-0">
                Design Declares is a growing group of designers, design studios,
                agencies and institutions here to declare a climate and
                ecological emergency. As part of the global declaration
                movement, we commit to harnessing the tools of our industry to
                reimagine, rebuild and heal our world.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DesignDeclareUK;

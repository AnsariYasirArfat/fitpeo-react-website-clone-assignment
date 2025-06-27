import { Link } from "react-router";
import { easeOut, motion } from "motion/react";

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: easeOut } },
};

const AboutDesignDeclares = () => {
  return (
    <motion.section
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="px-4 md:px-6 py-16 first:pt-8 last:pb-8"
    >
      <div className="container">
        <div style={{ opacity: 1, transform: "none" }}>
          <div className="grid grid-cols-12 gap-y-8 md:gap-x-16">
            <div className="col-span-12 lg:col-span-4">
              <div className="md:sticky md:top-8">
                <h2 className="font-h3 font-semibold text-fitpeo-white">
                  About Design Declares
                </h2>
              </div>
            </div>
            <div className="col-span-12 space-y-12 lg:col-span-7 lg:col-start-6">
              <div className="*:my-12 first:*:mt-0 last:*:mb-0 [&_li]:mb-1 [&_ol]:list-decimal [&_ol]:pl-4 [&_p]:my-6 [&_ul]:list-disc [&_ul]:pl-4">
                <h2 className="font-h1 text-fitpeo-white">
                  Climate breakdown has begun. And business as usual is not an
                  option.
                </h2>
                <p className="font-p-lg text-fitpeo-white">
                  <strong>That's why we started Design Declares.</strong>
                </p>
                <p className="font-p-lg text-fitpeo-white">
                  Inspired by a global declaration movement sounding the alarm
                  in industries everywhere, we're an industry-recognised
                  initiative representing the fears, hopes and commitment to
                  action of a growing group of designers, design studios,
                  agencies and institutions.
                </p>
                <div className="flex flex-wrap items-center gap-2">
                  <Link
                    className="focus-ring group h-full font-button relative flex max-h-fit w-full items-center justify-center rounded-full px-6 py-3 text-center transition-colors md:max-w-fit md:py-4 border border-transparent bg-fitpeo-white text-fitpeo-black hocus:bg-fitpeo-red"
                    to="/"
                    target="_self"
                  >
                    See Global Declarations
                  </Link>
                </div>
                <div className="grid grid-cols-2 gap-x-8 gap-y-4 @container">
                  <div className="col-span-2 space-y-4 xl:col-span-1">
                    <div className="*:my-12 first:*:mt-0 last:*:mb-0 [&_li]:mb-1 [&_ol]:list-decimal [&_ol]:pl-4 [&_p]:my-6 [&_ul]:list-disc [&_ul]:pl-4">
                      <p className="text-fitpeo-white">
                        Together, we sit at the very beginning of the creative
                        process. The tools we use and the choices we make can
                        influence society's behaviour, change economies and
                        challenge everything that's come before.
                      </p>
                    </div>
                  </div>
                  <div className="col-span-2 space-y-4 xl:col-span-1">
                    <div className="*:my-12 first:*:mt-0 last:*:mb-0 [&_li]:mb-1 [&_ol]:list-decimal [&_ol]:pl-4 [&_p]:my-6 [&_ul]:list-disc [&_ul]:pl-4">
                      <p className="text-fitpeo-white">
                        Because design, whether it's a product, a piece of
                        packaging or an exhibition space, has impact. It's up to
                        us whether that impact is harmful or healing.
                      </p>
                      <p className="text-fitpeo-white">
                        We're glad you're here. Let's get to work.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap items-center gap-2">
                  <Link
                    className="focus-ring group h-full font-button relative flex max-h-fit w-full items-center justify-center rounded-full px-6 py-3 text-center transition-colors md:max-w-fit md:py-4 border border-transparent bg-fitpeo-white text-fitpeo-black hocus:bg-fitpeo-red"
                    to="/"
                    target="_self"
                  >
                    Declare Emergency Now
                  </Link>
                </div>
                <div className="grid grid-cols-2 gap-x-8 gap-y-4 @container">
                  <div className="col-span-2 space-y-4 xl:col-span-1">
                    <div className="*:my-12 first:*:mt-0 last:*:mb-0 [&_li]:mb-1 [&_ol]:list-decimal [&_ol]:pl-4 [&_p]:my-6 [&_ul]:list-disc [&_ul]:pl-4">
                      <ul className="text-fitpeo-white">
                        <li>Design Declares is free.</li>
                        <li>
                          'Design' to us means industrial, digital, graphic,
                          communication and service design.
                        </li>
                        <li>
                          Design Declares offers support to all its signatories
                          through shared best practice, resources and insights,
                          all found in the Toolkit.
                        </li>
                        <li>
                          Our signatories use the clarity of the 8 Acts of
                          Emergency as a way to start meaningful conversations
                          and actions in collaboration with colleagues,
                          collaborators and clients.
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-span-2 space-y-4 xl:col-span-1">
                    <div className="*:my-12 first:*:mt-0 last:*:mb-0 [&_li]:mb-1 [&_ol]:list-decimal [&_ol]:pl-4 [&_p]:my-6 [&_ul]:list-disc [&_ul]:pl-4">
                      <ul className="text-fitpeo-white">
                        <li>
                          We welcome declarations from companies with an office
                          and/or employing at least one full-time designer, and
                          from practising freelance designers who are registered
                          as self-employed in the UK. All signatories will be
                          named and published on this site.
                        </li>
                        <li>
                          As a collective voice, we will liaise with other
                          industry organisations and networks, constructively
                          engaging with government, clients and design media.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};
export default AboutDesignDeclares;

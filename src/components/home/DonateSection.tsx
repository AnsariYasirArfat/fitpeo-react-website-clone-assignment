import { easeOut, motion } from "motion/react";

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7,ease: easeOut } },
};

const DonateSection = () => {
  const donations = [
    { amount: "£10", href: "https://wise.com/pay/r/uZ5h3pxRMmTE_pk" },
    { amount: "£20", href: "https://wise.com/pay/r/u2IiQNt2ebixruk" },
    { amount: "£50", href: "https://wise.com/pay/r/2vqUbqPfU9hvVLE" },
  ];

  return (
    <motion.section
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="px-4 md:px-6 py-16 first:pt-8 last:pb-8"
    >
      <div className="container mx-auto">
        <div className="grid grid-cols-12 gap-y-8 md:gap-x-16">
          <div className="col-span-12 lg:col-span-4">
            <div className="md:sticky md:top-8">
              <h2 className="text-2xl font-semibold">Donate to D!</h2>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-7 lg:col-start-6">
            <div className="space-y-12">
              <p className="text-lg">
                Design Declares is a CIC and would not exist without our
                dedicated team of co-steers, volunteers, and our passionate
                community working towards change in the creative industry. Your
                support can go a long way, and helps us too continue the
                valuable work needed in tackling the climate crises. If you
                believe in the work we do, please consider a small donation to
                help us on our journey for a more equitable and just planet.
              </p>
              <div className="flex flex-wrap items-center gap-2">
                {donations.map(({ amount, href }) => (
                  <a
                    key={amount}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="focus-ring font-medium relative flex w-full items-center justify-center rounded-full px-6 py-3 text-center transition-colors md:max-w-fit md:py-4 border border-transparent bg-fitpeo-white text-fitpeo-black hocus:bg-fitpeo-red"
                  >
                    Donate {amount}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default DonateSection;

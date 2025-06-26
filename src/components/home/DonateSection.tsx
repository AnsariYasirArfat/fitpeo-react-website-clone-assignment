const DonateSection = () => {
    return (
      <section className="px-4 md:px-6 py-16 first:pt-8 last:pb-8">
        <div className="container mx-auto">
          <div className="grid grid-cols-12 gap-y-8 md:gap-x-16">
            {/* Left Column: Heading */}
            <div className="col-span-12 lg:col-span-4">
              <div className="md:sticky md:top-8">
                <h2 className="text-2xl font-semibold">Donate to D!</h2>
              </div>
            </div>
            {/* Right Column: Content */}
            <div className="col-span-12 lg:col-span-7 lg:col-start-6">
              <div className="space-y-12">
                {/* Paragraph */}
                <p className="text-lg">
                  Design Declares is a CIC and would not exist without our
                  dedicated team of co-steers, volunteers, and our passionate
                  community working towards change in the creative industry. Your
                  support can go a long way, and helps us too continue the
                  valuable work needed in tackling the climate crises. If you
                  believe in the work we do, please consider a small donation to
                  help us on our journey for a more equitable and just planet.
                </p>
                {/* Donation Buttons */}
                <div className="flex flex-wrap items-center gap-2">
                  <a
                    className="focus-ring font-medium relative flex w-full items-center justify-center rounded-full px-6 py-3 text-center transition-colors md:max-w-fit md:py-4 border border-transparent bg-fitpeo-white text-fitpeo-black hocus:bg-fitpeo-red"
                    href="https://wise.com/pay/r/uZ5h3pxRMmTE_pk"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Donate £10
                  </a>
                  <a
                    className="focus-ring font-medium relative flex w-full items-center justify-center rounded-full px-6 py-3 text-center transition-colors md:max-w-fit md:py-4 border border-transparent bg-fitpeo-white text-fitpeo-black hocus:bg-fitpeo-red"
                    href="https://wise.com/pay/r/u2IiQNt2ebixruk"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Donate £20
                  </a>
                  <a
                    className="focus-ring font-medium relative flex w-full items-center justify-center rounded-full px-6 py-3 text-center transition-colors md:max-w-fit md:py-4 border border-transparent bg-fitpeo-white text-fitpeo-black hocus:bg-fitpeo-red"
                    href="https://wise.com/pay/r/2vqUbqPfU9hvVLE"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Donate £50
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default DonateSection;
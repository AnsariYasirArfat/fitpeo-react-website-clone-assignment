import { Link } from "react-router";

const GlobalPartnerships = () => {
  return (
    <section className="px-4 md:px-6 py-16 first:pt-8 last:pb-8">
      <div className="container">
        <div style={{ opacity: 1, transform: "none" }}>
          <div className="grid grid-cols-12 gap-y-8 md:gap-x-16">
            <div className="col-span-12 lg:col-span-4">
              <div className="md:sticky md:top-8">
                <h2 className="font-h3 font-semibold">Global Partnerships</h2>
              </div>
            </div>
            <div className="col-span-12 space-y-12 lg:col-span-7 lg:col-start-6">
              <div className="*:my-12 first:*:mt-0 last:*:mb-0 [&_li]:mb-1 [&_ol]:list-decimal [&_ol]:pl-4 [&_p]:my-6 [&_ul]:list-disc [&_ul]:pl-4">
                <p className="font-p-lg">
                  We invite our colleagues from across the design industry to
                  join us in declaring an emergency, and starting to take urgent
                  action.*
                </p>
                <div className="grid grid-cols-2 gap-x-8 gap-y-4 @container">
                  <div className="col-span-2 space-y-4 @xl:col-span-1">
                    <div className="*:my-12 first:*:mt-0 last:*:mb-0 [&_li]:mb-1 [&_ol]:list-decimal [&_ol]:pl-4 [&_p]:my-6 [&_ul]:list-disc [&_ul]:pl-4">
                      <p>
                        The acts of emergency above are the first (big) steps.
                        As we all commit to this work, we must also commit to
                        doing it in a way that is genuinely inclusive and
                        equitable.
                      </p>
                      <p>
                        It doesn’t matter where on the journey you are. What
                        matters is that you’re here, and you’re ready to do the
                        work. Because there is no design on a dead planet.
                      </p>
                    </div>
                  </div>
                  <div className="col-span-2 space-y-4 @xl:col-span-1">
                    <div className="*:my-12 first:*:mt-0 last:*:mb-0 [&_li]:mb-1 [&_ol]:list-decimal [&_ol]:pl-4 [&_p]:my-6 [&_ul]:list-disc [&_ul]:pl-4">
                      <p>
                        *We are actively seeking partnerships to expand Design
                        Declares around the world. If that sounds like something
                        you’re interested in, please get in touch.
                      </p>
                      <p>Join our list of global partners...</p>
                      <p>
                        {["UK", "Ireland", "Brazil", "Australia"].map(
                          (country, index, arr) => (
                            <Link
                              key={country}
                              className="focus-ring group relative w-fit inline underline transition-colors hocus:text-[--focus-color] mr-2"
                              to="/"
                              target="_self"
                            >
                              {country}
                              {index !== arr.length - 1 && ","}
                            </Link>
                          )
                        )}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap items-center gap-2">
                  <Link
                    className="focus-ring group h-full focus-ring font-button group relative flex max-h-fit w-full items-center justify-center rounded-full px-6 py-3 text-center transition-colors md:max-w-fit md:py-4 border border-transparent bg-fitpeo-white text-fitpeo-black hocus:bg-fitpeo-red"
                    to="/contact"
                    target="_self"
                  >
                    Get in Touch
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobalPartnerships;

import { signatoriesList, type Signatory } from "@/data/signatoriesList";
import { animate, useInView } from "motion/react";
import { useEffect, useRef } from "react";

interface AnimatedCounterProps {
  to: number;
  duration?: number;
  className?: string;
}

const AnimatedCounter = ({
  to,
  duration = 1,
  className,
}: AnimatedCounterProps) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inViewRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(inViewRef, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView || !ref.current) return;
    const controls = animate(0, to, {
      duration,
      onUpdate(value) {
        if (ref.current) {
          ref.current.textContent = Math.floor(value).toString();
        }
      },
    });
    return controls.stop;
  }, [isInView, to, duration]);

  return (
    <div ref={inViewRef} style={{ display: "inline-block" }}>
      <span ref={ref} className={className}>
        0
      </span>
    </div>
  );
};

const SignatoryLink = ({ name, url }: Signatory) => (
  <a
    className="focus-ring group relative w-fit transition-colors block max-w-fit font-fitpeo text-xs font-medium text-fitpeo-gray-400 [&:is(a)]:hocus:text-fitpeo-white [&:is(a)]:hocus:underline"
    href={url}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={`Go to ${name}'s website.`}
  >
    {name}
  </a>
);

const SignatoriesSection = () => {
  const { ukSignatories, globalSupporters } = signatoriesList;

  const totalGlobalSupporters = Object.values(globalSupporters).reduce(
    (acc, countrySignatories) => acc + countrySignatories.length,
    0
  );

  return (
    <section className="px-4 md:px-6 py-16 first:pt-8 last:pb-8">
      <div className="container">
        <div style={{ opacity: 1, transform: "none" }}>
          <div className="">
            <div className="space-y-12">
              <div>
                <span className="block max-w-fit text-6xl">
                  #<AnimatedCounter to={ukSignatories.length} duration={1.2} />
                </span>
                <span className="flex flex-wrap items-center gap-2">
                  <span className="text-lg font-semibold">
                    Signatories and counting in{" "}
                  </span>
                  <span className="inline-block max-w-fit rounded-full px-3 py-1 text-xs font-semibold transition-colors bg-fitpeo-red text-fitpeo-black">
                    D! UK
                  </span>
                </span>
              </div>
              <div className="columns-3 sm:columns-4 lg:columns-6 container:columns-9">
                {ukSignatories.map((signatory, index) => (
                  <SignatoryLink
                    key={index}
                    name={signatory.name}
                    url={signatory.url}
                  />
                ))}
              </div>

              <div>
                <span className="block max-w-fit text-6xl">
                  #<AnimatedCounter to={totalGlobalSupporters} duration={1.2} />
                </span>
                <h2 className="text-lg font-semibold">Global Supporters</h2>
              </div>
              <div className="columns-3 sm:columns-4 lg:columns-6 container:columns-9">
                {Object.entries(globalSupporters).map(
                  ([country, signatories], countryIndex) => (
                    <div key={countryIndex} className="mb-3">
                      <h3 className="text-xs font-bold">{country}</h3>
                      {signatories.map((signatory, signatoryIndex) => (
                        <SignatoryLink
                          key={signatoryIndex}
                          name={signatory.name}
                          url={signatory.url}
                        />
                      ))}
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignatoriesSection;

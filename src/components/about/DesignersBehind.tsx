import { designers, type Designers } from "@/data/designers";

const DesignersBehind = () => {
  return (
    <section className="px-4 md:px-6 py-16 first:pt-8 last:pb-8">
      <div className="container">
        <div style={{ opacity: 1, transform: "none" }}>
          <div className="grid grid-cols-12 gap-y-8 md:gap-x-16">
            <div className="col-span-12 lg:col-span-4">
              <div className="md:sticky md:top-8">
                <h2 className="font-h3 font-semibold">
                  The Designers Behind Design Declares UK
                </h2>
              </div>
            </div>
            <div className="col-span-12 space-y-12 lg:col-span-7 lg:col-start-6">
              <div className="*:my-12 first:*:mt-0 last:*:mb-0 [&_li]:mb-1 [&_ol]:list-decimal [&_ol]:pl-4 [&_p]:my-6 [&_ul]:list-disc [&_ul]:pl-4">
                <p>
                  Inspired by the global emergency declaration movement
                  demanding accountability and action across industries, Design
                  Declares is the initiative of a multidisciplinary group of
                  design professionals and agencies who all believe in the power
                  of design to change things.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-x-16 gap-y-24">
                {designers.map((logo: Designers, index: number) => (
                  <div key={index} className="flex items-center col-span-1">
                    <a
                      className="focus-ring group relative w-fit underline transition-colors hocus:text-[--focus-color] block"
                      aria-label={logo.ariaLabel}
                      href={logo.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      data-rac=""
                    >
                      <figure className="flex h-auto w-full flex-col items-center justify-center">
                        <div className="relative flex aspect-auto h-full max-h-14 w-full max-w-44">
                          <img
                            alt={logo.alt}
                            loading="lazy"
                            width={logo.width}
                            height={logo.height}
                            decoding="async"
                            data-nimg="1"
                            className="block object-contain object-left"
                            src={logo.imageUrl}
                          />
                        </div>
                      </figure>
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DesignersBehind;

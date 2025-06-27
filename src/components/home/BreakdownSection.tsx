import { useState, type ReactElement } from "react";

interface AccordionItemProps {
  title: string;
  content: ReactElement;
  id: string;
}

const AccordionItem = ({ title, content, id }: AccordionItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-t border-fitpeo-gray">
      <button
        id={id}
        type="button"
        aria-expanded={isOpen}
        aria-controls={`${id}-content`}
        className="focus-ring mt-4 flex w-full items-center justify-between"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-fitpeo-gray">{title}</h3>
        <span aria-hidden="true">
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="1.5"
            xmlns="http://www.w3.org/2000/svg"
            className={`size-6 transition-transform duration-300 ${
              isOpen ? "rotate-180" : ""
            }`}
          >
            <path strokeLinecap="square" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
          </svg>
        </span>
      </button>
      <div
        id={`${id}-content`}
        role="region"
        aria-labelledby={id}
        aria-hidden={!isOpen}
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="space-y-4 pt-8">{content}</div>
      </div>
    </div>
  );
};

const BreakdownSection = () => {
  return (
    <section className="px-4 md:px-6 py-16 first:pt-8 last:pb-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-12 gap-y-8 md:gap-x-16">
          <div className="col-span-12 lg:col-span-4">
            <div className="md:sticky md:top-8">
              <h2 className="text-2xl font-semibold">This is Breakdown</h2>
            </div>
          </div>

          <div className="col-span-12 lg:col-span-7 lg:col-start-6">
            <div className="space-y-12">
              <h2 className="text-4xl font-bold">
                The science is settled. We are in an emergency of climate and
                nature. The world is past breaking point; the breakdown has
                begun...
              </h2>

              <AccordionItem
                id="role-of-design"
                title="The Role of Design"
                content={
                  <div className="grid grid-cols-2 gap-x-8 gap-y-4">
                    <div className="col-span-2 space-y-4 xl:col-span-1">
                      <p>
                        As designers working within an industry that relies on
                        production and powers global consumption, we must
                        acknowledge that we have had a role in bringing us to
                        where we are now, and that we have an important role in
                        what comes next.
                      </p>
                    </div>
                    <div className="col-span-2 space-y-4 xl:col-span-1">
                      <p>
                        Because designers are makers. We make ideas real. We
                        generate solutions. We build the world - dreaming up
                        new futures and bringing them to life in ways that are
                        beautiful, vital and impossible to resist. It’s not
                        quite magic, but it feels like it.
                      </p>
                    </div>
                  </div>
                }
              />
              <AccordionItem
                id="time-for-change"
                title="Time for Change"
                content={
                  <div className="grid grid-cols-2 gap-x-8 gap-y-4">
                    <div className="col-span-2 space-y-4 xl:col-span-1">
                      <p>
                        Together with our clients, partners and colleagues
                        across the supply chain, we are daring to reimagine the
                        way we create every product, service, campaign and
                        designed solution we put out into the world.
                      </p>
                      <p>
                        This means measuring and actively reducing the
                        greenhouse gas emissions and resource use linked to our
                        designs.
                      </p>
                    </div>
                    <div className="col-span-2 space-y-4 xl:col-span-1">
                      <p>
                        It means introducing principles of sustainability,
                        circularity and - ultimately - regenerative design into
                        our practice to recapture and repurpose resources and
                        materials.
                      </p>
                      <p>
                        And it means acting systemically - seeing the bigger
                        picture and working with others to sharpen design’s
                        incredible capacity to influence and accelerate climate
                        repair and justice.
                      </p>
                    </div>
                  </div>
                }
              />
              <AccordionItem
                id="act-with-urgency"
                title="Act with Urgency"
                content={
                  <div className="grid grid-cols-2 gap-x-8 gap-y-4">
                    <div className="col-span-2 space-y-4 xl:col-span-1">
                      <p>
                        We know all we need to make this a reality. The
                        information, the guidance, the inspiration and
                        solutions are there. What design needs now is action -
                        meaningful steps that can begin to connect what we
                        know to what we do.
                      </p>
                    </div>
                    <div className="col-span-2 space-y-4 xl:col-span-1">
                      <p>
                        This is the most important brief of our lives. Join us
                        as we begin to design a climate-positive future.
                      </p>
                    </div>
                  </div>
                }
              />

              <div className="flex flex-wrap items-center gap-2">
                <a
                  className="focus-ring group relative flex h-full max-h-fit w-full items-center justify-center rounded-full border border-transparent bg-fitpeo-white px-6 py-3 text-center font-medium text-fitpeo-black transition-colors hocus:bg-fitpeo-red md:max-w-fit md:py-4"
                  href="https://youtu.be/XpnOe94eXdM"
                  target="_blank"
                >
                  View our D! Intro Video
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BreakdownSection;
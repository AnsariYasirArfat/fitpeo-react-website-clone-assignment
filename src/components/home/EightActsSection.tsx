interface ActItem {
  number: number;
  title: string;
  description: string;
}

const acts: ActItem[] = [
  {
    number: 1,
    title: "Sound the Alarm",
    description:
      "Acknowledge and raise awareness of the climate and ecological crisis - including its roots in systems of oppression - in our organisations and our practice.",
  },
  {
    number: 2,
    title: "Start the Journey",
    description:
      "Invest in educating ourselves and our teams on methods of sustainable and regenerative design, and show leadership by making measurable change to our practice. The Design Declares Toolkit is a great place to start.",
  },
  {
    number: 3,
    title: "Bring Clients with Us",
    description:
      "Meaningfully consider environmental and social impacts as part of every pitch, proposal and production process. Not every design output will be carbon neutral or fully climate friendly, but every project is an opportunity to make real progress.",
  },
  {
    number: 4,
    title: "Measure What We Make",
    description:
      "Measure the environmental and social impact of our businesses and design projects, and hold ourselves to account for what we find out.",
  },
  {
    number: 5,
    title: "Redefine ‘Good’",
    description:
      "Encourage, recognise and reward sustainable and regenerative design excellence in our industry through media and awards.",
  },
  {
    number: 6,
    title: "Educate, Accelerate",
    description:
      "Build and foster intra- and cross-discipline knowledge networks to share tools, resources and best practice to accelerate progress in our industry.",
  },
  {
    number: 7,
    title: "Design for Justice",
    description:
      "Create with and for the people who are disproportionately affected both by climate change and by the transition to a lower-carbon world.",
  },
  {
    number: 8,
    title: "Amplify Voices for Change",
    description:
      "Enable systemic change by working alongside policymakers, campaigners, ecologists, scientists, activists and others to strengthen local and national movements for change.",
  },
];

const ActItem = ({ number, title, description }: ActItem) => {
  return (
    <div className="group ">
      <div className="flex items-center border border-fitpeo-black">
        <h3 className="text-2xl font-bold flex w-full leading-none text-fitpeo-black">
          <span className="flex size-[3rem] flex-shrink-0 items-center justify-center tabular-nums md:size-[4.5rem]">
            {number}
          </span>
          <span className="flex w-full items-center border-l border-fitpeo-black p-2">
            {title}
          </span>
        </h3>
      </div>
      <div className="flex border-x border-fitpeo-black p-2 pb-10 group-last:border-b md:p-4">
        <div className="*:my-12 first:*:mt-0 last:*:mb-0 [&_li]:mb-1 [&_ol]:list-decimal [&_ol]:pl-4 [&_p]:my-6 [&_ul]:list-disc [&_ul]:pl-4">
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

const EightActsSection = () => {
  return (
    <section className="px-4 md:px-6 py-16 first:pt-8 last:pb-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-12 gap-y-8 md:gap-x-16">
          {/* Left Column */}
          <div className="col-span-12 lg:col-span-4">
            <div className="md:sticky md:top-8">
              <h2 className="text-2xl font-semibold">8 Acts of Emergency</h2>
            </div>
          </div>
          {/* Right Column */}
          <div className="col-span-12 lg:col-span-7 lg:col-start-6">
            <div className="space-y-12">
              <p className="text-lg">
                What does it take to Declare? It’s accepting we are in an
                emergency of climate and nature, and a commitment to do
                something about it. Here are eight places to start:
              </p>
              <div className="bg-fitpeo-white text-fitpeo-black">
                {acts.map((act) => (
                  <ActItem
                    key={act.number}
                    number={act.number}
                    title={act.title}
                    description={act.description}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EightActsSection;

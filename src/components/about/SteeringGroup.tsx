import { members, type Member } from '@/data/steeringGroup';
import { easeOut, motion } from "motion/react";

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: easeOut } },
};

const SteeringGroup = () => {
  return (
    <motion.section
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="px-4 md:px-6 py-16 first:pt-8 last:pb-8"
    >
      <div className="container">
        <div style={{ opacity: 1, transform: 'none' }}>
          <div className="grid grid-cols-12 gap-y-8 md:gap-x-16">
            <div className="col-span-12 lg:col-span-4">
              <div className="md:sticky md:top-8">
                <h2 className="font-h3 font-semibold">Steering Group</h2>
              </div>
            </div>
            <div className="col-span-12 space-y-12 lg:col-span-7 lg:col-start-6">
              <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto md:grid md:grid-cols-12">
                {members.map((member: Member, index: number) => (
                  <div
                    key={index}
                    className="space-y-3 w-[50vw] flex-shrink-0 snap-center md:col-span-3 md:w-auto"
                  >
                    <figure className="flex h-auto w-full flex-col items-center justify-center">
                      <div className="relative h-full w-full contrast-[1.1] grayscale">
                        <img
                          alt={member.alt}
                          loading="lazy"
                          width={member.width}
                          height={member.height}
                          decoding="async"
                          data-nimg="1"
                          className="block object-cover object-center"
                          src={member.imageUrl}
                        />
                      </div>
                    </figure>
                    <div className="space-y-1">
                      <p>{member.name}</p>
                      <p className="font-p-sm">{member.affiliation}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default SteeringGroup;
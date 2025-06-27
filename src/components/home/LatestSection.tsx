import { motion,easeOut } from "motion/react";
import { articles, type Article } from "@/data/articleList";
import { Link } from "react-router";

const containerVariants = {
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};
const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: easeOut } },
};

const ArticleComponent = ({ article }: { article: Article }) => {
  return (
    <motion.article
      variants={itemVariants}
      className="group grid grid-cols-12 gap-x-8 space-y-4 @container"
      lang="en-GB"
    >
      <div className="col-span-12 flex flex-wrap items-center gap-2 text-sm text-fitpeo-gray-400">
        {article.tags.map((tag, index) => (
          <span
            key={index}
            className="inline-block max-w-fit rounded-full px-3 py-1 text-xs font-semibold transition-colors bg-fitpeo-gray-800 text-fitpeo-gray-400"
          >
            {tag}
          </span>
        ))}
        <span className="text-xs font-semibold">{article.date}</span>
      </div>
      <div className="col-span-12 2xl:col-span-6">
        <h2 className="transition-colors group-hocus:text-fitpeo-red">
          {article.title}
        </h2>
      </div>
      <div className="col-span-12 space-y-4 2xl:col-span-6">
        <p className="text-fitpeo-gray-400">{article.description}</p>
        <a
          className="focus-ring group relative w-fit underline transition-colors hocus:text-[--focus-color] inline-block"
          href={article.link}
        >
          Read story
        </a>
      </div>
    </motion.article>
  );
};

const LatestSection = () => {
  return (
    <motion.section
      variants={itemVariants}
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
                <h2 className="font-h3 font-semibold">Latest</h2>
              </div>
            </div>
            <div className="col-span-12 space-y-12 lg:col-span-7 lg:col-start-6">
              <motion.div
                className="space-y-12"
                style={{ opacity: 1, transform: "none" }}
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
              >
                <div className="space-y-16">
                  {articles.slice(0, 2).map((article, index) => (
                    <ArticleComponent article={article} key={index} />
                  ))}
                </div>
                <motion.div variants={itemVariants}>
                  <Link
                    className="focus-ring group h-full font-button relative flex max-h-fit w-full items-center justify-center rounded-full px-6 py-3 text-center transition-colors md:max-w-fit md:py-4 border border-transparent bg-fitpeo-white text-fitpeo-black hocus:bg-fitpeo-red"
                    to="/latest"
                  >
                    See all the latest
                  </Link>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default LatestSection;

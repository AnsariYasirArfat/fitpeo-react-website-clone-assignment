import { articles, type Article } from "@/data/articleList";
import { Link } from "react-router";

const ArticleComponent = ({ article }: { article: Article }) => {
  return (
    <article
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
      <div className="col-span-12 @2xl:col-span-6">
        <h2 className="transition-colors group-hocus:text-fitpeo-red">
          {article.title}
        </h2>
      </div>
      <div className="col-span-12 space-y-4 @2xl:col-span-6">
        <p className="text-fitpeo-gray-400">{article.description}</p>
        <a
          className="focus-ring group relative w-fit underline transition-colors hocus:text-[--focus-color] inline-block"
          href={article.link}
        >
          Read story
        </a>
      </div>
    </article>
  );
};

const LatestSection = () => {
  return (
    <section className="px-4 md:px-6 py-16 first:pt-8 last:pb-8">
      <div className="container">
        <div style={{ opacity: 1, transform: "none" }}>
          <div className="grid grid-cols-12 gap-y-8 md:gap-x-16">
            <div className="col-span-12 lg:col-span-4">
              <div className="md:sticky md:top-8">
                <h2 className="font-h3 font-semibold">Latest</h2>
              </div>
            </div>
            <div className="col-span-12 space-y-12 lg:col-span-7 lg:col-start-6">
              <div
                className="space-y-12"
                style={{ opacity: 1, transform: "none" }}
              >
                <div className="space-y-16">
                  {articles.slice(0, 2).map((article, index) => (
                    <div key={index} style={{ opacity: 1, transform: "none" }}>
                      <ArticleComponent article={article} />
                    </div>
                  ))}
                </div>
                <div style={{ opacity: 1, transform: "none" }}>
                  <Link
                    className="focus-ring group h-full font-button relative flex max-h-fit w-full items-center justify-center rounded-full px-6 py-3 text-center transition-colors md:max-w-fit md:py-4 border border-transparent bg-fitpeo-white text-fitpeo-black hocus:bg-fitpeo-red"
                    to="/latest"
                  >
                    See all the latest
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

export default LatestSection;

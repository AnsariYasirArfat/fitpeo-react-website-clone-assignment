import React from 'react';

interface Article {
  categories: string[];
  date: string;
  title: string;
  description: string;
  link: string;
}

const articles: Article[] = [
  {
    categories: ['Events', 'D! UK'],
    date: '24.04.2025, 03 PM:30',
    title: 'SD4P Collective: How can Service Design drive meaningful sustainability impact',
    description: 'Recap: SD4P Collective working session – 28th March 2025',
    link: 'https://designdeclares.com/latest/sd4p-collective-how-can-service-design-drive-meaningful-sustainability-impact',
  },
  {
    categories: ['Events', 'D! UK'],
    date: '06.12.2024, 02 PM:30',
    title: 'Designing Tomorrow: Speculative Thinking Shapes Our Present',
    description: "Design Declares' November Event Challenges Perspectives on Sustainability and Innovation",
    link: 'https://designdeclares.com/latest/designing-tomorrow-speculative-thinking-shapes-our-present',
  },
];

const LatestSection: React.FC = () => {
  return (
    <section className="px-4 md:px-6 py-16 first:pt-8 last:pb-8">
      <div className="container">
        <div style={{ opacity: 1, transform: 'none' }}>
          <div className="grid grid-cols-12 gap-y-8 md:gap-x-16">
            <div className="col-span-12 lg:col-span-4">
              <div className="md:sticky md:top-8">
                <h2 className="font-h3 font-semibold">Latest</h2>
              </div>
            </div>
            <div className="col-span-12 space-y-12 lg:col-span-7 lg:col-start-6">
              <div className="space-y-12" style={{ opacity: 1, transform: 'none' }}>
                <div className="space-y-16">
                  {articles.map((article, index) => (
                    <div key={index} style={{ opacity: 1, transform: 'none' }}>
                      <article className="grid grid-cols-12 gap-x-8 space-y-4 @container" lang="en-GB">
                        <div className="col-span-12 flex flex-wrap items-center gap-2 text-sm text-fitpeo-gray">
                          {article.categories.map((category, catIndex) => (
                            <span
                              key={catIndex}
                              className="inline-block max-w-fit rounded-full px-3 py-1 text-xs font-semibold transition-colors bg-fitpeo-black text-fitpeo-gray"
                            >
                              {category}
                            </span>
                          ))}
                          <span className="text-xs font-semibold">{article.date}</span>
                        </div>
                        <div className="col-span-12 @2xl:col-span-6">
                          <h2 className="transition-colors group-hocus:text-fitpeo-red">{article.title}</h2>
                        </div>
                        <div className="col-span-12 space-y-4 @2xl:col-span-6">
                          <p className="text-fitpeo-gray">{article.description}</p>
                          <a
                            className="focus-ring group relative w-fit underline transition-colors hocus:text-[--focus-color] inline-block"
                            href={article.link}
                          >
                            Read story
                          </a>
                        </div>
                      </article>
                    </div>
                  ))}
                </div>
                <div style={{ opacity: 1, transform: 'none' }}>
                  <a
                    className="focus-ring group h-full focus-ring font-button group relative flex max-h-fit w-full items-center justify-center rounded-full px-6 py-3 text-center transition-colors md:max-w-fit md:py-4 border border-transparent bg-fitpeo-white text-fitpeo-black hocus:bg-fitpeo-red"
                    href="/latest"
                  >
                    See all the latest
                  </a>
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
import { articles, type Article } from "@/data/articleList";
import { useState } from "react";

interface FilterOptionProps {
  value: string;
  label: string;
  selected: boolean;
  onSelect: (value: string) => void;
  name: string;
}

const FilterOption = ({
  value,
  label,
  selected,
  onSelect,
  name,
}: FilterOptionProps) => {
  const bgClass = selected ? "bg-fitpeo-red" : "bg-fitpeo-gray-800";
  const textClass = selected ? "text-fitpeo-black" : "text-fitpeo-gray-400";
  return (
    <label className="no-focus group寝 group/focus group cursor-pointer">
      <span
        style={{
          border: "0px",
          clip: "rect(0px, 0px, 0px, 0px)",
          clipPath: "inset(50%)",
          height: "1px",
          margin: "-1px",
          overflow: "hidden",
          padding: "0px",
          position: "absolute",
          width: "1px",
          whiteSpace: "nowrap",
        }}
      >
        <input
          type="radio"
          value={value}
          checked={selected}
          onChange={() => onSelect(value)}
          name={name}
        />
      </span>
      <span
        className={`inline-block max-w-fit rounded-full px-3 py-1 text-xs font-semibold transition-colors ${bgClass} ${textClass} focus-ring hover:bg-fitpeo-white focus:bg-fitpeo-white hover:text-fitpeo-black focus:text-fitpeo-black`}
      >
        {label}
      </span>
    </label>
  );
};

interface FilterGroupProps {
  title: string;
  options: string[];
  selected: string;
  onSelect: (value: string) => void;
}

const FilterGroup = ({
  title,
  options,
  selected,
  onSelect,
}: FilterGroupProps) => {
  const groupName = title.toLowerCase().replace(" ", "-");
  return (
    <div className="space-y-4">
      <h2 className="font-h3 font-semibold">{title}</h2>
      <div
        aria-label={`Filter articles by ${title.toLowerCase()}`}
        role="radiogroup"
        className="flex flex-wrap gap-2"
      >
        {options.map((option) => (
          <FilterOption
            key={option}
            value={option}
            label={option}
            selected={selected === option}
            onSelect={onSelect}
            name={groupName}
          />
        ))}
      </div>
    </div>
  );
};

const ArticleComponent = ({ article }: { article: Article }) => {
  return (
    <a
      className="focus-ring group relative transition-colors block h-full w-full @container"
      href={article.link}
    >
      <article className="grid grid-cols-12 gap-y-6 md:gap-x-8">
        <div className="relative col-span-12 max-w-md overflow-hidden @2xl:col-span-6">
          <figure className="flex h-auto w-full flex-col items-center justify-center">
            <div className="relative h-full w-full transition-transform duration-500 group-hocus:scale-105">
              <img
                alt=""
                loading="lazy"
                className="block object-cover object-center"
                src={article.imageUrl}
              />
            </div>
          </figure>
        </div>
        <div className="col-span-12 space-y-4 @2xl:col-span-6">
          <div className="flex flex-wrap items-center gap-2 text-sm text-fitpeo-gray-400">
            {article.tags.map((tag) => (
              <span
                key={tag}
                className="inline-block max-w-fit rounded-full px-3 py-1 text-xs font-semibold transition-colors bg-fitpeo-gray-800 text-fitpeo-gray-400"
              >
                {tag}
              </span>
            ))}
            {article.date && (
              <span className="text-xs font-semibold">{article.date}</span>
            )}
          </div>
          <h2>{article.title}</h2>
          {article.description && (
            <p className="text-[1rem] text-fitpeo-gray-400">
              {article.description}
            </p>
          )}
        </div>
      </article>
    </a>
  );
};

const categories = ["All", "Events", "Case Studies", "Updates", "Perspective"];
const chapters = ["All", "D! UK", "D! Ireland", "D! Australia"];

const Latest = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedChapter, setSelectedChapter] = useState("All");

  const filteredArticles = articles.filter((article) => {
    const categoryMatch =
      selectedCategory === "All" || article.tags.includes(selectedCategory);
    const chapterMatch =
      selectedChapter === "All" || article.tags.includes(selectedChapter);
    return categoryMatch && chapterMatch;
  });

  return (
    <section className="px-4 md:px-6 py-16">
      <div className="container">
        <div style={{ opacity: 1, transform: "none" }}>
          <div className="grid grid-cols-12 gap-y-8 md:gap-x-16">
            <div className="col-span-12 lg:col-span-4">
              <div className="md:sticky md:top-8">
                <h1 className="font-h3 sr-only">Latest</h1>
                <div className="space-y-8">
                  <FilterGroup
                    title="Categories"
                    options={categories}
                    selected={selectedCategory}
                    onSelect={setSelectedCategory}
                  />
                  <FilterGroup
                    title="View by Chapter"
                    options={chapters}
                    selected={selectedChapter}
                    onSelect={setSelectedChapter}
                  />
                </div>
              </div>
            </div>
            <div className="col-span-12 space-y-12 lg:col-span-7 lg:col-start-6">
              <div className="space-y-20">
                {filteredArticles.map((article, index) => (
                  <div key={index} style={{ opacity: 1, transform: "none" }}>
                    <ArticleComponent article={article} />
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

export default Latest;

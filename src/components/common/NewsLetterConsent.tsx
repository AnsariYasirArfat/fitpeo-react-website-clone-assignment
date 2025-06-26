import { useState } from "react";

const NewsLetterConsent = () => {
  const [newsletterConsent, setNewsletterConsent] = useState(false);

  return (
    <div role="group" className="flex flex-row flex-wrap gap-4 font-p-sm">
      <label
        className="group/focus group flex items-center gap-x-2 transition-colors [&[data-selected]_.box]:!border-fitpeo-white [&_.box]:border-fitpeo-gray-400"
        data-selected={newsletterConsent ? "true" : undefined}
      >
        <input
          type="checkbox"
          name="newsletterConsent"
          value="true"
          checked={newsletterConsent}
          onChange={(e) => setNewsletterConsent(e.target.checked)}
          className="sr-only"
        />
        <span
          className="box focus-border mb-auto mt-0 flex size-12 flex-shrink-0 items-center justify-center border"
          aria-hidden="true"
        >
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="1"
            xmlns="http://www.w3.org/2000/svg"
            className="size-12 rotate-45 scale-0 transition-transform group-data-[selected]:scale-100"
          >
            <path strokeLinecap="square" d="M12 4.5v15m7.5-7.5h-15" />
          </svg>
        </span>
        <span className="max-w-full transition-colors md:py-3.5 text-fitpeo-gray-400 group-data-[selected]:text-fitpeo-white whitespace-normal !py-0">
          I would like to be added to the Design Declares! newsletter and
          receive further updates.
        </span>
      </label>
    </div>
  );
};

export default NewsLetterConsent;

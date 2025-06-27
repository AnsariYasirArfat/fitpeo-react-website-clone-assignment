import { useState } from 'react';
import { Link } from 'react-router';

const NewsletterForm = () => {
  const [email, setEmail] = useState('');
  const [newsletterConsent, setNewsletterConsent] = useState(false);

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
  };

  return (
    <div className="flex flex-col gap-y-4 text-fitpeo-black [--focus-color:theme(colors.fitpeo.white)]">
      <div className="relative -mt-px flex flex-col gap-x-2 border px-4 py-4 md:flex-row md:py-0 border-fitpeo-black">
        <label
          htmlFor="email"
          className="max-w-full whitespace-nowrap transition-colors md:py-3.5"
        >
          Email*
        </label>
        <input
          type="email"
          id="email"
          name="email"
          autoComplete="email"
          required
          className="no-focus w-full bg-transparent md:py-3.5 placeholder:text-fitpeo-black"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="space-y-4">
          <div
            aria-label="Which of the following do options you consent to?"
            role="group"
            className="flex flex-row flex-wrap gap-4 font-p-sm"
            data-required="true"
          >
            <label className="group flex items-center gap-x-2 transition-colors [&_.box]:border-fitpeo-black">
              <span style={{ border: 0, clip: 'rect(0 0 0 0)', clipPath: 'inset(50%)', height: '1px', margin: '-1px', overflow: 'hidden', padding: 0, position: 'absolute', width: '1px', whiteSpace: 'nowrap' }}>
                <input
                  type="checkbox"
                  required
                  name="newsletterConsent"
                  value="true"
                  checked={newsletterConsent}
                  onChange={(e) => setNewsletterConsent(e.target.checked)}
                />
              </span>
              <span className="box mb-auto mt-0 flex size-12 flex-shrink-0 items-center justify-center border" aria-hidden="true">
                <svg
                  width="100%"
                  height="100%"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="1"
                  xmlns="http://www.w3.org/2000/svg"
                  className={`size-12 rotate-45 transition-transform ${newsletterConsent ? 'scale-100' : 'scale-0'}`}
                >
                  <path strokeLinecap="square" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
              </span>
              <span className="max-w-full transition-colors md:py-3.5 whitespace-normal !py-0">
                I would like to be added to the Design Declares! newsletter and receive further updates.
              </span>
            </label>
          </div>
          <Link
            className="focus-ring group relative w-fit underline transition-colors hocus:text-[--focus-color] font-p-sm block"
            to="/privacy-policy"
            target="_self"
          >
            View our Privacy Policy
          </Link>
        </div>
        <div className="flex items-center gap-x-4">
          <button
            type="button"
            onClick={handleSubmit}
            className="focus-ring font-button group relative flex max-h-fit w-full items-center justify-center rounded-full px-6 py-3 text-center transition-colors md:max-w-fit md:py-4 border border-transparent bg-fitpeo-white text-fitpeo-black hocus:bg-fitpeo-black hocus:text-fitpeo-white"
          >
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewsletterForm;
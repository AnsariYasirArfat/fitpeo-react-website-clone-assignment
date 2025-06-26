import React from 'react';

const NewsletterSection: React.FC = () => {
  return (
    <section className="px-base md:px-md py-2xl first-of-type:pt-md last-of-type:pb-md">
      <div className="container">
        <div style={{ opacity: 1, transform: 'none' }}>
          <div className="grid grid-cols-12 gap-y-8 md:gap-x-16">
            <div className="col-span-12 lg:col-span-4">
              <div className="md:sticky md:top-8">
                <h2 className="font-h3 font-semibold">The Design Declares Newsletter and Toolkit</h2>
              </div>
            </div>
            <div className="col-span-12 space-y-12 lg:col-span-7 lg:col-start-6">
              <div className="*:my-12 first:*:mt-0 last:*:mb-0 [&_li]:mb-1 [&_ol]:list-decimal [&_ol]:pl-4 [&_p]:my-6 [&_ul]:list-disc [&_ul]:pl-4">
                <figure className="flex h-auto w-full flex-col items-center justify-center">
                  <div className="relative h-full w-full">
                    <img
                      alt=""
                      loading="lazy"
                      width="3840"
                      height="2160"
                      decoding="async"
                      data-nimg="1"
                      className="block object-cover object-center"
                      style={{ color: 'transparent' }}
                      sizes="(max-width: 640px) 100vw, 100vw"
                      src='/assets/newsletter.webp'
                    />
                  </div>
                </figure>
                <p className="font-p-lg">
                  Subscribe to the Design Declares UK newsletter to receive the latest news and updates. By signing up you will also gain access to The Design Declares Toolkit, a live and evolving Notion site co-created with our community. It is filled with the latest resources and methods to help you on your journey to climate-positive design.
                </p>
                <p>
                  Every signatory to Design Declares will receive an access link to the Toolkit. If you are unable to declare emergency quite yet, you can still access the Toolkit - just register below.
                </p>
              </div>
              <form
                className="flex flex-col gap-y-4 md:gap-y-8 text-fitpeo-gray"
                action="javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
              >
                <div className="focus-border relative -mt-px flex flex-col gap-x-2 border px-4 py-4 md:flex-row md:py-0 border-fitpeo-gray text-fitpeo-white">
                  <label className="max-w-full whitespace-nowrap transition-colors md:py-3.5 text-fitpeo-gray group-data-[selected]:text-fitpeo-white" htmlFor="email">
                    Email:*
                  </label>
                  <input
                    className="no-focus w-full bg-transparent md:py-3.5 placeholder:text-fitpeo-gray"
                    type="email"
                    autoComplete="email"
                    required
                    id="email"
                    name="email"
                  />
                </div>
                <div role="group" className="flex flex-row flex-wrap gap-4 font-p-sm" data-rac="" data-required="true">
                  <label className="group/focus group flex items-center gap-x-2 transition-colors [&[data-selected]_.box]:!border-fitpeo-white [& commemorate_.box]:border-fitpeo-gray">
                    <span style={{ border: 0, clip: 'rect(0 0 0 0)', clipPath: 'inset(50%)', height: '1px', margin: '-1px', overflow: 'hidden', padding: 0, position: 'absolute', width: '1px', whiteSpace: 'nowrap' }}>
                      <input type="checkbox" required name="newsletterConsent" value="true" title="" />
                    </span>
                    <span className="box focus-border mb-auto mt-0 flex size-12 flex-shrink-0 items-center justify-center border" aria-hidden="true">
                      <svg width="100%" height="100%" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1" xmlns="http://www.w3.org/2000/svg" className="size-12 rotate-45 scale-0 transition-transform group-data-[selected]:scale-100">
                        <path strokeLinecap="square" d="M12 4.5v15m7.5-7.5h-15" />
                      </svg>
                    </span>
                    <span className="max-w-full transition-colors md:py-3.5 text-fitpeo-gray group-data-[selected]:text-fitpeo-white whitespace-normal !py-0">
                      I would like to be added to the Design Declares! newsletter and receive further updates.
                    </span>
                  </label>
                </div>
                <a className="focus-ring group relative w-fit underline transition-colors hocus:text-[--focus-color] font-p-sm block" data-rac="" href="/privacy-policy" target="_self">
                  View our Privacy Policy
                </a>
                <div className="flex items-center gap-x-4">
                  <button
                    type="submit"
                    className="focus-ring font-button group relative flex max-h-fit w-full items-center justify-center rounded-full px-6 py-3 text-center transition-colors md:max-w-fit md:py-4 border border-transparent bg-fitpeo-white text-fitpeo-black hocus:bg-fitpeo-red"
                    data-rac=""
                  >
                    Subscribe
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
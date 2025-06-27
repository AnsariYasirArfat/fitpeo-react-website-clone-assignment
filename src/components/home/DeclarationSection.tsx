import { countries } from "@/data/countries";
import { useState } from "react";
import NewsLetterConsent from "@/components/common/NewsLetterConsent";
import { Link } from "react-router";

type EntityType = "Business" | "Individual" | "Institution" | "Team";

const DeclarationSection = () => {
  const [entityType, setEntityType] = useState<EntityType | undefined>(
    undefined
  );
  const [dataConsent, setDataConsent] = useState(false);

  const [selectedCountry, setSelectedCountry] = useState("United Kingdom");
  const [selectedDiscipline, setSelectedDiscipline] = useState("");
  const handleEntityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEntityType(event.target.value as EntityType);
  };

  const handleSubmit = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    console.log("Form submitted");
  };

  return (
    <section
      className="px-4 md:px-6 py-16 first:pt-8 last:pb-8"
      id="declaration"
    >
      <div className="container">
        <div style={{ opacity: 1, transform: "none" }}>
          <div className="grid grid-cols-12 gap-y-8 md:gap-x-16">
            <div className="col-span-12 lg:col-span-4">
              <div className="md:sticky md:top-8">
                <h2 className="font-h3 font-semibold">Declare Emergency Now</h2>
              </div>
            </div>
            <div className="col-span-12 space-y-12 lg:col-span-7 lg:col-start-6">
              <div className="*:my-12 first:*:mt-0 last:*:mb-0 [&_li]:mb-1 [&_ol]:list-decimal [&_ol]:pl-4 [&_p]:my-6 [&_ul]:list-disc [&_ul]:pl-4">
                <p className="font-p-lg">
                  Design Declares is open to individuals and institutions
                  working in industrial, digital, graphic, communication and
                  service design. To declare here, you must be a company with an
                  office in the UK employing at least one full-time designer. We
                  also welcome declarations from practising freelance designers
                  who are registered as self-employed in the UK, and global
                  supporters from other countries. All declarations will be
                  named and published on this site.
                </p>
              </div>
              <div className="flex flex-col gap-y-8 border p-4 md:p-10 border-fitpeo-gray-400">
                <h2 className="font-h1">I am Declaring Emergency</h2>
                <div
                  role="radiogroup"
                  aria-required="true"
                  aria-orientation="horizontal"
                  className="flex flex-row flex-wrap gap-4"
                >
                  {["Business", "Individual", "Institution", "Team"].map(
                    (type) => (
                      <label
                        key={type}
                        className="group/focus group flex items-center gap-x-2 transition-colors [&[data-selected]_.box]:!border-fitpeo-white [&_.box]:border-fitpeo-gray-400"
                        data-selected={entityType === type ? "true" : undefined}
                      >
                        <input
                          type="radio"
                          name="entity"
                          value={type}
                          checked={entityType === type}
                          onChange={handleEntityChange}
                          className="sr-only"
                          required
                        />
                        <span
                          className="box focus-border flex size-12 flex-shrink-0 items-center justify-center border"
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
                            <path
                              strokeLinecap="square"
                              d="M12 4.5v15m7.5-7.5h-15"
                            />
                          </svg>
                        </span>
                        <span className="max-w-full transition-colors md:py-3.5 text-fitpeo-gray-400 group-data-[selected]:text-fitpeo-white whitespace-normal !py-0">
                          As a {type.toLowerCase()}
                        </span>
                      </label>
                    )
                  )}
                </div>
                <div>
                  {entityType === "Business" && (
                    <div className="focus-border relative -mt-px flex flex-col gap-x-2 border px-4 py-4 md:flex-row md:py-0 border-fitpeo-gray-400 text-fitpeo-white">
                      <label
                        className="max-w-full whitespace-nowrap transition-colors md:py-3.5 text-fitpeo-gray-400"
                        htmlFor="businessName"
                      >
                        Business Name:*
                      </label>
                      <input
                        className="no-focus w-full bg-transparent md:py-3.5 placeholder:text-fitpeo-gray-400"
                        autoComplete="organization"
                        required
                        id="businessName"
                        name="businessName"
                      />
                    </div>
                  )}
                  {entityType === "Individual" && (
                    <div className="focus-border relative -mt-px flex flex-col gap-x-2 border px-4 py-4 md:flex-row md:py-0 border-fitpeo-gray-400 text-fitpeo-white">
                      <label
                        className="max-w-full whitespace-nowrap transition-colors md:py-3.5 text-fitpeo-gray-400"
                        htmlFor="individualName"
                      >
                        Individual Name:*
                      </label>
                      <input
                        className="no-focus w-full bg-transparent md:py-3.5 placeholder:text-fitpeo-gray-400"
                        autoComplete="name"
                        required
                        id="individualName"
                        name="individualName"
                      />
                    </div>
                  )}
                  {entityType === "Institution" && (
                    <div className="focus-border relative -mt-px flex flex-col gap-x-2 border px-4 py-4 md:flex-row md:py-0 border-fitpeo-gray-400 text-fitpeo-white">
                      <label
                        className="max-w-full whitespace-nowrap transition-colors md:py-3.5 text-fitpeo-gray-400"
                        htmlFor="institutionName"
                      >
                        Institution Name:*
                      </label>
                      <input
                        className="no-focus w-full bg-transparent md:py-3.5 placeholder:text-fitpeo-gray-400"
                        autoComplete="organization"
                        required
                        id="institutionName"
                        name="institutionName"
                      />
                    </div>
                  )}
                  {entityType === "Team" && (
                    <>
                      <div className="focus-border relative -mt-px flex flex-col gap-x-2 border px-4 py-4 md:flex-row md:py-0 border-fitpeo-gray-400 text-fitpeo-white">
                        <label
                          className="max-w-full whitespace-nowrap transition-colors md:py-3.5 text-fitpeo-gray-400"
                          htmlFor="businessName"
                        >
                          Business Name:*
                        </label>
                        <input
                          className="no-focus w-full bg-transparent md:py-3.5 placeholder:text-fitpeo-gray-400"
                          autoComplete="organization"
                          required
                          id="businessName"
                          name="businessName"
                        />
                      </div>
                      <div className="focus-border relative -mt-px flex flex-col gap-x-2 border px-4 py-4 md:flex-row md:py-0 border-fitpeo-gray-400 text-fitpeo-white">
                        <label
                          className="max-w-full whitespace-nowrap transition-colors md:py-3.5 text-fitpeo-gray-400"
                          htmlFor="teamName"
                        >
                          Team Name:*
                        </label>
                        <input
                          className="no-focus w-full bg-transparent md:py-3.5 placeholder:text-fitpeo-gray-400"
                          required
                          id="teamName"
                          name="teamName"
                        />
                      </div>
                    </>
                  )}
                  <div className="focus-border relative -mt-px flex flex-col gap-x-2 border px-4 py-4 md:flex-row md:py-0 border-fitpeo-gray-400 text-fitpeo-white">
                    <label
                      className="max-w-full whitespace-nowrap transition-colors md:py-3.5 text-fitpeo-gray-400"
                      htmlFor="website"
                    >
                      Website:*
                    </label>
                    <input
                      className="no-focus w-full bg-transparent md:py-3.5 placeholder:text-fitpeo-gray-400"
                      type="url"
                      required
                      id="website"
                      name="website"
                    />
                  </div>
                  <div className="focus-border relative -mt-px flex flex-col gap-x-2 border px-4 py-4 md:flex-row md:py-0 border-fitpeo-gray-400 text-fitpeo-white">
                    <label
                      className="max-w-full whitespace-nowrap transition-colors md:py-3.5 text-fitpeo-gray-400"
                      htmlFor="country"
                    >
                      Country:*
                    </label>
                    <select
                      className="no-focus w-full bg-black text-white md:py-3.5"
                      required
                      id="country"
                      name="country"
                      value={selectedCountry}
                      onChange={(e) => setSelectedCountry(e.target.value)}
                    >
                      {countries.map((country) => (
                        <option
                          key={country}
                          value={country}
                          className={
                            country === selectedCountry ? "text-fitpeo-red" : ""
                          }
                        >
                          {country}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="focus-border relative -mt-px flex flex-col gap-x-2 border px-4 py-4 md:flex-row md:py-0 border-fitpeo-gray-400 text-fitpeo-white">
                    <label
                      className="max-w-full whitespace-nowrap transition-colors md:py-3.5 text-fitpeo-gray-400"
                      htmlFor="discipline"
                    >
                      Discipline:*
                    </label>
                    <select
                      className="no-focus w-full bg-black text-white md:py-3.5"
                      required
                      id="discipline"
                      name="discipline"
                      value={selectedDiscipline}
                      onChange={(e) => setSelectedDiscipline(e.target.value)}
                    >
                      <option value=""></option>
                      <option value="Communication Design">
                        Communication Design
                      </option>
                      <option value="Digital Design">Digital Design</option>
                      <option value="Service Design">Service Design</option>
                      <option value="Product Design">Product Design</option>
                    </select>
                  </div>
                  <div className="focus-border relative -mt-px flex flex-col gap-x-2 border px-4 py-4 md:flex-row md:py-0 border-fitpeo-gray-400 text-fitpeo-white">
                    <label
                      className="max-w-full whitespace-nowrap transition-color
s md:py-3.5 text-fitpeo-gray-400"
                      htmlFor="email"
                    >
                      Email:*
                    </label>
                    <input
                      className="no-focus w-full bg-transparent md:py-3.5 placeholder:text-fitpeo-gray-400"
                      type="email"
                      autoComplete="email"
                      required
                      id="email"
                      name="email"
                    />
                  </div>
                  <div className="focus-border relative -mt-px flex flex-col gap-x-2 border md:flex-row md:py-0 border-fitpeo-gray-400 text-fitpeo-white p-0">
                    <label
                      className="max-w-full whitespace-nowrap transition-colors md:py-3.5 text-fitpeo-gray-400 sr-only"
                      htmlFor="message"
                    >
                      Why are you declaring? In a sentence or two, tell us why
                      you’re joining Design Declares.
                    </label>
                    <textarea
                      className="focus-ring no-focus  w-full bg-transparent placeholder:text-fitpeo-gray-400 px-4 py-3.5"
                      rows={8}
                      name="message"
                      placeholder="Why are you declaring? In a sentence or two, tell us why you’re joining Design Declares."
                      required
                      id="message"
                    />
                  </div>
                </div>
                <div className="space-y-4">
                  <div
                    role="group"
                    className="flex flex-row flex-wrap gap-4 font-p-sm"
                  >
                    <label
                      className="group/focus group flex items-center gap-x-2 transition-colors [&[data-selected]_.box]:!border-fitpeo-white [&_.box]:border-fitpeo-gray-400"
                      data-selected={dataConsent ? "true" : undefined}
                    >
                      <input
                        type="checkbox"
                        name="dataConsent"
                        value="true"
                        checked={dataConsent}
                        onChange={(e) => setDataConsent(e.target.checked)}
                        className="sr-only"
                        required
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
                          <path
                            strokeLinecap="square"
                            d="M12 4.5v15m7.5-7.5h-15"
                          />
                        </svg>
                      </span>
                      <span className="max-w-full transition-colors md:py-3.5 text-fitpeo-gray-400 group-data-[selected]:text-fitpeo-white whitespace-normal !py-0">
                        I consent for my data to be used for the purpose of the
                        Declaration, and for my name and reason for joining to
                        be used in the promotion of the Declaration on this site
                        and across our social channels.
                      </span>
                    </label>
                  </div>
                  <NewsLetterConsent />
                </div>
                <Link
                  className="focus-ring group relative w-fit underline transition-colors hocus:text-[--focus-color] font-p-sm block"
                  to="/privacy-policy"
                  target="_self"
                >
                  View our Privacy Policy
                </Link>
                <div className="flex items-center gap-x-4">
                  <button
                    type="button"
                    onClick={handleSubmit}
                    className="focus-ring font-button group relative flex max-h-fit w-full items-center justify-center rounded-full px-6 py-3 text-center transition-colors md:max-w-fit md:py-4 border border-transparent bg-fitpeo-white text-fitpeo-black hocus:bg-fitpeo-red"
                  >
                    Declare Emergency Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeclarationSection;

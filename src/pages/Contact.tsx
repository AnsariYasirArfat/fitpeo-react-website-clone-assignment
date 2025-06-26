import NewsLetterConsent from "@/components/common/NewsLetterConsent";

const Contact = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Form submitted");
  };

  const teams = [
    { value: "hello@designdeclares.com", label: "D! UK" },
    { value: "hello@designdeclares.ie", label: "D! Ireland" },
    { value: "ola@designdeclares.com.br", label: "D! Brasil" },
    { value: "australia@designdeclares.com.au", label: "D! Australia" },
  ];

  const enquiryTypes = [
    "Contribute to the toolkit",
    "Volunteer my time",
    "Set up a new chapter",
    "Discuss something else",
  ];

  return (
    <section className="px-4 md:px-6 py-16 first:pt-8 last:pb-8">
      <div className="container">
        <div style={{ opacity: 1, transform: "none" }}>
          <div className="grid grid-cols-12 gap-y-8 md:gap-x-16">
            <div className="col-span-12 lg:col-span-4">
              <div className="md:sticky md:top-8">
                <h1 className="font-h3 sr-only">Contact</h1>
                <h2 className="font-h3 font-semibold">Contact</h2>
              </div>
            </div>
            <div className="col-span-12 space-y-12 lg:col-span-7 lg:col-start-6">
              <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-y-8 border p-4 md:p-10 border-fitpeo-gray-400 text-fitpeo-white"
              >
                <h2 className="font-h1">Send Us A Message</h2>
                <div>
                  <div className="focus-border relative -mt-px flex flex-col gap-x-2 border px-4 py-4 md:flex-row md:py-0 border-fitpeo-gray-400 text-fitpeo-white">
                    <label
                      className="max-w-full whitespace-nowrap transition-colors md:py-3.5 text-fitpeo-gray-400 group-data-[selected]:text-fitpeo-white"
                      htmlFor="name"
                    >
                      Name:*
                    </label>
                    <input
                      className="no-focus w-full bg-transparent md:py-3.5 placeholder:text-fitpeo-gray-400"
                      autoComplete="name"
                      required
                      id="name"
                      name="name"
                    />
                  </div>
                  <div className="focus-border relative -mt-px flex flex-col gap-x-2 border px-4 py-4 md:flex-row md:py-0 border-fitpeo-gray-400 text-fitpeo-white">
                    <label
                      className="max-w-full whitespace-nowrap transition-colors md:py-3.5 text-fitpeo-gray-400 group-data-[selected]:text-fitpeo-white"
                      htmlFor="email"
                    >
                      Email:*
                    </label>
                    <input
                      className="no-focus w-full bg-transparent md:py-3.5 placeholder:text-fitpeo-gray-400"
                      autoComplete="email"
                      required
                      id="email"
                      type="email"
                      name="email"
                    />
                  </div>
                  <div className="focus-border relative -mt-px flex flex-col gap-x-2 border px-4 py-4 md:flex-row md:py-0 border-fitpeo-gray-400 text-fitpeo-white">
                    <label
                      className="max-w-full whitespace-nowrap transition-colors md:py-3.5 text-fitpeo-gray-400 group-data-[selected]:text-fitpeo-white"
                      htmlFor="team"
                    >
                      Team to contact:*
                    </label>
                    <div className="w-full bg-transparent">
                      <select
                        className="no-focus w-full bg-fitpeo-black text-fitpeo-white md:py-3.5"
                        required
                        id="team"
                        name="team"
                      >
                        <option value=""></option>
                        {teams.map((team) => (
                          <option key={team.value} value={team.value}>
                            {team.label}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div className="focus-border relative -mt-px flex flex-col gap-x-2 border px-4 py-4 md:flex-row md:py-0 border-fitpeo-gray-400 text-fitpeo-white">
                    <label
                      className="max-w-full whitespace-nowrap transition-colors md:py-3.5 text-fitpeo-gray-400 group-data-[selected]:text-fitpeo-white"
                      htmlFor="enquiryType"
                    >
                      Enquiry type:*
                    </label>
                    <div className="w-full bg-transparent">
                      <select
                        className="no-focus w-full bg-fitpeo-black text-fitpeo-white md:py-3.5"
                        required
                        id="enquiryType"
                        name="enquiryType"
                      >
                        <option value=""></option>
                        {enquiryTypes.map((type) => (
                          <option key={type} value={type}>
                            {type}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div className="focus-border relative -mt-px flex flex-col gap-x-2 border md:flex-row md:py-0 border-fitpeo-gray-400 text-fitpeo-white p-0">
                    <label
                      className="max-w-full whitespace-nowrap transition-colors md:py-3.5 text-fitpeo-gray-400 group-data-[selected]:text-fitpeo-white sr-only"
                      htmlFor="message"
                    >
                      Please write your message here.
                    </label>
                    <textarea
                      className="focus-ring no-focus w-full bg-transparent placeholder:text-fitpeo-gray-400 px-4 py-3.5"
                      rows={8}
                      name="message"
                      placeholder="Please write your message here."
                      required
                      id="message"
                    />
                  </div>
                </div>
                <NewsLetterConsent />
                <a
                  className="focus-ring group relative w-fit underline transition-colors hocus:text-[--focus-color] font-p-sm block"
                  href="/privacy-policy"
                  target="_self"
                >
                  View our Privacy Policy
                </a>
                <div className="flex items-center gap-x-4">
                  <button
                    type="submit"
                    className="focus-ring font-button group relative flex max-h-fit w-full items-center justify-center rounded-full px-6 py-3 text-center transition-colors md:max-w-fit md:py-4 border border-transparent bg-fitpeo-white text-fitpeo-black hocus:bg-fitpeo-red"
                  >
                    Send Message
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

export default Contact;

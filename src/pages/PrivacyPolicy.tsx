const PrivacyPolicy = () => {
  const cabinFeatures = [
    "No cookies",
    "No data sharing",
    "No ad networks",
    "Carbon neutral",
    "Fast and lightweight",
    "Compliant with all privacy laws",
  ];
  return (
    <div style={{ opacity: 1, transform: "none" }}>
      <h1 className="sr-only">Privacy Policy</h1>
      <section className="px-4 md:px-6 py-16 first:pt-8 last:pb-8">
        <div className="container">
          <div style={{ opacity: 1, transform: "none" }}>
            <div className="grid grid-cols-12 gap-y-8 md:gap-x-16">
              <div className="col-span-12 lg:col-span-4">
                <div className="md:sticky md:top-8">
                  <h2 className="font-h3 font-semibold text-fitpeo-white">
                    Privacy Policy
                  </h2>
                </div>
              </div>
              <div className="col-span-12 space-y-12 lg:col-span-7 lg:col-start-6">
                <div className="*:my-12 first:*:mt-0 last:*:mb-0 [&_li]:mb-1 [&_ol]:list-decimal [&_ol]:pl-4 [&_p]:my-6 [&_ul]:list-disc [&_ul]:pl-4">
                  <p className="text-fitpeo-white">
                    This Privacy Policy is for the benefit of visitors to our
                    website. It will tell you how we look after your personal
                    data as your privacy is important to us. Design Declares
                    protects your privacy with Cabin analytics – this means:
                  </p>
                  <ul className="text-fitpeo-white">
                    {cabinFeatures.map((feature) => (
                      <li key={feature}>{feature}</li>
                    ))}
                  </ul>
                  <p className="text-fitpeo-white">
                    Cabin is built on the concept of privacy-by-design. Visitor
                    data is stored in a unique data structure which makes it
                    100% anonymous and compliant with all privacy laws,
                    globally. To learn more about Cabin,{" "}
                    <a
                      className="focus-ring group relative w-fit inline underline transition-colors hocus:text-[--focus-color]"
                      href="https://withcabin.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      click here
                    </a>
                    .
                  </p>
                  <p className="text-fitpeo-white">
                    Design Declares collect emails and names via Brevo and will
                    use the information you provide via Brevo to be in touch
                    with you.
                  </p>
                  <p className="text-fitpeo-white">
                    We use the data collected by our website to monitor trends
                    to enable us to monitor how our website is being used, so
                    that we can operate more effectively towards audience needs
                    and expectations. Emails and names gathered via Brevo will
                    be used to send updates and marketing related to Design
                    Declares as a service, product or insight. This includes all
                    subsidiaries and partnering agencies involved in the
                    curation of Design Declares.
                  </p>
                  <p className="text-fitpeo-white">
                    We will not actively send your data anywhere globally,
                    however Cabin or Brevo may do this. Platforms such as these
                    subscribe to the EU-US Privacy Shield framework which means
                    that it has agreed to work with the appropriate regulatory
                    authorities to resolve any complaints regarding the transfer
                    of personal data, where these complaints cannot be resolved
                    directly. Organisations subscribing to the EU-US Privacy
                    Shield framework are considered to be permitted destinations
                    for personal data by the EU.
                  </p>
                  <p className="text-fitpeo-white">
                    We will retain your IP address for 90 days after which time
                    it is automatically removed. Emails via Brevo will be kept
                    indefinitely to market products, services and insights
                    related to Design Declares. Personal details can be removed
                    via Brevo by unsubscribing at the bottom of any email send
                    out.
                  </p>
                  <p className="text-fitpeo-white">
                    If you have any questions or concerns about our use of your
                    personal information, please let us know by sending an email
                    to{" "}
                    <a
                      className="focus-ring group relative w-fit inline underline transition-colors hocus:text-[--focus-color]"
                      href="mailto:hello@designdeclares.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      hello@designdeclares.com
                    </a>
                    .
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;

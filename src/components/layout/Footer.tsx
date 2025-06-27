import { Link } from "react-router";
import NewsletterForm from "./NewsletterForm";

const Footer = () => {
  const footerNavLinks = [
    {
      name: "Contact",
      href: "/contact",
      target: "_self",
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/design_declares/",
      target: "_blank",
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/groups/12699995/",
      target: "_blank",
    },
    {
      name: "Privacy Policy",
      href: "/privacy-policy",
      target: "_self",
    },
  ];
  return (
    <footer className="px-4 md:px-6 py-[3rem] border-t-[--rounded-main] border-fitpeo-red bg-fitpeo-red  !text-fitpeo-black [--focus-color:theme(colors.fitpeo.white)] md:sticky bottom-0">
      <div className="container">
        <div className="grid grid-cols-12 gap-y-16 md:gap-x-8 md:gap-y-16">
          <div className="col-span-12 row-span-2 md:col-span-4">
            <span className="!text-fitpeo-black font-display block w-min !text-[3rem]">
              Design Declares
            </span>
          </div>
          <div className="col-span-12 md:col-span-4">
            <nav
              className="grid grid-cols-2 flex-col items-start gap-x-8 gap-y-2"
              aria-label="Menu"
            >
              {footerNavLinks.map((link) => (
                <div key={link.name} className="col-span-1 sm:col-span-2">
                  {link.target === "_self" ? (
                    <Link
                      className="focus-ring group relative w-fit transition-colors hocus:underline"
                      to={link.href}
                      target={link.target}
                      onClick={() =>
                        window.scrollTo({ top: 0, behavior: "smooth" })
                      }
                    >
                      {link.name}
                    </Link>
                  ) : (
                    <a
                      className="focus-ring group relative w-fit transition-colors hocus:underline"
                      href={link.href}
                      target={link.target}
                      rel="noopener noreferrer"
                    >
                      {link.name}
                    </a>
                  )}
                </div>
              ))}
            </nav>
          </div>
          <div className="col-span-12 space-y-4 md:col-span-4">
            <p className="font-bold">Sign up to the D! Newsletter</p>
            <NewsletterForm />
          </div>
          <div className="col-span-12 space-y-4 md:col-span-8">
            <div className="*:my-12 first:*:mt-0 last:*:mb-0 [&_li]:mb-1 [&_ol]:list-decimal [&_ol]:pl-4 [&_p]:my-6 [&_ul]:list-disc [&_ul]:pl-4">
              <p className="font-p-sm">
                This website has been built following low-carbon principles of
                web development and hosted using serverless computing, by only
                allocating energy when needed and on demand.{" "}
                <a
                  className="focus-ring group relative w-fit inline underline transition-colors hocus:text-[--focus-color]"
                  href="https://digitalbeacon.co/report/designdeclares-com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Learn more about our carbon footprint
                </a>
                .
              </p>
              <p className="font-p-sm">
                Empowered by{" "}
                <a
                  className="focus-ring group relative w-fit inline underline transition-colors hocus:text-[--focus-color]"
                  href="https://driftime.media"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Driftime®
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import { Link } from "react-router";

const NotFound = () => {
  return (
    <section className="px-4 md:px-6 py-16 first:pt-8 last:pb-8">
      <div className="container">
        <div style={{ opacity: 1, transform: 'none' }}>
          <div className="grid grid-cols-12 gap-y-8 md:gap-x-16">
            <div className="col-span-12 lg:col-span-4">
              <div className="md:sticky md:top-8">
                <h1 className="font-h3 sr-only">404 Not Found</h1>
                <h2 className="font-h3 font-semibold text-fitpeo-white">Page Not Found</h2>
              </div>
            </div>
            <div className="col-span-12 space-y-12 lg:col-span-7 lg:col-start-6">
              <div className="flex flex-col gap-y-8 border p-4 md:p-10 border-fitpeo-gray-400 text-fitpeo-white">
                <h2 className="font-h1 text-fitpeo-white">404 - Oops, Something's Missing!</h2>
                <div className="*:my-12 first:*:mt-0 last:*:mb-0 [&_p]:my-6">
                  <p className="font-p-sm text-fitpeo-gray-400">
                    It looks like the page you're looking for doesn't exist or has been moved. Don't worry, let's get you back on track!
                  </p>
                </div>
                <div className="flex items-center gap-x-4">
                  <Link
                    to="/"
                    className="focus-ring font-button group relative flex max-h-fit w-full items-center justify-center rounded-full px-6 py-3 text-center transition-colors md:max-w-fit md:py-4 border border-transparent bg-fitpeo-white text-fitpeo-black hocus:bg-fitpeo-red"
                  >
                    Back to Home
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

export default NotFound
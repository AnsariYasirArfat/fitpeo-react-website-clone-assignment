import { Link, useLocation } from "react-router";
import FloatingMenu from "./FloatingMenu";

const Header = () => {
  const { pathname } = useLocation();
  const isHomePage = pathname === "/";
  return (
    <header
      className={`px-4 md:px-6 bg-fitpeo-black text-fitpeo-white ${
        isHomePage ? "py-0" : "py-6"
      } `}
    >
      <div className="container">
        {!isHomePage && (
          <Link
            className="focus-ring group relative w-fit transition-colors inline-block"
            to="/"
            data-rac=""
          >
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 44 59"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              className="w-11 pl-0.5 sm:pl-1"
              role="img"
              aria-label="Design Declares!"
            >
              <path d="M15.052,59l-15.052,0l-0,-57.705l15.052,0c8.096,0 11.705,3.925 11.705,12.722l0,31.809c0,9.112 -3.609,13.174 -11.705,13.174Zm-3.574,-10.75l1.293,-0c1.61,-0 2.284,-0.453 2.284,-3.26l0,-30.29c0,-2.874 -0.895,-3.107 -1.978,-3.107l-1.599,-0l0,36.657Z"></path>
              <path d="M43.953,6.9l-6.44,36.806l-6.384,-36.813c-0.285,-3.719 2.668,-6.893 6.412,-6.893c3.748,0 6.704,3.181 6.412,6.904l0,-0.004Zm0.047,44.959c0,3.553 -2.911,6.433 -6.501,6.433c-3.59,-0 -6.501,-2.88 -6.501,-6.433c-0,-3.553 2.911,-6.434 6.501,-6.434c3.59,0 6.501,2.881 6.501,6.434Z"></path>
            </svg>
          </Link>
        )}
        <FloatingMenu />
      </div>
    </header>
  );
};

export default Header;

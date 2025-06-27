import Footer from "@/components/layout/Footer";
import { Outlet, useLocation } from "react-router";
import Header from "./Header";
import { useScrollProgress } from "@/hooks/useScrollProgress";
import { useEffect } from "react";

export default function Layout() {
  const progress = useScrollProgress();
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div>
      <div className="fixed top-0 z-10 h-2 w-full">
        <div
          className="h-full w-full origin-left bg-fitpeo-red will-change-transform"
          style={{ transform: `scaleX(${progress}) translateZ(0px` }}
        ></div>
      </div>
      <div className="relative">
        <Header />
        <main className="relative z-[1] -mb-[--rounded-main] rounded-b-[--rounded-main] bg-fitpeo-black pb-48">
          <Outlet />
        </main>
      </div>
      <Footer />
    </div>
  );
}

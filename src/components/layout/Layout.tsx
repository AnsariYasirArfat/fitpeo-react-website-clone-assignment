import Footer from "@/components/layout/Footer";
import { Outlet } from "react-router";
import Header from "./Header";
import { useScrollProgress } from "@/hooks/useScrollProgress";

export default function Layout() {
  const progress = useScrollProgress();  // 0 at top, 1 at bottom
  return (
    <div>
      <div className="fixed top-0 z-10 h-2 w-full">
        <div
          className="h-full w-full origin-left bg-fitpeo-red will-change-transform"
          // style={{ transform: "scaleX(0.50) translateZ(0px)" }}
          style={{ transform: `scaleX(${progress}) translateZ(0px` }}
        ></div>
      </div>
      <div className="relative">
        <Header />
        <main className="flex-grow">
          <div className="pt-24 pb-4 max-w-[95%] sm:max-w-[90%] mx-auto w-full">
            <Outlet />
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}

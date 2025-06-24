import Footer from "@/components/layout/Footer";
import { Outlet } from "react-router";
import Header from "./Header";

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <div className="pt-24 pb-4 max-w-[95%] sm:max-w-[90%] mx-auto w-full">
          <Outlet />
        </div>
      </main>
      <Footer />
    </div>
  );
}

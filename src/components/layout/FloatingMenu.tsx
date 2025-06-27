import { useState, useEffect, useRef } from "react";
import { motion } from "motion/react";
import { Link } from "react-router";
import GlobalChapterIcon from "../icons/GlobalChapterIcon";
import PlusIcon from "../icons/PlusIcon";
import { floatingMenuNav } from "@/data/floatingMenuNav";

const FloatingMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Show content when opening
  useEffect(() => {
    if (isOpen) setShowContent(true);
  }, [isOpen]);

  // Click outside to close
  useEffect(() => {
    if (!isOpen) return;
    const handleClick = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [isOpen]);

  // When height animation finishes and menu is closed, hide content
  const handleHeightAnimationComplete = () => {
    if (!isOpen) setShowContent(false);
  };

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 z-10 bg-black/30 backdrop-blur-sm"
          aria-hidden="true"
        />
      )}
      <motion.div
        ref={menuRef}
        initial={{ opacity: 0, translateY: 20 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="fixed bottom-4 right-4 z-20 border border-fitpeo-black bg-fitpeo-white text-fitpeo-black max-sm:left-4 md:bottom-6 md:right-6"
      >
        <motion.div
          animate={isOpen ? { width: "26rem" } : { width: "13rem" }}
          transition={
            isOpen ? { duration: 0.3 } : { duration: 0.3, delay: 0.3 }
          }
          className="max-sm:!w-auto"
        >
          <div className="flex h-full flex-col">
            <button
              type="button"
              aria-label={isOpen ? "Close Menu" : "Open Menu"}
              className="flex h-12 w-full items-center gap-x-3 border-fitpeo-black px-3 transition-colors justify-between border-b pr-0 hover:bg-fitpeo-red"
              aria-hidden={isOpen ? "true" : undefined}
              onClick={() => setIsOpen((open) => !open)}
            >
              <span>Menu</span>
              <span className="flex aspect-square h-full items-center justify-center border-l border-l-fitpeo-black">
                <PlusIcon
                  className={`size-8 transition-transform duration-300 ${
                    isOpen ? "rotate-45" : "rotate-0"
                  }`}
                />
              </span>
            </button>

            <motion.div
              animate={
                isOpen
                  ? { maxHeight: "500px", opacity: 1 }
                  : { maxHeight: 0, opacity: 0 }
              }
              transition={
                isOpen
                  ? { duration: 0.3, delay: 0.3 }
                  : { duration: 0.3 }
              }
              className="-mb-px box-border overflow-hidden"
              onAnimationComplete={handleHeightAnimationComplete}
            >
              {showContent && (
                <>
                  <span
                    data-focus-scope-start="true"
                    hidden
                    aria-hidden="true"
                  />
                  <div className="react-aria-ModalOverlay" data-rac>
                    <div className="" data-rac>
                      <div
                        style={{
                          border: 0,
                          clip: "rect(0,0,0,0)",
                          clipPath: "inset(50%)",
                          height: 1,
                          margin: -1,
                          overflow: "hidden",
                          padding: 0,
                          position: "absolute",
                          width: 1,
                          whiteSpace: "nowrap",
                        }}
                      >
                        <button
                          aria-label="Dismiss"
                          tabIndex={-1}
                          style={{ width: 1, height: 1 }}
                        />
                      </div>
                      <section
                        role="dialog"
                        tabIndex={-1}
                        className=""
                        style={{ height: "auto" }}
                      >
                        <h2 slot="title" className="sr-only">
                          Menu
                        </h2>
                        <nav
                          className="flex flex-col gap-x-8 sm:w-[26rem]"
                          aria-label="Menu"
                        >
                          {floatingMenuNav.map(({ label, to, icon: Icon }) => (
                            <Link
                              key={to}
                              className="relative flex h-12 w-full items-center gap-x-3 border-fitpeo-black px-3 transition-colors hocus:underline"
                              to={to}
                              target="_self"
                              onClick={() => setIsOpen(false)}
                            >
                              <Icon className="w-5" />
                              {label}
                            </Link>
                          ))}
                        </nav>
                        <button
                          type="button"
                          className="h-12 w-full items-center border-fitpeo-black px-3 transition-colors flex gap-x-3 border-b hocus:underline"
                        >
                          <GlobalChapterIcon className="w-5" />
                          <span>Choose Global Chapter</span>
                        </button>
                      </section>
                    </div>
                  </div>
                  <span data-focus-scope-end="true" hidden aria-hidden="true" />
                </>
              )}
            </motion.div>

            <a
              className="relative flex h-12 w-full items-center gap-x-3 border-fitpeo-black px-3 transition-colors border-t hover:bg-fitpeo-red"
              href="/#declaration"
              target="_self"
              aria-hidden={isOpen ? "true" : undefined}
            >
              Declare Now
            </a>
          </div>
        </motion.div>
      </motion.div>
    </>
  );
};

export default FloatingMenu;
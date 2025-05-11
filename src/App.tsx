import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import Home from "./components/Home";
import Tech from "./components/Tech";
import Works from "./components/Works";
import Contact from "./components/Contact";
import Language from "./components/Language";
import type { MenuItemType } from "./types/MenuType";
import Projects from "./components/Project";
import { cn } from "./lib/utils";

import cv from "./assets/CV_PHAM-DUC-NAM_FRONT-END DEVLOPER.pdf";
import logo from "./assets/home.jpg";
import { Toaster } from "sonner";
import { Facebook } from "lucide-react";

export default function App() {
  const { t } = useTranslation();

  const menu: MenuItemType[] = [
    {
      id: "tech",
      label: t("Technologies"),
      elm: <Tech scrollId={sessionStorage.getItem("scrollToId")} />,
    },
    {
      id: "work",
      label: t("Work"),
      elm: <Works scrollId={sessionStorage.getItem("scrollToId")} />,
    },
    {
      id: "projects",
      label: t("Projects"),
      elm: (
        <Projects
          handleClick={() => handleMenuClick("contact")}
          scrollId={sessionStorage.getItem("scrollToId")}
        />
      ),
    },
    { id: "contact", label: t("Contact"), elm: <Contact /> },
  ];

  const handleMenuClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      sessionStorage.setItem("scrollToId", id);
    }
  };

  const handleClearSession = () => {
    sessionStorage.removeItem("scrollToId");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleOpenCV = () => {
    window.open(cv, "_blank");
  };

  const handleOpenFB = () => {
    window.open("https://www.facebook.com/debtor.bns2/", "_blank");
  };

  useEffect(() => {
    const scrollToId = sessionStorage.getItem("scrollToId");

    if (scrollToId) {
      const element = document.getElementById(scrollToId);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
          sessionStorage.removeItem("scrollToId");
        }, 100);
      }
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const OFFSET_THRESHOLD = 100;
      if (window.scrollY === 0) {
        sessionStorage.removeItem("scrollToId");
        return;
      }
      for (const item of menu) {
        const el = document.getElementById(item.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top > 0 && rect.top <= OFFSET_THRESHOLD) {
            sessionStorage.setItem("scrollToId", item.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, [menu]);

  return (
    <div className="w-full">
      <div className="flex flex-col min-h-[50vh] md:min-h-screen w-full">
        <nav className="sticky top-0 px-4 py-2 z-10 border-b border-slate-100 bg-white">
          <div className="flex justify-between items-center">
            <span
              className="font-bold cursor-pointer"
              onClick={handleClearSession}
            >
              PHAM DUC NAM
            </span>
            <div className="flex flex-wrap justify-center space-x-4">
              <Language />
              {menu.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleMenuClick(item.id)}
                  className={cn(
                    "hidden md:block h-9 px-3 cursor-pointer rounded-lg hover:bg-slate-50 font-medium"
                  )}
                >
                  {item.label}
                </button>
              ))}
              <button
                className="h-9 px-3 cursor-pointer rounded-lg text-white bg-black"
                onClick={handleOpenCV}
              >
                {t("Resume")}
              </button>
            </div>
          </div>
        </nav>

        <div className="flex-grow pt-4 md:pt-0 px-4 md:px-8">
          <div className="min-h-[50vh] md:min-h-screen flex items-center justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-10 content-center">
              <div className="flex flex-col justify-center h-full">
                <Home />
                <div className="flex items-center gap-3 mt-4">
                  <button
                    className="h-9 px-3 cursor-pointer rounded-lg text-white bg-black"
                    onClick={() => handleMenuClick("tech")}
                  >
                    {t("About me")}
                  </button>
                  <button
                    className="h-9 px-3 cursor-pointer rounded-lg border border-slate-700"
                    onClick={() => handleMenuClick("contact")}
                  >
                    {t("Contact")}
                  </button>
                </div>
              </div>
              <img src={logo} alt="nampd" />
            </div>
          </div>

          {menu.map((item) => (
            <section key={item.id} id={item.id}>
              {item.elm}
            </section>
          ))}
        </div>

        <div id="footer">
          <div className="px-8 flex flex-col md:flex-row justify-between items-center text-slate-400">
            <span>Gmail: nampdb.bns2@gmail.com</span>
            <div className="flex items-center gap-4 pb-1">
              <span>{t("SN")}</span>
              <div className="h-[1px] w-10 bg-slate-400" />
              <Facebook
                color="#90a1b9"
                className="cursor-pointer"
                onClick={handleOpenFB}
              />
            </div>
          </div>
        </div>
      </div>
      <Toaster position="bottom-center" />
    </div>
  );
}

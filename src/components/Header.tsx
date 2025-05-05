import type { MenuItemType } from "@/types/MenuType";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import About from "./About";
import Contact from "./Contact";
import Resume from "./Resume";
import Works from "./Works";
import { Button } from "./ui/button";

const Header = () => {
  const { t } = useTranslation();

  const menu: MenuItemType[] = [
    { id: "about", label: t("Abount"), elm: <About /> },
    { id: "contact", label: t("Contact"), elm: <Contact /> },
    { id: "work", label: t("Work"), elm: <Works /> },
    { id: "resume", label: t("Resume"), elm: <Resume /> },
  ];

  const handleMenuClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      window.history.pushState(null, "", `#${id}`);
    }
  };

  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (hash) {
      const element = document.getElementById(hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }

    const handleHashChange = () => {
      const newHash = window.location.hash.replace("#", "");
      if (newHash) {
        const element = document.getElementById(newHash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  return (
    <div className="flex flex-col min-h-screen w-full">
      <nav className="sticky top-0 p-4 z-10">
        <div className="flex flex-wrap justify-center space-x-6">
          {menu.map((item) => (
            <Button key={item.id} onClick={() => handleMenuClick(item.id)} variant="ghost">
              {item.label}
            </Button>
          ))}
        </div>
      </nav>

      <div className="flex-grow">
        {menu.map((item) => (
          <section
            key={item.id}
            id={item.id}
            className={`min-h-screen flex items-center justify-center text-white text-3xl font-bold`}
          >
            <div className="text-center p-8">
              <h2 className="text-4xl mb-4">{item.label}</h2>
              <p className="text-xl">
                Đây là nội dung của phần {item.label.toLowerCase()}
              </p>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default Header;

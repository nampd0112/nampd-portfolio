import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import en from "../assets/en.png";
import vi from "../assets/vi.png";

const Language = () => {
  const { i18n } = useTranslation();

  const [enabled, setEnabled] = useState(false);
  const savedLang = localStorage.getItem("lang");

  const toggleLanguage = () => {
    const newLang = i18n.language === "en" ? "vi" : "en";
    i18n.changeLanguage(newLang);
    localStorage.setItem("lang", newLang);
  };

  const handleToggle = () => {
    toggleLanguage();
    const newState = !enabled;
    setEnabled(newState);
  };

  useEffect(() => {
    setEnabled(savedLang === "vi");
  }, [savedLang]);

  return (
    <div className="flex items-center space-x-2">
      <button
        type="button"
        className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-transparent focus:ring-offset-2 ${
          enabled ? "bg-blue-500/35" : "bg-gray-200"
        }`}
        role="switch"
        aria-checked={enabled}
        onClick={handleToggle}
      >
        <img
          src={enabled ? vi : en}
          className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
            enabled ? "translate-x-5" : "translate-x-0"
          }`}
        />
      </button>
    </div>
  );
};

export default Language;

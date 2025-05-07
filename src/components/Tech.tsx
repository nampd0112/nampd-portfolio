import { listTechs } from "@/constants";
import { useTranslation } from "react-i18next";

const Tech = () => {
  const { t } = useTranslation();
  return (
    <div className="pt-20">
      <div className="text-center text-3xl font-bold">
        {t("Technologies I Can")}
      </div>

      <div className="overflow-hidden relative mt-8">
        <div className="animate-slide flex items-center gap-3">
          {[...listTechs, ...listTechs].map((tech, index) => (
            <div
              key={index}
              className="border border-slate-600 py-3 px-6 rounded-2xl whitespace-nowrap min-w-max"
            >
              {tech.name}
            </div>
          ))}
        </div>
        <div className="absolute top-0 left-0 w-16 h-full bg-gradient-to-r from-white to-transparent pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-16 h-full bg-gradient-to-l from-white to-transparent pointer-events-none"></div>
      </div>
    </div>
  );
};

export default Tech;

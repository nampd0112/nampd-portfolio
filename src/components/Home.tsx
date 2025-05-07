import { useTranslation } from "react-i18next";
import { ReactTyped } from "react-typed";
const Home = () => {
  const { t } = useTranslation();
  return (
    <div>
      <div className="flex flex-col">
        <h1 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-pink-500 via-purple-600 to-blue-500 text-transparent bg-clip-text">
          {t("PHAM DUC NAM")}
        </h1>
        <ReactTyped
          strings={[`${t("FRONT-END DEVELOPER")}`]}
          typeSpeed={70}
          showCursor={false}
          className="text-black text-3xl md:text-5xl font-bold"
        />
        <span className="max-w-[600px] text-muted-foreground md:text-xl text-slate-500">
          {t(
            "With over 3 years of experience in building modern and performance-optimized user interfaces. I continuously strive to learn and improve my skills to deliver the best user experience."
          )}
        </span>
      </div>
    </div>
  );
};

export default Home;

import { useTranslation } from "react-i18next";

// images
import remarketing from "../assets/remarketing.png";
import art from "../assets/1art.png";
import homeVn from "../assets/home_vn.png";
import vnReview from "../assets/vn_review.png";
import vala from "../assets/vala.png";
import default_img from "../assets/frontend.jpg";

// icon
import { ArrowRight } from "lucide-react";

const Projects = ({ handleClick }: { handleClick: () => void }) => {
  const { t } = useTranslation();

  const listProject = [
    {
      image: default_img,
      name: t("International Payment System - Remittance Products"),
      tags: ["Web", "BPM", t("Internal")],
      des: t("An project bpm integration"),
    },
    {
      image: default_img,
      name: t("Money transfer system over 5 billion"),
      tags: ["Web", "BPM", t("Internal")],
      des: t("An project bpm integration"),
    },
    {
      image: default_img,
      name: t("Credit appraisal system"),
      tags: ["Web", "BPM", t("Internal")],
      des: t("An project bpm integration"),
    },
    {
      image: art,
      name: "1Art",
      tags: [t("Modern Web App"), t("Artificial Intelligence")],
      des: t(
        "Automated art selling system, allowing users to create and trade unique digital artworks. And create their own paintings."
      ),
    },
    {
      image: remarketing,
      name: "Re:marketing",
      tags: ["Web", t("Chrome Extension"), t("Automation")],
      des: t(
        "The world's No. 1 Fanpage re-marketing software, expanding to 7 countries. Millions of messages sent every month. Software trusted by Google."
      ),
    },
    {
      image: vala,
      name: "BKAV VALA",
      tags: [t("Modern Web App"), t("Mobile")],
      des: t(
        "Draft, review, publish, store and search for documents of rules, regulations, procedures... ... Manage and share internal contacts, customers, partners, suppliers..."
      ),
    },
    {
      image: homeVn,
      name: "Home",
      tags: [t("Modern Web App")],
      des: t(
        "A Vietnamese online news platform that offers a variety of content, including trending topics, entertainment, and discussions."
      ),
    },
    {
      image: vnReview,
      name: "VNReview",
      tags: [t("Modern Web App")],
      des: t(
        "Life sciences information, product reviews and advice community - Intel and Samsung are both struggling to compete in the semiconductor market."
      ),
    },
  ];

  return (
    <div className="pt-20">
      <div className="text-center text-5xl font-bold">{t("Projects")}</div>
      <div className="text-center text-2xl font-medium text-black/55 pt-1">
        {t("(Approved for public release)")}
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {listProject.map((project, index) => (
          <div
            key={index}
            className="w-full border border-slate-300 rounded-lg overflow-hidden shadow-sm"
          >
            <div
              className="w-full h-56 rounded-t-lg bg-cover bg-top-left transition-transform duration-300 ease-in-out hover:scale-105"
              style={{ backgroundImage: `url(${project.image})` }}
            />
            <div className="px-6 pt-6 pb-3">
              <span className="font-medium">{project.name}</span>
            </div>
            <div className="flex flex-wrap items-center gap-4 px-6">
              {project.tags.map((tag, index) => (
                <div className="px-2 bg-slate-100 rounded-full" key={index}>
                  <span className="text-sm font-medium text-gray-600">
                    {tag}
                  </span>
                </div>
              ))}
            </div>
            <div className="px-6 pt-4 pb-8">
              <span className="text-gray-700">{project.des}</span>
            </div>
            <div className="px-6 pb-8">
              <button
                className="h-8 border-2 border-slate-200 bg-white rounded-xl px-2 text-sm font-medium flex items-center cursor-pointer"
                onClick={handleClick}
              >
                {t("Continute")}
                <ArrowRight size={16} className="ml-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;

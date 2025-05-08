import { useTranslation } from "react-i18next";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { useEffect, useRef, useState } from "react";

interface Skill {
  id: string;
  name: string;
  value: number;
}

const skills: Skill[] = [
  { id: "js-ts", name: "Javascript\nTypescript", value: 90 },
  { id: "html-css", name: "HTML / CSS", value: 95 },
  { id: "react", name: "React", value: 90 },
  { id: "react-native", name: "React Native", value: 75 },
  { id: "next", name: "Next.js", value: 60 },
  { id: "css", name: "Tailwind CSS", value: 95 },
  { id: "git", name: "Git", value: 70 },
  { id: "antd", name: "Antd Design", value: 80 },
  { id: "shadcn", name: "Shadcn UI", value: 80 },
  { id: "material", name: "Material UI", value: 65 },
];

interface ProgressMap {
  [key: string]: number;
}

const Tech = ({ scrollId }: { scrollId: string | null }) => {
  const { t } = useTranslation();
  const [progress, setProgress] = useState<ProgressMap>({});
  const hasAnimated = useRef(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!scrollId || scrollId !== "tech") {
      hasAnimated.current = false;
      setProgress({});
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !hasAnimated.current) {
        hasAnimated.current = true;
        const interval = setInterval(() => {
          setProgress((prev) => {
            const updated: ProgressMap = { ...prev };
            let done = true;

            skills.forEach((skill) => {
              if (!updated[skill.id] || updated[skill.id] < skill.value) {
                updated[skill.id] = (updated[skill.id] || 0) + 1;
                done = false;
              }
            });

            if (done) clearInterval(interval);
            return updated;
          });
        }, 20);
      }
    });

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, [scrollId]);

  return (
    <div ref={sectionRef} className="pt-20 bg-slate-50 -mx-8 px-8">
      <div className="text-center text-3xl font-bold text-black">
        {t("Technologies I Can")}
      </div>
      <div className="p-8 grid grid-cols-2 md:grid-cols-5 gap-8">
        {skills.map((skill) => (
          <div key={skill.id} className="flex flex-col items-center bg-slat">
            <div className="w-24 h-24">
              <CircularProgressbar
                value={progress[skill.id] || 0}
                text={`${progress[skill.id] || 0}%`}
                styles={buildStyles({
                  textColor: "#000",
                  pathColor: "#9810fa",
                  trailColor: "#e2e8f0",
                })}
              />
            </div>
            <p className="text-center mt-2 whitespace-pre-line font-semibold">
              {skill.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tech;

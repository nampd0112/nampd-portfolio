import { useTranslation } from "react-i18next";

const Works = () => {
  const { t } = useTranslation();

  const timelineData = [
    {
      title: t("Intern"),
      organization: "Vivoo Global",
      duration: t("Sep 2021 - Feb 2022"),
      points: [
        t(
          "Participate in building the interface of some sales websites, designing websites using AdobeXD..."
        ),
      ],
    },
    {
      title: t("Apprentice Employee"),
      organization: t("BKAV Join Stock Company"),
      duration: t("Mar 2022 - Mar 2023"),
      points: [
        t(
          "Learning tools and technologies:  the tools, frameworks, and technologies used by the company (ReactJs, React Native, Redux, Ant Design,....)."
        ),
        t("Practice through small exercises, fix bug, maintain code."),
      ],
    },
    {
      title: t("Specialist"),
      organization: t("BKAV Join Stock Company"),
      duration: t("Mar 2023 - Sep 2023"),
      points: [
        t("Build and use optimal user interfaces (UI/UX)."),
        t("Connect and interact with Backend/API."),
        t("Optimized performance and scalability."),
        t("Continuous improvement and operational support."),
      ],
    },
    {
      title: t("Specialist"),
      organization: "Vivoo Global",
      duration: t("Oct 2023 - Jun 2024"),
      points: [
        t("Build and use optimal user interfaces (UI/UX)."),
        t("Connect and interact with Backend/API."),
        t("Testing and debugging the interface."),
        t("Ensure responsiveness and browser compatibility."),
      ],
    },
    {
      title: t("Specialist"),
      organization: t("An Binh Commercial Joint Stock Bank"),
      duration: t("Aug 2024 - Now"),
      points: [
        t("Build and use optimal user interfaces (UI/UX)."),
        t("Connect and interact with Backend/API."),
        t("Testing and debugging the interface."),
        t("Ensure responsiveness and browser compatibility."),
      ],
    },
  ];

  return (
    <div className="pt-24">
      <div className="text-center text-5xl font-bold pb-1">
        {t("Work Experience")}
      </div>
      <div className="text-center text-2xl font-medium text-black/55 pt-1 pb-10">
        {t("What I have done so far")}
      </div>
      <div className="bg-white text-gray-900 min-h-screen p-4 flex items-center justify-center">
        <div className="max-w-4xl w-full">
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-300"></div>

            {timelineData.reverse().map((item, index) => {
              const isLeft = index % 2 === 0;
              return (
                <div
                  key={index}
                  className="mb-20 grid md:grid-cols-2 items-start gap-4 relative"
                >
                  <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 top-2 z-10">
                    <div className="h-5 w-5 bg-white border-2 border-gray-400 rounded-full"></div>
                  </div>
                  <div
                    className={`${
                      isLeft
                        ? "md:pr-8 md:text-right"
                        : "md:pr-8 md:text-right order-2 md:order-none"
                    }`}
                  >
                    {isLeft ? (
                      <div className="bg-gray-100 p-4 rounded-lg inline-block w-full md:max-w-md">
                        <h2 className="text-lg font-bold text-purple-600">
                          {item.title}
                        </h2>
                        <p className="font-medium text-gray-600">
                          {item.organization}
                        </p>
                        <ul className="list-disc list-inside text-sm space-y-2 mt-4 text-gray-600">
                          {item.points.map((point, i) => (
                            <li key={i}>{point}</li>
                          ))}
                        </ul>
                      </div>
                    ) : (
                      <p className="font-medium text-gray-500">
                        {item.duration}
                      </p>
                    )}
                  </div>
                  <div
                    className={`${
                      isLeft
                        ? "md:pl-8 order-2 md:order-none"
                        : "md:pl-8 text-left"
                    }`}
                  >
                    {isLeft ? (
                      <p className="font-medium text-gray-500">
                        {item.duration}
                      </p>
                    ) : (
                      <div className="bg-gray-100 p-4 rounded-lg md:max-w-md">
                        <h2 className="text-lg font-bold text-purple-600">
                          {item.title}
                        </h2>
                        <p className="font-medium text-gray-600">
                          {item.organization}
                        </p>
                        <ul className="list-disc list-inside text-sm space-y-2 mt-4 text-gray-700">
                          {item.points.map((point, i) => (
                            <li key={i}>{point}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Works;

import { cn } from "@/lib/utils";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();

  const listContacts = [
    {
      name: "Zalo",
      link: "https://zalo.me/0962638061",
      color: "bg-sky-500",
    },
    {
      name: "Messenger",
      link: "https://www.messenger.com/t/100040664353145",
      color: "bg-fuchsia-300",
    },
  ];
  return (
    <div className="py-20 bg-slate-50 mt-10">
      <div className="text-center text-5xl font-bold">
        {t("What are you waiting for?")}
      </div>
      <div className="text-center text-xl font-medium text-black/55 pt-4">
        {t(
          "I’m not perfect, but I might be the perfect fit for your team – Let’s talk and find out?"
        )}
      </div>
      <div className="pt-5 flex justify-center items-center gap-10">
        {listContacts.map((contact, index) => (
          <a
            key={index}
            href={contact.link}
            target="_blank"
            className={cn(
              "py-4 px-6 shadow-md rounded-2xl font-medium text-white cursor-pointer",
              contact.color
            )}
          >
            {contact.name}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Contact;

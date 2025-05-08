import { Mail, MapPinHouse, Phone, ShieldUser } from "lucide-react";
import { useTranslation } from "react-i18next";
import { toast } from "sonner";

const Contact = () => {
  const { t } = useTranslation();

  const handleClickMail = () => {
    window.open(
      "https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSPFdFRhQlTnwjlSBPpRsHqVnPbwPwjwJDSXzxmjDSxDLhBvxqqzKgPZhXrpQHGhGTbFdcXr",
      "_blank"
    );
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText("0962638061");
      toast.success(t("Copied!"));
    } catch (err) {
      alert("Copied error!");
    }
  };

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
      <div className="pt-8 pb-5 flex flex-col md:flex-row justify-between items-center w-full">
        <div className="w-full md:w-2/5 flex flex-col items-center justify-center py-8 md:border-t-2 md:border-r-2 border-b-2 border-slate-200">
          <Phone color="#9810fa" size={32} />
          <span className="text-black font-medium pt-2 pb-4">{t("Phone")}</span>
          <span
            className="text-black/75 font-medium cursor-cell"
            onClick={handleCopy}
          >
            +84 962 638 061
          </span>
        </div>
        <div className="w-full md:w-2/5 flex flex-col items-center justify-center py-8 md:border-t-2 md:border-l-2 border-b-2 border-slate-200">
          <Mail color="#9810fa" size={32} />
          <span className="text-black font-medium py-4">{t("Gmail")}</span>
          <span
            className="text-black/75 font-medium cursor-pointer hover:underline"
            onClick={handleClickMail}
          >
            nampdb.bns2@gmail.com
          </span>
        </div>
      </div>
      <div className="pt-8 flex flex-col md:flex-row justify-between items-center w-full">
        <div className="w-full md:w-2/5 flex flex-col items-center justify-center py-4 sm:py-8 md:border-t-2 md:border-r-2 border-b-2 border-slate-200">
          <MapPinHouse color="#9810fa" size={32} />
          <span className="text-black font-medium pt-2 pb-4">
            {t("Address")}
          </span>
          <span
            className="text-black/75 font-medium cursor-cell"
            onClick={handleCopy}
          >
            {t("Nghia Thuan, Nghia Dao, Thuan Thanh, BN")}
          </span>
        </div>
        <div className="w-full md:w-2/5 flex flex-col items-center justify-center py-6 md:py-14 md:border-t-2 md:border-l-2 border-b-2 border-slate-200">
          <ShieldUser color="#9810fa" size={32} />
          <span className="text-black font-medium cursor-pointer hover:underline">
            {t("I’m available for both full-time!")}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Contact;

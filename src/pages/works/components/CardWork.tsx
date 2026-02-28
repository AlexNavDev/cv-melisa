import type { DataWork, WorkUrls } from "../data/dataWorks";
import { useState } from "react";
import SocialLinks from "./SocialLinks";

interface Props {
  data: DataWork;
  onClick: (url: WorkUrls) => void;
}

const CardWork = ({ data, onClick }: Props) => {
  const { role, work, background, url } = data;
  const [isOpacity, setIsOpacity] = useState(false);

  const getStyleByRole = () => {
    switch (role) {
      case "Ux/Ui":
        return "inset-shadow-pink-blur-top shadow-sm shadow-pink-blur-bottom bg-text-pink";
      case "Diseño & Dev":
        return "inset-shadow-purple-blur-top shadow-sm shadow-purple-blur-bottom bg-inactive";
      case "Diseño de Marca":
        return "inset-shadow-blue-blur-top shadow-sm shadow-blue-blur-bottom bg-blue-card";
      default:
        return "";
    }
  };

  const styleCard = getStyleByRole();

  const handleIsOpacity = () => {
    setIsOpacity(!isOpacity);
  };

  return (
    <div className="w-58 h-68 m-auto mb-5 relative rounded-tr-2xl rounded-bl-4xl text-text-gray bg-card-bg overflow-hidden">
      <div
        style={{
          backgroundImage: `url(${background})`,
        }}
        className={`w-full h-68 rounded-tr-2xl rounded-bl-4xl  duration-300 bg-contain bg-center ease-in transition-all ${isOpacity ? "opacity-100 scale-110" : "opacity-30 scale-100"} `}
        onClick={handleIsOpacity}
      ></div>
      <div
        className={`w-26 h-22 text-center  flex items-center justify-center absolute top-0 right-0 rounded-tr-2xl rounded-bl-4xl inset-shadow-sm ${styleCard}`}
      >
        <p className="text-xl font-bold">{role}</p>
      </div>

      <SocialLinks url={url} work={work} onClick={onClick} />
    </div>
  );
};

export default CardWork;

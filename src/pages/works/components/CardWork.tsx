import type { DataWork } from "../data/Data-card";
import { useState } from "react";
import SocialLinks from "./SocialLinks";

interface Props {
  data: DataWork;
}

const CardWork = ({ data }: Props) => {
  const { role, work, background, url } = data;
  const [isOpacity, setIsOpacity] = useState(false);

  const getStyleByRole = () => {
    switch (role) {
      case "Ux/Ui":
        return "inset-shadow-pink-blur-top shadow-sm shadow-pink-blur-bottom bg-text-pink";
      case "<Dev/>":
        return "inset-shadow-purple-blur-top shadow-sm shadow-purple-blur-bottom bg-inactive";
      case "Diseño":
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
    <div className="w-58 h-68 m-auto mb-5 relative rounded-tr-2xl rounded-bl-4xl text-text-gray bg-card-bg">
      <div
        style={{
          backgroundImage: `url(${background})`,
        }}
        className={`w-full h-68 rounded-tr-2xl rounded-bl-4xl bg-contain duration-600 ease-in-out transition-opacity  ${isOpacity ? "opacity-100" : "opacity-30"} `}
        onClick={handleIsOpacity}
      ></div>
      <div
        className={`w-19 h-17 flex items-center justify-center absolute top-0 right-0 rounded-tr-2xl rounded-bl-4xl inset-shadow-sm ${styleCard}`}
      >
        <p className="text-xl font-bold">{role}</p>
      </div>

      <SocialLinks url={url} work={work} />
    </div>
  );
};

export default CardWork;

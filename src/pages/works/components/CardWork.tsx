import IMGCODE from "@assets/works-img/code.png";
import IMGEPLAY from "@assets/works-img/play.png";
import IMGEBELANCE from "@assets/works-img/belance.png";
import type { DataWork } from "../data/Data-card";
import { Link } from "react-router-dom";

interface Props {
  data: DataWork;
}

const CardWork = ({ data }: Props) => {
  const { role, work, background, url } = data;

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

  return (
    <div className="w-58 h-68 m-auto mb-5 relative rounded-tr-2xl rounded-bl-4xl text-text-gray bg-card-bg">
      <div
        style={{
          backgroundImage: `url(${background})`,
        }}
        className="w-full h-68 rounded-tr-2xl rounded-bl-4xl bg-contain opacity-30"
      ></div>
      <div
        className={`w-19 h-17 flex items-center justify-center absolute top-0 right-0 rounded-tr-2xl rounded-bl-4xl inset-shadow-sm ${styleCard}`}
      >
        <p className="text-xl font-bold">{role}</p>
      </div>

      <div className="w-44 h-25 flex flex-col items-center justify-evenly  absolute bottom-0 left-0 bg-text-orange rounded-tr-2xl rounded-bl-4xl  inset-shadow-sm inset-shadow-orange-blur-top shadow-sm shadow-orange-blur-bottom">
        <p className="text-2xl font-medium">{work}</p>

        <div className="w-38 h-11 flex justify-between">
          <Link to={url.git} className="size-10">
            <img src={IMGCODE} alt="ir al código" />
          </Link>
          <Link to={url.video} className="size-10">
            <img src={IMGEPLAY} alt="ir a la página" />
          </Link>
          <Link to={url.behance} className="size-10">
            <img src={IMGEBELANCE} alt="ir a belance" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CardWork;

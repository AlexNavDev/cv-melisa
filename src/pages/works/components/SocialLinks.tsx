import IMGCODE from "@assets/works/code.png";
import IMGEPLAY from "@assets/works/play.png";
import IMGEBELANCE from "@assets/works/belance.png";
import { Link } from "react-router-dom";
import type { WorkUrls } from "../data/dataCard";

interface Props {
  url: WorkUrls;
  work: string;
  onClick: (url: WorkUrls) => void;
}

const SocialLinks = ({ url, work, onClick }: Props) => {
  const { git, behance } = url;

  return (
    <div>
      <div className="w-44 h-25 flex flex-col items-center justify-evenly  absolute bottom-0 left-0 bg-text-orange rounded-tr-2xl rounded-bl-4xl  inset-shadow-sm inset-shadow-orange-blur-top shadow-sm shadow-orange-blur-bottom">
        <p className="text-2xl font-medium">{work}</p>

        <div className="w-38 h-11 flex justify-between">
          <Link
            to={git}
            target="_blank"
            rel="noopener noreferrer"
            className="size-10 rounded-full"
          >
            <img src={IMGCODE} alt="ir al código" />
          </Link>
          <div className="size-10 rounded-full" onClick={() => onClick(url)}>
            <img src={IMGEPLAY} alt="ir a la página" />
          </div>
          <Link
            to={behance}
            target="_blank"
            rel="noopener noreferrer"
            className="size-10 rounded-full"
          >
            <img src={IMGEBELANCE} alt="ir a belance" />
          </Link>
        </div>
      </div>
    </div>
  );
};
export default SocialLinks;

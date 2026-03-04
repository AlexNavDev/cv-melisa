import IMGLINE from "@assets/title/Atom-Section-Line.png";
import IMGSECTION from "@assets/title/Atom-Section.png";

interface Props {
  title: string;
}

const Title = ({ title }: Props) => {
  return (
    <div className="h-20 mb-6.25">
      <h2 className="text-2xl text-text-pink animate-opacity-title">{title}</h2>
      <figure>
        <img src={IMGLINE} alt="linea" />
      </figure>
      <figure className="relative">
        <img src={IMGSECTION} alt="división" className="z-50" />
        <div className="w-60 h-6 absolute top-0 -z-10 blur-md animate-flash bg-text-pink/20 "></div>
      </figure>
    </div>
  );
};
export default Title;

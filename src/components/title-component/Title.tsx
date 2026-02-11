import IMGLINE from "@assets/icons-soft-skills/Atom-Section-Line.png";
import IMGSECTION from "@assets/icons-soft-skills/Atom-Section.png";

interface Props {
  title: string;
}

const Title = ({ title }: Props) => {
  return (
    <div className="h-20">
      <h2 className="text-2xl text-text-pink">{title}</h2>
      <figure>
        <img src={IMGLINE} alt="linea" />
      </figure>
      <figure>
        <img src={IMGSECTION} alt="división" />
      </figure>
    </div>
  );
};
export default Title;

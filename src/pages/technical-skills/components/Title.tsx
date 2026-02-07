import { IMGLINE, IMGSECTION } from "../data/icons";

const Title = () => {
  return (
    <div className="h-20">
      <h2 className="text-2xl text-text-pink">Habilidades Técnicas</h2>
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

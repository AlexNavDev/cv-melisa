import type { Certificates } from "../data/dataCertificates";
import { useEffect, useState } from "react";
import { getAnimationDelay } from "../hooks/useCardAnimation";

interface Props {
  data: Certificates;
  onClick: (id: string) => void;
  index: number;
  total: number;
}

const CardCertificate = ({ data, onClick, index, total }: Props) => {
  const { name, url, buttom, id } = data;
  const [delay, setDelay] = useState(0);

  useEffect(() => {
    const update = () => {
      const cols = window.innerWidth >= 768 ? 3 : 2;
      setDelay(getAnimationDelay(index, total, cols));
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [index, total]);

  return (
    <div
      className="w-36 h-34 md:w-[237px] md:h-[186px] animate-revealLeftToRight opacity-0"
      style={{ animationDelay: `${delay}s` }}
    >
      <figure className="h-20 relative md:w-[230px] md:h-[123px]">
        <img
          src={url}
          alt={name}
          className="w-full h-20 mb-3 rounded-2xl md:h-full"
        />
        <figcaption className="font-medium tracking-wide md:text-[14px]">
          {name}
        </figcaption>
        <div
          onClick={() => onClick(id)}
          style={{ backgroundImage: `url(${buttom})` }}
          className="size-10 absolute bottom-1 right-1 opacity-0 transition-all duration-300 animate-fadeIcon md:hover:drop-shadow-orange"
          title="Maximizar"
        />
      </figure>
    </div>
  );
};

export default CardCertificate;

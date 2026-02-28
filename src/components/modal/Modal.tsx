import type { WorkUrls } from "@/pages/works/data/dataWorks";
import ICONPLAY from "@assets/modal/play.png";
import ICONCLOSE from "@assets/modal/close.png";
import { useState } from "react";
interface Props {
  onClick: () => void;
  dataVideo: WorkUrls;
}

const Modal = ({ onClick, dataVideo }: Props) => {
  const [play, setPlay] = useState(false);
  return (
    <div className="fixed inset-0 flex items-center  backdrop-blur-sm animate-fadeIn  bg-black/90">
      <div className="w-full h-125 rounded-2xl font-roboto bg-primary/70 ">
        <div className="w-full h-75 flex flex-col justify-evenly items-end">
          <button onClick={onClick}>
            <img src={ICONCLOSE} alt="icono cerrar" className="w-10" />
          </button>
          <div className="aspect-video w-full rounded-xl overflow-hidden mb-6">
            {play ? (
              <iframe
                className="w-full h-full"
                src={dataVideo.video}
                title="pagina web data midas"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            ) : (
              <div
                onClick={() => setPlay(true)}
                className="w-full h-full bg-black flex items-center justify-center cursor-pointer "
              >
                <img src={ICONPLAY} alt="icono reproducir" />
              </div>
            )}
          </div>
        </div>

        <div className="w-11/12 h-44 m-auto ">
          <h2 className="text-2xl font-bold mb-4 self-center text-text-pink">
            {dataVideo.name}
          </h2>
        </div>
      </div>
    </div>
  );
};
export default Modal;

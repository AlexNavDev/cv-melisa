import type { WorkUrls } from "@/pages/works/data/dataCard";
import { useState } from "react";
interface Props {
  onClick: () => void;
  dataVideo: WorkUrls;
}

const Modal = ({ onClick, dataVideo }: Props) => {
  const [play, setPlay] = useState(false);
  return (
    <div className="fixed inset-0 flex items-center  backdrop-blur-sm animate-fadeIn  bg-black/90">
      <div className="w-full h-110 font-roboto text-text-gray flex flex-col justify-evenly items-end bg-primary/70 ">
        <h2 className="text-2xl font-bold mb-4 self-center">
          Proyecto {dataVideo.name}
        </h2>

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
              className="w-full h-full bg-black flex items-center justify-center cursor-pointer"
            >
              <span className="text-white text-lg"> ▶ Ver demo</span>
            </div>
          )}
        </div>
        <button
          className="w-32 h-10 rounded-md mr-5  bg-red-500"
          onClick={onClick}
        >
          Cerrar
        </button>
      </div>
    </div>
  );
};
export default Modal;

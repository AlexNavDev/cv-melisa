import Modal from "@/components/modal/Modal";
import ICONPLAY from "@assets/modal/play.png";
import { useState } from "react";
import type { DataWork } from "../data/dataWorks";

interface Props {
  onClick: () => void;
  dataModal?: DataWork;
}

const ModalWork = ({ onClick, dataModal }: Props) => {
  if (!dataModal) return null;

  const { url } = dataModal;
  const [play, setPlay] = useState(false);
  return (
    <Modal onClick={onClick}>
      <div className="w-full h-75 flex flex-col justify-evenly items-end">
        <div className="aspect-video w-full rounded-xl overflow-hidden mb-6">
          {play ? (
            <iframe
              className="w-full h-full"
              src={url.video}
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
          {url.name}
        </h2>
      </div>
    </Modal>
  );
};
export default ModalWork;

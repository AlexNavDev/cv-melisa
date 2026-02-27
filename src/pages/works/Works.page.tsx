import SectionMain from "@/components/main/SectionMain";
import Title from "@/components/title/Title";
import { dataWork, type WorkUrls } from "./data/dataCard";
import CardWork from "./components/CardWork";
import Modal from "@/components/modal/Modal";
import { useState } from "react";

const Works = () => {
  const initialDataVideo = {
    git: "",
    video: "",
    name: "",
    behance: "",
  };
  const [isOpen, setIsOpen] = useState(false);
  const [dataVideo, setDataVideo] = useState(initialDataVideo);

  const handleOpenModal = (url: WorkUrls) => {
    setIsOpen(true);
    setDataVideo(url);
  };
  const handleCloseModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <SectionMain>
        <Title title="Trabajos Realizados" />
        {dataWork.map((data) => (
          <CardWork key={data.id} data={data} onClick={handleOpenModal} />
        ))}
      </SectionMain>

      {isOpen && <Modal onClick={handleCloseModal} dataVideo={dataVideo} />}
      {/* <Modal isOpen={isOpen}/> */}
    </>
  );
};
export default Works;

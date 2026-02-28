import type { WorkUrls } from "@/pages/works/data/dataWorks";
import { useState } from "react";

export const useModal = () => {
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

  return { isOpen, handleOpenModal, handleCloseModal, dataVideo };
};

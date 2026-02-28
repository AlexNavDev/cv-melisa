import Container from "@/components/container/Container";
import Title from "@/components/title/Title";
import { dataWork } from "./data/dataWorks";
import CardWork from "./components/CardWork";
import Modal from "@/components/modal/Modal";
import { useModal } from "@/hooks/useModal";

const Works = () => {
  const { isOpen, handleOpenModal, handleCloseModal, dataVideo } = useModal();

  return (
    <>
      <Container>
        <Title title="Trabajos Realizados" />
        {dataWork.map((data) => (
          <CardWork key={data.id} data={data} onClick={handleOpenModal} />
        ))}
      </Container>

      {isOpen && <Modal onClick={handleCloseModal} dataVideo={dataVideo} />}
    </>
  );
};
export default Works;

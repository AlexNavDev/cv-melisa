import Container from "@/components/container/Container";
import Title from "@/components/title/Title";
import { dataCertificates } from "./data/dataCertificates";
import CardCertificate from "./components/CardCertificate";
import { useModal } from "@/hooks/useModal";
import ModalCertificate from "./components/ModalCertificate";

const Certifications = () => {
  const { isOpen, id, handleOpenModal, handleCloseModal } = useModal();
  const dataModal = dataCertificates?.find((data) => data.id === id);

  return (
    <>
      <Container>
        <Title title="Certificados" />

        <div className="w-full flex flex-wrap justify-between font-roboto text-xs">
          {dataCertificates.map((data) => (
            <CardCertificate data={data} onClick={handleOpenModal} />
          ))}
        </div>
      </Container>
      {isOpen && dataModal && (
        <ModalCertificate onClick={handleCloseModal} dataModal={dataModal} />
      )}
    </>
  );
};
export default Certifications;

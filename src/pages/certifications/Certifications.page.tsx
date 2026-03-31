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
        <div className="grid grid-cols-2 gap-4 w-full font-roboto text-xs md:grid-cols-3">
          {dataCertificates.map((data, index) => (
            <CardCertificate
              key={data.id}
              data={data}
              index={index}
              total={dataCertificates.length}
              onClick={handleOpenModal}
            />
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

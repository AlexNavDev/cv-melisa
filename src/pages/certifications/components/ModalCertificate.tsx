import Modal from "@/components/modal/Modal";
import type { Certificates } from "../data/dataCertificates";

interface Props {
  onClick: () => void;
  dataModal: Certificates;
}

const ModalCertificate = ({ onClick, dataModal }: Props) => {
  const { name, url } = dataModal;
  return (
    <Modal onClick={onClick}>
      <div className="w-full h-90 flex flex-col justify-around items-center font-roboto text-text-orange text-2xl font-bold">
        <figure>
          <img src={url} alt={name} />
        </figure>
        <h2>{name}</h2>
      </div>
    </Modal>
  );
};
export default ModalCertificate;

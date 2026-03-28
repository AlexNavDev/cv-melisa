import ICONCLOSE from "@assets/modal/close.png";

interface Props {
  onClick: () => void;
  children: React.ReactNode;
}

const Modal = ({ onClick, children }: Props) => {
  return (
    <div className="fixed inset-0 flex items-center  backdrop-blur-sm animate-fadeIn bg-black/90">
      <div className="w-full h-125 flex flex-col  rounded-2xl font-roboto bg-primary/70 md:w-11/12 md:h-140 md:m-auto ">
        <button onClick={onClick} className="self-end p-3">
          <img src={ICONCLOSE} alt="icono cerrar" className="w-10" />
        </button>
        {children}
      </div>
    </div>
  );
};
export default Modal;

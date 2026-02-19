import type { Certificates } from "../data/dataCertificates";

interface Props {
  data: Certificates;
}

const CardCertificate = ({ data }: Props) => {
  const { name, url, buttom } = data;
  return (
    <>
      <div className="w-36 h-34">
        <figure className="h-20 relative">
          <img src={url} alt={name} className="w-full h-20 mb-3 rounded-2xl" />
          <figcaption className="font-medium tracking-wide">{name}</figcaption>
          <div
            style={{
              backgroundImage: `url(${buttom})`,
            }}
            className="size-10 absolute bottom-1 right-1"
          ></div>
        </figure>
      </div>
    </>
  );
};

export default CardCertificate;

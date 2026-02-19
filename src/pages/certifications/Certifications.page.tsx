import SectionMain from "@/components/section-main/SectionMain";
import Title from "@/components/title-component/Title";
import { dataCertificates } from "./data/dataCertificates";
import CardCertificate from "./components/CardCertificate";

const Certifications = () => {
  return (
    <>
      <SectionMain>
        <Title title="Certificados" />

        <div className="w-full mt-5 flex flex-wrap justify-between font-roboto text-xs">
          {dataCertificates.map((data) => (
            <CardCertificate data={data} />
          ))}
        </div>
      </SectionMain>
    </>
  );
};
export default Certifications;

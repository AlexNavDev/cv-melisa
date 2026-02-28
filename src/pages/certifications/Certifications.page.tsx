import Container from "@/components/container/Container";
import Title from "@/components/title/Title";
import { dataCertificates } from "./data/dataCertificates";
import CardCertificate from "./components/CardCertificate";

const Certifications = () => {
  return (
    <>
      <Container>
        <Title title="Certificados" />

        <div className="w-full mt-5 flex flex-wrap justify-between font-roboto text-xs">
          {dataCertificates.map((data) => (
            <CardCertificate data={data} />
          ))}
        </div>
      </Container>
    </>
  );
};
export default Certifications;

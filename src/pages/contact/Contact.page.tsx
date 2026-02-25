import SectionMain from "@/components/main/SectionMain";
import Title from "@/components/title/Title";
import { dataContact } from "./data/dataContact";
import SectionContact from "./components/SectionContact";

const Contact = () => {
  return (
    <>
      <SectionMain>
        <Title title="Encuentrame" />

        <section className="h-60 mt-3 flex flex-col justify-between ">
          {dataContact.map((data) => (
            <SectionContact key={data.id} data={data} />
          ))}
        </section>
      </SectionMain>
    </>
  );
};
export default Contact;

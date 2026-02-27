import type { Contact } from "../data/dataContact";

interface Props {
  data: Contact;
}

const SectionContact = ({ data }: Props) => {
  const { name, url, info } = data;
  return (
    <address className="w-full h-10 font-roboto font-light">
      <div className="flex gap-4 items-center  ">
        <figure className="w-10">
          <img src={url} alt={name} />
        </figure>
        <p className="text-sm">{info}</p>
      </div>
    </address>
  );
};
export default SectionContact;

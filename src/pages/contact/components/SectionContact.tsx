import { useState } from "react";
import type { Contact } from "../data/dataContact";

interface Props {
  data: Contact;
}

const SectionContact = ({ data }: Props) => {
  const { name, url, info, link } = data;
  const [copied, setCopied] = useState(false);

  const handleCopy = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (err) {
      console.error("Error copiando al portapapeles:", err);
    }
  };

  return (
    <div className="w-full h-10 font-roboto font-light animate-bounceInLeft">
      <div className="flex items-center gap-3" title={name}>
        <figure className="w-10">
          <img src={url} alt={name} />
        </figure>

        {info && (
          <span
            className="text-sm cursor-pointer hover:text-gray-600"
            onClick={() => handleCopy(info)}
          >
            {copied ? "¡Copiado al portapapeles!" : info}
          </span>
        )}

        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-text-orange "
          >
            {link}
          </a>
        )}
      </div>
    </div>
  );
};
export default SectionContact;

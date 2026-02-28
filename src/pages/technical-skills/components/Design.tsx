import { iconsDesign } from "../data/icons";

const Design = () => {
  return (
    <div className="h-64 flex flex-col justify-evenly">
      <p className="text-sm">Diseño UX/UI</p>
      <div className="h-46 flex flex-wrap justify-evenly gap-x-6 text-[11px]">
        {iconsDesign.map(({ id, name, url }) => (
          <figure className="w-14 h-20 flex flex-col items-center " key={id}>
            <figcaption>{name}</figcaption>
            <img src={url} alt={`icon-${name}`} className="w-11.5 h-13.25" />
          </figure>
        ))}
      </div>
    </div>
  );
};
export default Design;
